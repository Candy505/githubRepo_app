import express from 'express';
import { UserModel } from '../models/Users.js'

const router = express.Router()

router.post("/register", async(req,res)=>{
    const {name,password} = req.body;

    const user = await UserModel.findOne({name})
    res.json(user);
});
//router.post("/login", async(req,res)=>{

//});

export  {router as userRouter};
