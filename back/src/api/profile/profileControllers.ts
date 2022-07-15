import { Response } from 'express';
import { ApiRequest } from "../../interfaces/apiRequest";
import { User } from "../../models/user";
import { getProfileDB, updateProfileDB } from './profileHelpers';

import { getUserByEmail, hashPassword } from '../../auth/authHelpers'; // kechal: I think this is the correct way to do this



const getProfileController = async (req: ApiRequest, res: Response) => {
    const userId = req.params.id;
    const user = await getProfileDB(userId);
    if (!user) {
        return res.status(404).json({
            message: 'User not found',
        });
    }
    return res.status(200).json(user);
}


const updateProfileontroller = async (req: ApiRequest, res: Response) => {
    if ((!req.user) || (req.user.id != req.params.id)) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // check if the email is unique in the database (if not, return error)
    const user = await getUserByEmail(req.body.email);
    if (user && user.id != req.params.id) {
        return res.status(400).json({ message: "Email already in use" });
    }

    // then, hash password and update user in database
    const updatedUser = new User(req.params.id, req.body.name, req.body.email);
    updatedUser.password = await hashPassword(req.body.password)

    if (! await updateProfileDB(updatedUser)) {
        return res.status(500).json({
            message: 'Error updating user',
        });
    }

    return res.status(200).json({
        message: 'User updated',
    });
}



export { getProfileController, updateProfileontroller };