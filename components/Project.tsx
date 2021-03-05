import Image from 'next/image'

import styles from '../styles/components/Project.module.scss'

interface ProjectProps {
    name: string
    description: string
    project: string
    github: string
    image: string
} // check if there are better types

export default function Project({ name, description, project, github, image }: ProjectProps) {
    return (
        <div className={styles.container}>
            <Image src={image} width='350' height='350' alt="Project" />
            <div className={styles.content}>
                <h2>{name}</h2>
                <section>
                    <p>{description}</p>
                    <div className={styles.links}>
                        <a href={project} target="_blank">Link to this project</a> |
                <a href={github} target="_blank">Project on GitHub</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

//corrigir os bugs no calendário e usar a fonte de lá aqui