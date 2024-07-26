//password:9A3fDT7UdzkFhwHI
//username: Jonathan

import express, {Express} from 'express';
import mongoose from 'mongoose';

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = "mongodb+srv://Jonathan:9A3fDT7UdzkFhwHI@personalfinancetracker.71lqm1u.mongodb.net/";

mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB: ", err));

app.listen(port, () => {
    console.log("Server running on port " + port);
});