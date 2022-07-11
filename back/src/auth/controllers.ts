import { getUserByEmail, matchPassword, generateAuthToken, createNewUser, verifyToken } from './helpers';


// Controller to register new user
const register = async (req: any, res: any, next: any) => {
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
const login =  async (req: any, res: any, next: any) => {
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
    res.set('authorization', 'Bearer ' + token);
    return res.status(200).json({
        token
    });
};



// Controller to log a user out
const logout = async (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    if (!verifyToken(token)) {
        return res.sendStatus(401);
    }

    res.set('authorization', '');
    return res.sendStatus(200);
}



export { register, login, logout };
  