import { Response, NextFunction } from 'express';
import { ApiRequest } from '../interfaces/apiRequest';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';


// Middleware to authorize user with token (return user in the request if token is valid)
const tokenAuthenticator = (req: ApiRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.authorization;
        if (!token) {
            return res.sendStatus(403);
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);
        req.user = decoded as User;
        next();
    }
    catch (err) {
        return res.sendStatus(403);
    }
}


export { tokenAuthenticator };