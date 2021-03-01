import styles from '../styles/components/Project.module.scss'

interface ProjectProps {
    name: string
    description: string
    link: string
    github: string
    image: string
} // check if there are better types

export default function Project({ name, description, link, github, image }: ProjectProps) {
    return (
        <div className="contaier">
            Project
        </div>
    )
}