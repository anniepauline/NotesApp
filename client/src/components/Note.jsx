import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from "react";
import {useNavigate} from 'react-router-dom';

function Note(props) {
 
  const navigate = new useNavigate();

  return (
    <div className="note">
      <h1> {props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{props.deleteNote(props.id)}}><DeleteIcon/></button>
       <button onClick={() => navigate(`/edit/${props.id}`)}><EditIcon/></button>
    </div>
  );
}

export default Note;