import { Projects, Metrics } from '../models'

import { Options } from '@mikro-orm/core'

const config: Options = {
    type: 'mongo',
    dbName: 'homepage',
    clientUrl: process.env.DB_URL,
    entities: [Projects, Metrics],
    debug: process.env.NODE_ENV === 'development'
}

export default config