import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {userRouter} from './src/routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());


const dbURL = "mongodb+srv://medhabisht525:JXO3V9Tm1pMAoWZm@cluster0.bod5wll.mongodb.net/Recipe-app"

app.use("/auth",userRouter);

mongoose.connect(dbURL).then((res)=>
{
    app.listen(3000);
    console.log("database connected")
}).catch((err)=> console.log(err))
