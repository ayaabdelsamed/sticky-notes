import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    desc: String,
    createdBy: mongoose.Types.ObjectId,
},{timestamps:true})

export const noteModel= mongoose.model('note',noteSchema)