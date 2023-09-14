import express from 'express'
import { addNote, deleteNote, getNotes, updateNote, updateNoteStatus } from './noteCont';
const router = express.Router();


router
    .get('/get-notes', getNotes)
    .post('/add-note', addNote)
    .delete("/delete-note", deleteNote)
    .patch('/update-note-decription', updateNote)
    .patch('/update-note-status', updateNoteStatus)

export default router;