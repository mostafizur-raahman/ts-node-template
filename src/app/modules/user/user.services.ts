
import { User } from "./user.interface";
import UserModel from "./user.model";

const registerUserIntoDB = async (user: User) => {

    console.debug("service user ", user)
    const result = await UserModel.create(user);
    console.log("res ser ", result)

    return result;
}


export const userServices = {
    registerUserIntoDB
}