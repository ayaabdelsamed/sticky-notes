import express from 'express'
import { addNote, allNotes, deleteNote, updateNote } from './note.controller.js'

const noteRouter= express.Router()

noteRouter.get('/notes',allNotes)
noteRouter.post('/notes',addNote)
noteRouter.put('/notes/:id',updateNote)
noteRouter.delete('/notes/:id',deleteNote)




export default noteRouter