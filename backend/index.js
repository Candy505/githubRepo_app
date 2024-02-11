import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { UserModel } from './src/models/Users.js'
import {userRouter} from './src/routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());


const dbURL = "mongodb+srv://medhabisht525:JXO3V9Tm1pMAoWZm@cluster0.bod5wll.mongodb.net/"

app.use("/auth",userRouter);

mongoose.connect(dbURL).then((res)=>
{
    app.listen(3000);
  

    const newData = new UserModel({
        name: 'John Doe',
        password:'123'
    });

    // Save the new document to the collection
    try {
         newData.save();
        console.log('New document added to the collection');
    } catch (error) {
        console.error('Error adding document:', error);
    }
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
})
