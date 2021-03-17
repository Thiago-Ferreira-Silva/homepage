import { Projects } from '../models'

import { Options } from '@mikro-orm/core'

const config: Options = {
    type: 'sqlite',
    dbName: 'database.sqlite',
    entities: [Projects],
    debug: process.env.NODE_ENV === 'development'
}

export default config