import { Entity, PrimaryKey, Property, EntityRepositoryType } from '@mikro-orm/core'
import { v4 as uuid } from 'uuid'
import { MetricsRepository, ProjectsRepository } from './repositories'

@Entity({ customRepository: () => ProjectsRepository })
class Projects {

    [EntityRepositoryType]?: ProjectsRepository

    @PrimaryKey()
    readonly id: string

    @Property()
    name: string

    @Property()
    description: string

    @Property()
    project: string

    @Property()
    github: string

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}

@Entity({ customRepository: () => MetricsRepository })
class Metrics {

    [EntityRepositoryType]?: MetricsRepository
    
    @PrimaryKey()
    readonly id: string

    @Property()
    date: number

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}
export { Projects, Metrics }