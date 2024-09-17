import jwt from "jsonwebtoken"


export const auth = async(req,res,next)=>{
    let token = req.header('token')
    jwt.verify(token,'myNameIsAya',async(err,decoded)=>{
        if(err) return res.json({message:'err',err})

        next()
    })

}