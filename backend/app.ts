import * as express from "express"
import { Request, Response } from "express";
import * as cors from "cors"
import { createConnection } from "typeorm";
import { category } from "./routes/category";

const connection = createConnection()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/category", category)

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
})

const PORT = 5000
app.listen(PORT, () => console.log(`App running on port ${PORT}`))