import { readUserFromDB } from "./user.read";
import { registerUserIntoDB } from "./user.register";

export const userServices = {
    registerUserIntoDB,
    readUserFromDB
}