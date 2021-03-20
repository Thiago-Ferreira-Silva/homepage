import 'reflect-metadata'
import { MikroORM } from '@mikro-orm/core'
import config from '../config/mikro-orm'
import { Projects } from '../models'

interface Project {
    name: string
    description: string
    project: string
    github: string
    image: string
  }

class ProjectsController {
    async getProjects() {
        const orm = await MikroORM.init(config)
        const projectsRepository = orm.em.getRepository(Projects)

        const projects = await projectsRepository.find({})
        return projects
    }

    async createProject(project: Project) {
        const orm = await MikroORM.init(config)
        const projectsRepository = orm.em.getRepository(Projects)

        try {
            const newProject = projectsRepository.create(project)
            await projectsRepository.persist(newProject).flush()

            return { status: 201, msg: "Successfully created!" }
        } catch(e) {
            return { status: 500, msg: "Error at creating project" }
        }
    }
}
export { ProjectsController }