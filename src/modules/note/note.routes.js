import express from 'express'
import { addNote, updateNote } from './note.controller.js'

const noteRouter= express.Router()

noteRouter.post('/notes',addNote)
noteRouter.put('/notes/:id',updateNote)



export default noteRouter