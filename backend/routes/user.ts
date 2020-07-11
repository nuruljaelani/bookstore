import * as express from "express"
import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { User } from "../entity/User"

const user = express.Router()

user.post("/", async (req: Request, res: Response) => {
    const user = await getRepository(User).create(req.body)
    const result = await getRepository(User).save(user)
})

export {user};