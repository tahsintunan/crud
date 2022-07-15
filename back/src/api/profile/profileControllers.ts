import { Request, Response } from 'express';


const getProfileController = (req: Request, res: Response) => {
    res.send('getProfileController');
}


const updateProfileontroller = (req: Request, res: Response) => {
    res.send('updateProfileontroller');
}

export { getProfileController, updateProfileontroller };