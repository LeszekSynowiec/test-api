import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import path from 'path';


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})