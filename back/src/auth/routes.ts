import { Router } from 'express';
import { registerController, loginController, logoutController } from './controllers';


const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/logout', logoutController);


export {router as authRouter};