import * as express from "express"
import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { Category } from "../entity/Category"

const category = express.Router()

//Get All
category.get("/", async (req: Request, res: Response) => {
    const category = await getRepository(Category).find()
    return res.send(category)
})

//Get by ID
category.get("/:id", async (req: Request, res: Response) => {
    const category = await getRepository(Category).findOne(req.params.id)
    return res.send(category)
})

//Add
category.post("/", async (req: Request, res: Response) => {
    try {
        const category = await getRepository(Category).create(req.body)
        const result = await getRepository(Category).save(category)
        return res.send(result)
    } catch (error) {
        return res.send(error)
    }
})

//Update
category.put("/:id", async (req: Request, res: Response) => {
    const category = await getRepository(Category).findOne(req.params.id)
    const result = await getRepository(Category).save(category)
})

export {category};