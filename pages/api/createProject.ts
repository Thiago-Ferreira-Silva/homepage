import type { NextApiRequest, NextApiResponse } from 'next'
import { ProjectsController } from '../../server/controllers/projectsController'

const projectsController = new ProjectsController()

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const project = { ...req.body }

    const response = await projectsController.createProject(project)

    return res.send(response)
}