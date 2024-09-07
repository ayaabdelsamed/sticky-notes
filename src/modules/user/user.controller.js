import { userModel } from "../../../databases/models/user.model.js"
import bcrypt from 'bcrypt'
const signup= async(req,res)=>{

    await userModel.insertMany(req.body)
    res.json({message:'success'})
}


const signin= async(req,res)=>{
    let user = await userModel.findOne({email:req.body.email})


    if(user&&bcrypt.compareSync(req.body.password,user.password)) 
        return res.json({message:"login .. token"})

    res.json({message:"incorrect email or password"})
}

export {
    signup,
    signin
}

