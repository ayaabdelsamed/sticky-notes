import { userModel } from "../../databases/models/user.model.js"


export const checkEmailExists = async(req,res,next)=>{
    let user = await userModel.findOne({email:req.body.email})
    if(user) return res.json({message:'user already exists.'})

    next()
}