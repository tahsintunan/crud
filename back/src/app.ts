import 'dotenv/config';

import express from 'express';
import cookieParser from 'cookie-parser';
import { json, urlencoded } from 'body-parser';
import { authRouter } from './auth/routes';


const app = express();

// Middlewares
app.use(json());
app.use(urlencoded({extended: true}));
app.use(cookieParser());

// Routers
app.use('/auth', authRouter);


export default app;