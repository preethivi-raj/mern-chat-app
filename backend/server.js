import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000;

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';

app.use(express.json()) // for parsing application/json (from req.body)
app.use(cookieParser())


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
 

app.listen(PORT ,()=>{ 
    connectToMongoDB();
    console.log(`Server is running of ${PORT}`)
});