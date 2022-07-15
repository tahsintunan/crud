import { Router } from 'express';
import { registerController, loginController, logoutController } from '../auth/authControllers';


const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/logout', logoutController);


export { router as authRouter };
