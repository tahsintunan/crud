import { Router } from 'express';
import { profileRouter } from './apiRouters/profileRouter';
import { blogRouter } from './apiRouters/blogRouter';


const router = Router();

router.use('/profile', profileRouter);
router.use('/blog', blogRouter);



export { router as apiRouter };
