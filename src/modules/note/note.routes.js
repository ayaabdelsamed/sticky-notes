import express from 'express'
import { addNote } from './note.controller.js'

const noteRouter= express.Router()

noteRouter.post('/notes',addNote)



export default noteRouter