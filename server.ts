import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

import usersRouter from './routes/users';

const app: Application = express();
const PORT: number = 8080;

app.use(bodyParser.json());

app.use('/users', usersRouter);

app.get('/', (req: Request, res: Response) => {
    console.log('[a get request received]');

    res.send('<h1>Homepage</h1>');
});

//create a router to update users data

app.listen(PORT, () => console.log("Server is running on Port : " + PORT));