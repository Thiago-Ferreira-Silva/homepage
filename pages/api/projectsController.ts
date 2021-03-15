import 'reflect-metadata'
import { getCustomRepository } from 'typeorm'
import { ProjectsRepository } from '../../server/repositories'

class ProjectsController {
    async getProjects() {
        const projectsRepository = getCustomRepository(ProjectsRepository)
        const projects = await projectsRepository.find()

        return projects
    }
}

export { ProjectsController }