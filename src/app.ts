import express, { Request, Response } from "express"
const app = express()
export const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.json('Hello World!')
})

export default app;