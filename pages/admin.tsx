import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import Resizer from 'react-image-file-resizer'
import { notify } from '../utils/alerts'

import styles from '../styles/pages/Admin.module.scss'
import { GetServerSideProps } from 'next'
import { MetricsController } from '../server/controllers/metricsController'
import VisitsChart from '../components/VisitsChart'

const initialProject = {
    name: null,
    description: null,
    project: null,
    github: null,
    image: null
}

export default function Admin({ visits }) {
    const router = useRouter()
    const [project, setProject] = useState(initialProject)
    const [name, setName] = useState(null)
    const [authorized, setAuthorized] = useState(false)

    useEffect(() => {
        const secret = localStorage.getItem('_homepage_auth_secret_')

        if (secret !== process.env.NEXT_PUBLIC_AUTH_SECRET) {
            router.push('/')
        } else {
            setAuthorized(true)
        }
    }, [])

    const addImage = (imageFile: File) => {
        Resizer.imageFileResizer(imageFile, 800, 800, 'PNG', 100, 0, image => {
            setProject({ ...project, image })
        }, 'base64')
    }

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = {}
        newValue[event.target.name] = event.target.value
        setProject({ ...project, ...newValue })
    }

    const createProject = async (event: React.FormEvent) => {
        event.preventDefault()

        for (let key of Object.keys(project)) {
            if (!project[key]) {
                notify(`Missing ${key}`, 500)
                return
            }
        }

        axios.post('/api/createProject', project)
            .then(res => {
                notify(res.data.msg, res.data.status)
                setProject(initialProject)
            })
            .catch(e => console.log(e))
    }

    const deleteProject = async (event: React.FormEvent) => {
        event.preventDefault()

        axios.put('/api/deleteProject', { name })
            .then(res => {
                notify(res.data.msg, res.data.status)
                setName(null)
            })
            .catch(e => console.log(e))
    }

    return (
        <div>
            <Head>
                <title>Admin panel</title>
            </Head>

            { authorized ?
                <div className={styles.container}>
                    <section>
                        <h2>Create Project</h2>
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
                        <h2>Remove Project</h2>
                        <form onSubmit={deleteProject}>
                            <input type="text" value={name || ''} onChange={event => setName(event.target.value)}
                                name="name" placeholder="Name of project to delete" />
                            <button type="submit">Delete</button>
                        </form>
                    </section>
                    <section className={styles.metrics}>
                        <VisitsChart visits={visits} />
                        <p>You received {visits.length} visits.</p>
                    </section>
                </div> :
                <div className={styles.container}>
                    <h2>Unauthorized</h2>
                </div>
            }
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const metricsController = new MetricsController()
    const visits = JSON.parse(JSON.stringify(await metricsController.getVisits()))
    return {
        props: { visits }
    }
}