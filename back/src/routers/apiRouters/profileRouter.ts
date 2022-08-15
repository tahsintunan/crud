import { Router } from 'express';
import { getProfileController, updateProfileontroller, getMyProfileController } from '../../controllers/profileControllers';


const router = Router();

// routes
router.get('/whoami', getMyProfileController);
router.get('/:id', getProfileController);
router.put('/:id', updateProfileontroller);


export { router as profileRouter };