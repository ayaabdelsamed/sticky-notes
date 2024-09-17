import { noteModel } from "../../../databases/models/note.model.js"
import jwt from 'jsonwebtoken'

const allNotes = async(req,res)=>{
    
        let notes = await noteModel.find().populate('createdBy','name -_id')
        res.json({message:'success',notes})
}

const addNote = async(req,res)=>{
    await noteModel.insertMany(req.body)
    res.json({message:'success'})
}

const updateNote = async(req,res)=>{
    let user= await noteModel.findByIdAndUpdate(req.params.id,{title:"new title1"},{new:true})
    res.json({message:'success',user})
}

const deleteNote = async(req,res)=>{
    let note= await noteModel.findByIdAndDelete(req.params.id)
    if(!note) return res.json({message:"note not found"})
    res.json({message:'success',note})
}

export{
    addNote,
    updateNote,
    deleteNote,
    allNotes
}