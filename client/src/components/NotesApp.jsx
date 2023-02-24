import React,{useEffect,useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
import {getNotes,deleteNote} from "../service/api";



function NotesApp() {
 
  const [notes,setNotes] = useState([]);
  //display notes from DB on page render
 useEffect(()=>{getAllNotes();}, []);

  const getAllNotes=async()=>{
   const response = await getNotes();
    setNotes( response.data);
    console.log(notes);
  }
  //delete notes from DB
   const  deleteNoteDetails=async(id)=>{
      await deleteNote(id);
      getAllNotes();
   }

  return (
    <div>
      <Header />      
      <CreateArea />      
     {
      notes.map((note,index)=>(
        <Note id={note._id}
        key={index}
        title={note.title}
        content={note.content}
         deleteNote = {deleteNoteDetails}
      />
      ))
     }    
      <Footer />
    </div>
  );
}

export default NotesApp;

