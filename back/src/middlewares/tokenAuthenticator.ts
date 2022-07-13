import jwt from 'jsonwebtoken';


// Middleware to authorize user with token (return user in the request if token is valid)
const tokenAuthenticator = (req: any, res: any, next: any) => {
    try {
        const token = req.cookies.authorization;
        if (!token) {
            return res.sendStatus(401);
        }
        jwt.verify(token, process.env.JWT_SECRET as jwt.Secret, (err: any, user: any) => {
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        })
    }
    catch (err) {
        return res.sendStatus(401);
    }
}


export { tokenAuthenticator };