import express from 'express';
import { json, urlencoded } from 'body-parser';

const port = process.env.PORT || 9000;

const app = express();
app.use(json());
app.use(urlencoded({extended: true}));

app.get('/', (req: express.Request, res: express.Response) => {
    // posts will be shown chronologically
    res.send(`Bruh`);
})

app.post('/register', (req: express.Request, res: express.Response) => {
    // check database for existing user
    // register a new user
})

app.post('/login', (req: express.Request, res: express.Response) => {
    // check username and match password
    // then, authenticate ans serialize using jwt
})

app.get('/posts/:postId', (req: express.Request, res: express.Response) => {
    // get post by id
    // then, return post
})

app.post('/post', (req: express.Request, res: express.Response) => {
    // create post
    // then, return post
})

app.put('/posts/:postId', (req: express.Request, res: express.Response) => {
    // update post by id
    // then, return post
})

app.delete('/posts/:postId', (req: express.Request, res: express.Response) => {
    // delete post by id
    // then, return to user/posts/home/previous page
})

app.get('/profile/:userId', (req: express.Request, res: express.Response) => {
    // get profile by id
    // then, return profile
})

app.put('/profile/:userId', (req: express.Request, res: express.Response) => {
    // update profile by id
    // then, return profile
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
