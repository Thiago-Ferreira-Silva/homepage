import Image from 'next/image'

import styles from '../styles/components/Project.module.scss'

interface ProjectProps {
    name: string
    description: string
    project: string
    github: string
    image: string
}

export default function Project({ name, description, project, github, image }: ProjectProps) {
    return (
        <div className={styles.container}>
            <Image className={styles.image} src={image} width='800' height='800' alt="Project" />
            <div className={styles.content}>
                <a href={project} target="_blank" className={styles.projectLink}><h2>{name}</h2></a>
                <section>
                    <p>{description}</p>
                    <a href={github} target="_blank">Project on GitHub</a>
                </section>
            </div>
        </div>
    )
}