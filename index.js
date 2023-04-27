import express from "express";
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.json({test: "TEST"})
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})