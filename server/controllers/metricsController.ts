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
            console.log('ok')
        } catch(e) {
            console.log(e)
        }
    }
    
    async getVisits() {
        const orm = await MikroORM.init(config)
        console.log('orm',orm) /////// temporário
        const metricsRepository = orm.em.getRepository(Metrics)
        const visits = await metricsRepository.findAll()
        console.log('visits',visits) /////// temporário

        return visits
    }
}

export { MetricsController }