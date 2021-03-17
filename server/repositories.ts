import { EntityRepository } from '@mikro-orm/sqlite'
import { Projects } from './models'

class ProjectsRepository extends EntityRepository<Projects> {}

export { ProjectsRepository }