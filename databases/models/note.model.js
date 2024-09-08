import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    desc: String,
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
},{timestamps:true})

export const noteModel= mongoose.model('note',noteSchema)