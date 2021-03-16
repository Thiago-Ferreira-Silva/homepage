import { Project } from '../models'

import { Options } from '@mikro-orm/core'

const config: Options = {
    type: 'sqlite',
    dbName: 'database.sqlite',
    baseDir: '../database', //é assim?  criar as migrations e fazer funcionar
    entities: [Project],
    debug: process.env.NODE_ENV === 'development',
    migrations: {
        path: '../database/migrations'
    }
}

export default config