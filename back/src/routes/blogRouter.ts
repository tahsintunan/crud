import { Router } from 'express';
const router = Router();
const blogController = require('../controllers/blogController');


router.get('/', blogController.getAllBlogs);
router.get('/posts/:postId', blogController.getBlogpost);

// delete, create, update will be needing a token to be sent in the header of the request
// to be able to access the route (express-jwt)
router.delete('/posts/:postId', blogController.deleteBlogpost);
router.post('/post', (req, res) => {
    // create post
    // then, return post
})
router.put('/posts/:postId', (req, res) => {
    // update post by id
    // then, return post
})


export {router as blogRouter};