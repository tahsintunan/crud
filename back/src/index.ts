import 'dotenv/config';

import express from 'express';
import { json, urlencoded } from 'body-parser';
import { authRouter } from './auth/routes';


const port = process.env.PORT || 6000;
const app = express();
app.use(json());
app.use(urlencoded({extended: true}));


app.use('/auth', authRouter);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
