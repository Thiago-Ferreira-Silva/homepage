import { Column, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('projects')
class Project {
    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    project: string

    @Column()
    github: string

    @Column()
    image: string

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}
//reflect-metadata and "emitDecoratorMetadata": true ?
export { Project }