import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World from blogRouter!');
});










router.get('/', (req, res) => {
    // posts will be shown chronologically
    res.send(`Bruh`);
})

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

router.get('/profile/:userId', (req, res) => {
    // get profile by id
    // then, return profile
})

router.put('/profile/:userId', (req, res) => {
    // update profile by id
    // then, return profile
})




















export {router as blogRouter};