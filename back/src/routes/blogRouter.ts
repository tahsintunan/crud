import { Router } from 'express';
const router = Router();
// import blogController from '../controllers/blogController';
const blogController = require('../controllers/blogController');


router.get('/', blogController.getAllBlogs);
router.get('/posts/:postId', blogController.getBlogpost);

router.delete('/posts/:postId', (req, res) => {
    // delete post by id
    // then, return to user/posts/home/previous page
})

router.post('/post', (req, res) => {
    // create post
    // then, return post
})

router.put('/posts/:postId', (req, res) => {
    // update post by id
    // then, return post
})



export {router as blogRouter};