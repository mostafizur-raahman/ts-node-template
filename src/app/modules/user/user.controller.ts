import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";

const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body;
        const result = await userServices.registerUserIntoDB(user);
        console.log("User registered successfully", result); // Debugging
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: result
        })
    } catch (error) {
        console.error("Error in registration", error); // Debugging
        next(error)
    }
}

export const userController = {
    register
}