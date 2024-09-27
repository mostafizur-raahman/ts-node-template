import express, { Request, Response } from "express"
const app = express()
export const port = 3000


// middleware 
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.json('Hello World!')
})

app.post('/', (req: Request, res: Response) => {

    const _doc = req.body;


    return res.status(200).json({
        message: "Hello world",
        data: _doc
    })
})
export default app;