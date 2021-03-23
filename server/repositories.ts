import { EntityRepository } from '@mikro-orm/sqlite'
import { Metrics, Projects } from './models'

class ProjectsRepository extends EntityRepository<Projects> {}
class MetricsRepository extends EntityRepository<Metrics> {}

export { ProjectsRepository, MetricsRepository }