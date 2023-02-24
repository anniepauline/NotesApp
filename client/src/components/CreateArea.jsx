import React, { useState } from "react";
import {addNote} from "../service/api.js";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Zoom from '@mui/material/Zoom';



function CreateArea() {
    const initialValue = {
        title:"",
        content : ""
    }
    const [note,setNote] = useState(initialValue);
    const [isExpanded,setExpanded] = useState(false);

//handle input changes
    function handleChange(event)
    {
        const { name, value } = event.target;
        setNote((prevValue) => {
          return {
            ...prevValue,[name]: value };
        }); 
    }

  //save form on submit
   async function handleSubmit(event)
   {
    event.preventDefault();
     await addNote(note); 
    window.location.reload();
    }
    function expand()
    {
      setExpanded(true);
      
    }

  return (
    <div>
      <form method="post">
        {isExpanded && 
        <input
          name="title"
          onChange={handleChange}
          
          placeholder="Title"
        />}

        <textarea
          name="content"
          onChange={handleChange}
          onClick = {expand}
          placeholder="Take a note..."
          rows={isExpanded?3:1}
        
        />
        <Zoom in={isExpanded}>
          <button onClick = {handleSubmit}> <AddCircleIcon/></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;