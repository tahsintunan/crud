import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../models/user';
import { ApiRequest } from '../models/apiRequest';


// Middleware to authorize user with token (return user in the request if token is valid)
const tokenAuthenticator = (req: ApiRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.authorization;
        if (!token) {
            return res.sendStatus(401);
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);
        req.user = decoded as User;
        next();
    }
    catch (err) {
        return res.sendStatus(401);
    }
}


export { tokenAuthenticator };