import express, { NextFunction, Request, Response } from "express"
const app = express()
export const port = 3000


// middleware 
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.json('Hello World!')
})

app.post('/api', (req: Request, res: Response, next: NextFunction) => {

    try {
        const _doc = req.body;

        return res.status(200).json({
            message: "Hello world",
            data: _doc
        })
    } catch (error) {
        next(error)
    }
})

// global error handeler 

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: "something is wrong."
        })
    }
})


// not found
app.all("*", (req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        message: "Not found"
    })
})
export default app;