import Head from 'next/head'
import fs from 'fs'
import path from 'path'

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

const [ projectsJSX, setProjectsJSX ] = useState(null)

useEffect(() => {
  const projectsJSX = projects.map((project: Project) => <Project {...project} key={Math.random()} />)
  setProjectsJSX(projectsJSX)
}, [])

  return (
    <div>
      <Head>
        <title>Homepage | Thiago </title>
      </Head>

      <div className="container">
        <h1>Hello, I'm me, a web developer and math student, I'll put some coll stuff here </h1>

        <p>Not sure about the semantic, I have to improve that.</p>

        <section>
          <h2>Contact</h2>
          <a href="">Links to likedIn</a> |
          <a href=""> GitHub</a> |
          <a href=""> And maybe something else</a> |
          <a href=""> It's better in the botton?</a>
        </section>

        <section>
          <h2>My projects</h2>
          <ul>
            { projectsJSX }
          </ul>
        </section>

        <section>
          <p>A blog, maybe?</p>
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
