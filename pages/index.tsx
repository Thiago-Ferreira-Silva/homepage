import Head from 'next/head'

import styles from '../styles/pages/Home.module.scss'

export default function Home() {
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
            <li>Create a project component</li>
            <li>Pass image, link, GitHub link, name and description via props</li>
          </ul>
        </section>

        <section>
          <p>A blog, maybe?</p>
        </section>
      </div>
    </div>
  )
}
