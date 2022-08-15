import { Response } from 'express';
import { ApiRequest } from "../interfaces/apiRequest";
import { User } from "../models/user";
import {
    getProfileDB,
    updateProfileDB,
    getUserByEmailDB
} from '../utils/profileUtils';



// Controller for getting the profile of a user
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


// Controller for updating the profile of a user
const updateProfileontroller = async (req: ApiRequest, res: Response) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Missing fields' });
    }

    if ((!req.user) || (req.user.id != req.params.id)) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await getUserByEmailDB(req.body.email);
    if (user && user.id != req.params.id) {
        return res.status(400).json({ message: "Email already in use" });
    }

    const updatedUser = new User(req.params.id, req.body.name, req.body.email);
    updatedUser.password = req.body.password;

    if (! await updateProfileDB(updatedUser)) {
        return res.status(500).json({
            message: 'Error updating user',
        });
    }

    return res.status(200).json({
        message: 'User updated',
    });
}


// Controller for getting the profile of the currently logged in user
const getMyProfileController = async (req: ApiRequest, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    return res.status(200).json(req.user);
}


export {
    getProfileController,
    updateProfileontroller,
    getMyProfileController
};