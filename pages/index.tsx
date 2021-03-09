import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/pages/Home.module.scss'
import Project from '../components/Project'
import { useEffect, useState } from 'react'

interface Project {
  name: string
  description: string
  project: string
  github: string
  image: string
} //talvez usar context API para não ter que repetir isso

export default function Home({ projects }) {

  const [projectsJSX, setProjectsJSX] = useState(null)

  useEffect(() => {
    const projectsJSX = projects.map((project: Project) => <Project {...project} key={Math.random()} />)
    setProjectsJSX(projectsJSX)
  }, [])

  return (
    <div>
      <Head>
        <title>Homepage | Thiago </title>
      </Head>

      <div className={styles.container}>
        <h1>Hello, I'm me, a web developer and math student, I'll put some cool stuff here </h1>

        <p>Not sure about the semantic, I have to improve that.</p>

        <section className={styles.projects} >
          <h2>My projects</h2>
          <ul>
            {projectsJSX}
          </ul>
        </section>

        <section>
          <p>A blog, maybe?</p>
        </section>

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

// add projects and blog posts dynamically
export async function getStaticProps() {
  const fullPath = path.join(process.cwd(), 'data', 'projects.json')
  const projects = JSON.parse(fs.readFileSync(fullPath, 'utf-8'))

  return {
    props: { projects }
  }
}
