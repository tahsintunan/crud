import { Router } from 'express';
import { profileRouter } from './profile/profileRouters';
import { blogRouter } from './blog/blogRouters';


const router = Router();

router.use('/profile', profileRouter);
router.use('/blog', blogRouter);



export {router as apiRouter};
