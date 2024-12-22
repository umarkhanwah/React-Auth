import express from 'express'
import { AddNote, showNotes } from '../controllers/notes.js';
import { fetchUser } from '../middleware/fetchUser.js';


const router  = express.Router();

// Login Required
router.get('/showNotes' , fetchUser , showNotes)


router.post('/addNote'  , fetchUser, AddNote)


export default router;