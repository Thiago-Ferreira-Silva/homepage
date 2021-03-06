import type { NextApiRequest, NextApiResponse } from 'next'
import { MetricsController } from '../../server/controllers/metricsController'

const metricsControler = new MetricsController()

export default async function(req: NextApiRequest, res: NextApiResponse) {
    metricsControler.newVisit()
    return res.status(201).send('ok')
}