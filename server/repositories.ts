import { EntityRepository } from '@mikro-orm/sqlite'
import { Project } from './models'

class ProjectsRepository extends EntityRepository<Project> {}

export { ProjectsRepository }