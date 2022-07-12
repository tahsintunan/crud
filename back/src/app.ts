import 'dotenv/config';

import express from 'express';
import { json, urlencoded } from 'body-parser';
import { authRouter } from './auth/routes';


const app = express();

// Middlewares
app.use(json());
app.use(urlencoded({extended: true}));

// Routers
app.use('/auth', authRouter);


export default app;