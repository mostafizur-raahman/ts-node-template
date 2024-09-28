import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/modules/routes";
const app = express();

// middleware
app.use(express.json());
app.use(cors());


// routes 
app.use("/api/v1", router)

app.get("/", (req: Request, res: Response) => {
    res.json("Hello World!");
});

// global error handeler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: "something is wrong.",
        });
    }
});

// not found
app.all("*", (req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        message: "Not found",
    });
});

export default app;
