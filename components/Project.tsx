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
            <Image className={styles.image} src={image} width='350' height='350' alt="Project" />
            <div className={styles.content}>
                <a href={project} target="_blank" className={styles.projectLink}><h2>{name}</h2></a>
                <section>
                    <p>{description}</p>
                    <div className={styles.links}>
                        <a href={github} target="_blank">Project on GitHub</a>
                    </div>
                </section>
            </div>
        </div>
    )
}