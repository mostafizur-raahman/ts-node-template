import { NextFunction, Request, Response } from "express";
import { userServices } from "./services";


const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body;
        const result = await userServices.registerUserIntoDB(user);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const readUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userServices.readUserFromDB();

        console.log("users", users)
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: users
        })
    } catch (error) {
        next(error)
    }
}

export const userController = {
    register,
    readUser
}