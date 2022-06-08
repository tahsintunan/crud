require('dotenv').config();

import express from 'express';
import { json, urlencoded } from 'body-parser';


const port = process.env.AUTH_PORT || 6000;
const app = express();
app.use(json());
app.use(urlencoded({extended: true}));


app.post('/register', (req: express.Request, res: express.Response) => {
    // check database for existing user
    // register a new user
})

app.post('/login', (req: express.Request, res: express.Response) => {
    // check username and match password
    // then, authenticate ans serialize using jwt
})

app.post('/logout', (req: express.Request, res: express.Response) => {
    // logout user
})

app.listen(port, () => {
    console.log(`Auth server running on port: ${port}`);
})
