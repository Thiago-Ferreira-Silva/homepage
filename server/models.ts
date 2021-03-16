import { Entity, PrimaryKey, Property, EntityRepositoryType } from '@mikro-orm/core'
import { v4 as uuid } from 'uuid'
import { ProjectsRepository } from './repositories'

@Entity({ customRepository: () => ProjectsRepository })
class Project {

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

    @Property()
    image: string

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}
//reflect-metadata and "emitDecoratorMetadata": true ?
export { Project }