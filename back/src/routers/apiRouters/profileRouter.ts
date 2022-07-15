import { Router } from 'express';
import { getProfileController, updateProfileontroller } from '../../api/profile/profileControllers';


const router = Router();

// routes
router.get('/:id', getProfileController);
router.put('/:id', updateProfileontroller);


export { router as profileRouter };