import { Fault } from "../../../utils/Fault";
import { User } from "../user.interface";
import UserModel from "../user.model";

export const registerUserIntoDB = async (user: User) => {
    try {

        const userExist = await UserModel.findOne({
            email: user.email
        })

        if (userExist) {
            throw new Fault("User already exists", 400)
        }

        const result = await UserModel.create(user);
        return result;
    } catch (error) {
        throw error
    }
}
