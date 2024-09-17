import express from 'express'
import { addNote, allNotes, deleteNote, updateNote } from './note.controller.js'
import { auth } from '../../middleware/auth.js'

const noteRouter= express.Router()

noteRouter.use(auth)

noteRouter.route('/notes').get(allNotes).post(addNote)
// noteRouter.get('/notes',auth,allNotes)
// noteRouter.post('/notes',auth,addNote)

noteRouter.route('/notes/:id').put(updateNote).delete(deleteNote)
// noteRouter.put('/notes/:id',auth,updateNote)
// noteRouter.delete('/notes/:id',auth,deleteNote)




export default noteRouter