import 'reflect-metadata'
import { MikroORM } from '@mikro-orm/core'
import config from '../config/mikro-orm'
import { Projects } from '../models'

interface Project {
    name: string
    description: string
    project: string
    github: string
  }

class ProjectsController {
    async getProjects() {
        const orm = await MikroORM.init(config)
        const projectsRepository = orm.em.getRepository(Projects)

        const projects = await projectsRepository.findAll()
        return projects
    }

    async createProject(project: Project) {
        const orm = await MikroORM.init(config)
        const projectsRepository = orm.em.getRepository(Projects)

        try {
            const newProject = projectsRepository.create(project)
            await projectsRepository.persist(newProject).flush()
        } catch(e) {
            return { status: 500, msg: "Error at creating project" }
        }
        return { status: 201, msg: "Successfully created!" }
    }

    async deleteProject(name: string) {
        const orm = await MikroORM.init(config)
        const projectsRepository = orm.em.getRepository(Projects)

        try {
            const project = await projectsRepository.findOne({ name })
            await projectsRepository.removeAndFlush(project)
        } catch(e) {
            return { status: 500, msg: "Error at deleting project" }
        }
        return { status: 201, msg: "Successfully deleted!" }
    }
}
export { ProjectsController }