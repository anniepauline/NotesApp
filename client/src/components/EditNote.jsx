import React, { useState,useEffect } from "react";
import {useParams,useNavigate} from "react-router-dom";
import {editNote,getNote} from "../service/api.js";
import SaveIcon from '@mui/icons-material/Save';

function EditNote() {

    const initialValue = {
        title:"",
        content : ""
    }

    const [note,setNote] = useState(initialValue);

    const navigate = useNavigate();
    const {title,content} = note;

   const {id} = useParams();
  //loads the input values on every page render
   useEffect(()=>{
    loadNoteDetails();
   },[])


    const loadNoteDetails=async()=>{
        
       const response =  await getNote(id);
        setNote(response.data);
    }

    //handle editing input data
    function handleChange(event)
    {
        const { name, value } = event.target;
        setNote((prevValue) => {
          return {
            ...prevValue,[name]: value };
        }); 
    }

  //save edit input data into DB
   const editNoteDetails=async()=>
   {
    await editNote(id,note); 
    navigate('/notes');
    }

   
  return (
    <div>
      <form method="post">
        <input
          name="title"
          onChange={(e)=>{handleChange(e)}}
          value = {title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={(e)=>{handleChange(e)}}
          value={content}
          placeholder="Take a note..."
          rows="3"
        
        />
        <button onClick={()=>{editNoteDetails()}}><SaveIcon/></button>
      </form>
    </div>
  );
}

export default EditNote;