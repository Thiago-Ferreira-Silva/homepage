import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import { ProjectsController } from '../../server/controllers/projectsController'

const projectsController = new ProjectsController()

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const project = { ...req.body }

    const base64String = project.imageFile
    const base64Image = base64String.split(';base64,').pop()

    delete project.imageFile

    fs.writeFileSync(`./public/images/${project.name}.png`, base64Image, { encoding: 'base64' })

    const response = await projectsController.createProject(project)

    return res.status(response.status).send(response)
}