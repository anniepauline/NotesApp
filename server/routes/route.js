import express from "express";
import {addNote,getNotes,getNote,deleteNote,editNote} from "../controller/note-controller.js";
const router = express.Router();

router.post('/Notes/add',addNote);

router.get('/Notes/all',getNotes);

router.get('/:id',getNote);

router.put('/:id',editNote);

router.delete('/:id',deleteNote);

export default router;