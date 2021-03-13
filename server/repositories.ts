import { EntityRepository, Repository } from 'typeorm'
import { Project } from './models'

@EntityRepository(Project)
class ProjectsRepository extends Repository<Project> {}

export { ProjectsRepository }