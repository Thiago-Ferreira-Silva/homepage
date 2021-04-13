import Head from 'next/head'
import { GetStaticProps } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/pages/Home.module.scss'
import Project from '../components/Project'
import { useEffect, useState } from 'react'
import { ProjectsController } from '../server/controllers/projectsController'
import axios from 'axios'

interface Project {
  name: string
  description: string
  project: string
  github: string
  image: string
}

export default function Home({ projects }) {

  const [projectsJSX, setProjectsJSX] = useState(null)

  useEffect(() => {
    const projectsJSX = projects.map((project: Project) => <Project {...project} key={Math.random()} />)
    setProjectsJSX(projectsJSX)
    axios.post('/api/newVisit').catch(e => { })
  }, [])

  return (
    <div>
      <Head>
        <title>Homepage | Thiago </title>
      </Head>

      <div className={styles.container}>
        <section className={styles.content}>
          <h1>Olá, eu sou o Thiago, um desenvolvedor React|Nodejs </h1>
          <p>Eu sou de Minas Gerais e meu hobby favorito é fazer qualquer coisa que vai mudar a forma como eu vejo o mundo e me trazer novos horizontes.</p>
          <p>Meu primeiro contato com o javascript foi por volta de 2013 tentando desenvolver jogos 
em Unity, mas foi apenas recentemente que eu comecei a estudar programação de forma 
séria. Iniciei um curso de desenvolvimento web pouco depois de terminar o ensino médio, 
em 2019, e nele eu aprendi os princípios básicos de javascript, html e css, além de 
fundamentos de jQuery, Vue, Angular, React, SQL e MongoDb, porém o que eu ganhei de 
mais valioso naquele curso foi a capacidade de pesquisar, ler as documentações e 
responder às minhas próprias perguntas.</p>
        </section>

        <section className={styles.projects} >
          <h2>My projects</h2>
          <ul>
            {projectsJSX}
          </ul>
        </section>

        {/*
          <section>
            <p>A blog?</p>
          </section>
        */}

        <section className={styles.contact}>
          <h2>Contact</h2>
          <a href="https://www.linkedin.com/in/FerreiraDaSilvaThiago" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/Thiago-Ferreira-Silva" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </section>

      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const projectsController = new ProjectsController()
  const projects = JSON.parse(JSON.stringify(await projectsController.getProjects()))
  return {
    props: { projects },
    revalidate: 600
  }
}
