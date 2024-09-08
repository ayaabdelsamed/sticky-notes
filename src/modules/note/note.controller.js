import { noteModel } from "../../../databases/models/note.model.js"


const addNote = async(req,res)=>{
    await noteModel.insertMany(req.body)
    res.json({message:'success'})

}

export{
    addNote
}