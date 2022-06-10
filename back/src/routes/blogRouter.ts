import { Router } from 'express';
const router = Router();
// import blogController from '../controllers/blogController';
const blogController = require('../controllers/blogController');

// router.get('/', (req, res) => {
//     res.send('Hello World from blogRouter!');
// });










router.get('/', blogController.getAllBlogs);

router.post('/post', (req, res) => {
    // create post
    // then, return post
})

router.get('/posts/:postId', (req, res) => {
    // get post by id
    // then, return post
})

router.put('/posts/:postId', (req, res) => {
    // update post by id
    // then, return post
})

router.delete('/posts/:postId', (req, res) => {
    // delete post by id
    // then, return to user/posts/home/previous page
})




















export {router as blogRouter};