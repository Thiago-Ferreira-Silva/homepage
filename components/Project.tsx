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
            <Image src={image} width='200' height='200' alt="Project"/>
            <strong>{name}</strong>
            <p>{description}</p>
            <a href={project} target="_blank">Link to this project</a>
            <br/>
            <a href={github} target="_blank">Project on GitHub</a>
        </div>
    )
}