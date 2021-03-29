import 'reflect-metadata'
import { MikroORM } from '@mikro-orm/core'
import config from '../config/mikro-orm'
import { Metrics } from '../models'

class MetricsController {
    async newVisit() {
        const orm = await MikroORM.init(config)
        const metricsRepository = orm.em.getRepository(Metrics)

        try {
            const visit = metricsRepository.create({ date: Date.now() })
            metricsRepository.persistAndFlush(visit)
        } catch(e) {
            console.log(e)
        }
    }
    
    async getVisits() {
        const orm = await MikroORM.init(config)
        const metricsRepository = orm.em.getRepository(Metrics)
        const visits = await metricsRepository.findAll()

        return visits
    }
}

export { MetricsController }