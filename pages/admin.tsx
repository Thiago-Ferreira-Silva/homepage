import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Resizer from 'react-image-file-resizer'

import styles from '../styles/pages/Admin.module.scss'
import Project from '../components/Project'

export default function Admin() {
    const router = useRouter()
    const [project, setProject] = useState({
        name: null,
        description: null,
        project: null,
        github: null,
        image: null,
        imageFile: null
    })

    useEffect(() => {
        const secret = localStorage.getItem('_homepage_auth_secret_')

        if (secret !== process.env.NEXT_PUBLIC_AUTH_SECRET) router.push('/')
    }, [])

    const addImage = (image) => {
        Resizer.imageFileResizer(image, 800, 800, 'PNG', 100, 0, imageFile => {
            setProject({ ...project, imageFile })
        }, 'base64')
    }

    const createProject = async () => {
        axios.post('/api/createProject', project)
            .then()
            .catch(e => console.log(e))
    }// usar o toastfy

    return (
        <div>
            <Head>
                <title>Admin panel</title>
            </Head>

            <div className={styles.container}>
                <section>Estatísticas de uso</section>
                <section>
                    <h2>CRUD de projetos</h2>
                    <input type="file" onChange={event => addImage(event.target.files[0])} />
                    <button onClick={createProject}>Create Project</button>
                </section>
            </div>
        </div>
    )
}
// está mostrando o conteúdo daqui antes de redirecionar para a home