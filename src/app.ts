import express, { NextFunction, Request, Response } from "express"
const app = express()
export const port = 3000


// middleware 
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.json('Hello World!')
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