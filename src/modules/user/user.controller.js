import { userModel } from "../../../databases/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const signup= async(req,res)=>{

    await userModel.insertMany(req.body)
    res.json({message:'success'})
}

const signin= async(req,res)=>{
    let user = await userModel.findOne({email:req.body.email})

    if(user&&bcrypt.compareSync(req.body.password,user.password)){
        let token = jwt.sign({userID:user._id,role:user.role},'myNameIsAya')
        return res.json({message:"success",token})
    }

    res.json({message:"incorrect email or password"})
}

export {
    signup,
    signin
}

