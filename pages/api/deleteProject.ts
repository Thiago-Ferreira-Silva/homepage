import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import { ProjectsController } from '../../server/controllers/projectsController'

const projectsController = new ProjectsController()

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const name = req.body.name

    const response = await projectsController.deleteProject(name, () => {
        fs.unlinkSync( __dirname + `../../public/images/${name}.png`)
    })
    return res.send(response)
}