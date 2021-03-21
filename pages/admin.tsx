import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Resizer from 'react-image-file-resizer'

import styles from '../styles/pages/Admin.module.scss'

const initialProject = {
    name: null,
    description: null,
    project: null,
    github: null,
    imageFile: null
}

export default function Admin() {
    const router = useRouter()
    const [project, setProject] = useState(initialProject)
    const [name, setName] = useState(null)

    useEffect(() => {
        const secret = localStorage.getItem('_homepage_auth_secret_')

        if (secret !== process.env.NEXT_PUBLIC_AUTH_SECRET) router.push('/')
    }, [])

    const addImage = (image) => {
        Resizer.imageFileResizer(image, 800, 800, 'PNG', 100, 0, imageFile => {
            setProject({ ...project, imageFile })
        }, 'base64')
    }

    const inputChange = (event) => {
        const newValue = {}
        newValue[event.target.name] = event.target.value
        setProject({ ...project, ...newValue })
    }

    const createProject = async (event) => {
        event.preventDefault()

        for (let key of Object.keys(project)) {
            if (!project[key]) {
                console.log('notify')
                return
            }
        }

        axios.post('/api/createProject', project)
            .then(res => {
                console.log(res.data)
                setProject(initialProject)
            })
            .catch(e => console.log(e))
    }// usar o toastfy

    const deleteProject = async (event) => {
        event.preventDefault()

        axios.put('/api/deleteProject', { name })
            .then(res => {
                console.log(res.data)
                setName(null)
            })
            .catch( e => console.log(e))
    }

    return (
        <div>
            <Head>
                <title>Admin panel</title>
            </Head>

            <div className={styles.container}>
                <section>Estatísticas de uso</section>
                <section>
                    <h2>CRUD de projetos</h2>
                    <form onSubmit={createProject}>
                        <input type="text" value={project.name || ''} onChange={inputChange}
                            name="name" placeholder="Name" />
                        <input type="text" value={project.description || ''} onChange={inputChange}
                            name="description" placeholder="Description" />
                        <input type="text" value={project.project || ''} onChange={inputChange}
                            name="project" placeholder="Project url" />
                        <input type="text" value={project.github || ''} onChange={inputChange}
                            name="github" placeholder="GitHub url" />
                        <input type="file" name="imageFile"
                            onChange={event => addImage(event.target.files[0])} />
                        <button type="submit">Create Project</button>
                    </form>

                    <form onSubmit={deleteProject}>
                        <input type="text" value={name || ''} onChange={event => setName(event.target.value)}
                            name="name" placeholder="Name of project to delete" />
                        <button type="submit">Delete</button>
                    </form>
                </section>
            </div>
        </div>
    )
} // falta os estilos e o toastify
// está mostrando o conteúdo daqui antes de redirecionar para a home