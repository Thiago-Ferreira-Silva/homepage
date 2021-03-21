import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import { ProjectsController } from '../../server/controllers/projectsController'

const projectsController = new ProjectsController()

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const name = req.body.name

    fs.unlinkSync(`./public/images/${name}.png`)

    const response = await projectsController.deleteProject(name)

    return res.status(response.status).send(response)
}