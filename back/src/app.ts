import 'dotenv/config';

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { authRouter } from './routers/authRouter';
import { apiRouter } from './routers/apiRouter';
import { tokenAuthenticator } from './middlewares/tokenAuthenticator';


const app = express();

// Middlewares
app.use(cors({ origin: [process.env.CLIENT_ADDRESS as string], credentials: true }));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// Routers
app.use('/auth', authRouter);
app.use('/api', tokenAuthenticator, apiRouter);


export default app;