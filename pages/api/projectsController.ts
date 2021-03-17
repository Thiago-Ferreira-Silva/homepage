import 'reflect-metadata'
import { MikroORM } from '@mikro-orm/core'
import config from '../../server/config/mikro-orm'
import { Projects } from '../../server/models'

class ProjectsController {
    async getProjects() {
        const orm = await MikroORM.init(config)
        const projectsRepository = orm.em.getRepository(Projects)

        const projects = await projectsRepository.find({})
        return projects
    }
}

export { ProjectsController }