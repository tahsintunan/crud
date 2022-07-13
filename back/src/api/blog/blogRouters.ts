import { Router } from 'express';
import { 
    getAllBlogsController,
    getOneBlogController,
    createBlogController,
    updateBlogController,
    deleteBlogController
} from './blogControllers';


const router = Router();

// routes
router.get('/', getAllBlogsController);
router.get('/:id', getOneBlogController);
router.post('/', createBlogController);
router.put('/:id', updateBlogController);
router.delete('/:id', deleteBlogController);


export {router as blogRouter};