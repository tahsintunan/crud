import express from 'express';
import { json, urlencoded } from 'body-parser';

const port = process.env.PORT || 9000;

const app = express();
app.use(json);
app.use(urlencoded({extended: true}));

app.get('/', (req: express.Request, res: express.Response) => {
    res.send(`Bruh`);
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
