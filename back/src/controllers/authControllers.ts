import { Request, Response, NextFunction } from 'express';
import {
    getUserByEmail,
    matchPassword,
    generateAuthToken,
    createNewUser,
    verifyToken
} from '../helpers/authHelpers';


// Controller to register new user
const registerController = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(401).json({
            message: 'Invalid credentials'
        });
    }
    const user = await getUserByEmail(email);
    if (user) {
        return res.status(401).json({
            message: 'User already exists'
        });
    }
    const userCreated = await createNewUser(name, email, password);
    if (!userCreated) {
        return res.status(401).json({
            message: 'Error creating user'
        });
    }
    return res.status(200).json({
        message: 'User created'
    });
}



// Controller to login a user
const loginController = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).json({
            message: 'Invalid credentials'
        });
    }
    const user = await getUserByEmail(email);
    if (!user) {
        return res.status(401).json({
            message: 'User does not exist'
        });
    }
    if (!await matchPassword(password, user.password)) {
        return res.status(401).json({
            message: 'Password does not match'
        });
    }
    const token = generateAuthToken(user);
    res.setHeader(`Set-Cookie`, `authorization=${token}; Path=/; HttpOnly; Max-Age=${60 * 60 * 24 * 7}`);
    return res.status(200).json({
        message: 'User logged in'
    });
};



// Controller to log a user out
const logoutController = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.authorization;
    if (!token || !verifyToken(token)) {
        return res.sendStatus(401);
    }
    res.setHeader(`Set-Cookie`, `authorization=; Path=/; HttpOnly; Max-Age=0`);
    return res.status(200).json({
        message: 'User logged out'
    });
}



export { registerController, loginController, logoutController };
