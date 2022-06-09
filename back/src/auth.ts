require('dotenv').config();

import express from 'express';
import { json, urlencoded } from 'body-parser';


//.................................................................................................
// import { Client } from 'pg';
// const client = new Client({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: parseInt(process.env.DB_PORT || '5432')
// });
// client.connect();
// client.query('SELECT * FROM "public".user', (err, res) => {
//     if (!err) {
//         // console.log(res.rows.length);
//         // console.log(res.rows);
//         console.log(res.rows[1].email);
//     } else {
//         console.log(err);
//     }
//     client.end();
// })
//.................................................................................................


const port = process.env.AUTH_PORT || 6000;
const app = express();
app.use(json());
app.use(urlencoded({extended: true}));


app.post('/register', (req: express.Request, res: express.Response) => {
    // first, check if it exists on database. if it already exists, we can't register. return error)
    // if it doesn't exist, create user and store it on database. return success
})

app.post('/login', (req: express.Request, res: express.Response) => {
    // first, check if it exists on database
    // if it does, check if the credentials match
    // if they do, create auth token and return it
    // if they don't, return 401 (unauthorized)
})

app.delete('/logout', (req: express.Request, res: express.Response) => {
    // delete auth token from database (if it exists)
    // then, return success
    // logout user
})

function authenticate(req: express.Request, res: express.Response, next: express.NextFunction) {
    // check auth token
    // if valid, continue
    // if invalid, return 401
}

function serialize(req: express.Request, res: express.Response, next: express.NextFunction) {
    // serialize user and store it on req.user (for deserialize) and req.session.user (for authenticate)
    // then, continue
}

function deserialize(req: express.Request, res: express.Response, next: express.NextFunction) {
    // deserialize user and store it on req.user (for serialize) and req.session.user (for authenticate)
    // then, continue
}

function generateAccessToken(req: express.Request, res: express.Response, next: express.NextFunction) {
    // generate access token (with 15m expire time)
    // then, continue
}

function generateRefreshToken(req: express.Request, res: express.Response, next: express.NextFunction) {
    // generate refresh token
    // then, continue
}


app.listen(port, () => {
    console.log(`Auth server running on port: ${port}`);
})
