import type { NextApiRequest, NextApiResponse } from 'next'
import { ProjectsController } from '../../server/controllers/projectsController'

const projectsController = new ProjectsController()

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const name = req.body.name

    const response = await projectsController.deleteProject(name)
    return res.send(response)
}