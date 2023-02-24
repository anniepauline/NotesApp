//handles the sumit coming from the client side / front end
//request->fetchES6()->axios(library)
import axios from "axios";

//request to post data into the db coming from the url
    const URL = "http://localhost:8000";

    //addNote API
    export const addNote = async(data)=>
    {    
        try{
            //endpoint of api and route matches
           return await axios.post(`${URL}/Notes/add`, data);
        
        }catch(error){
            console.log("Error while adding addNote API",error.message);
        }
    }

    //get Notes API
    export const getNotes = async()=>{
        try{
            return axios.get(`${URL}/Notes/all`);
         }catch(error){
            console.log("Error while retrieving getNotes API",error.message)
        }
    }

    // get Note by ID
    export const getNote = async(id)=>{
        try{
            return await axios.get(`${URL}/${id}`);  }
        catch(error){
            console.log("Eror while retrieving getUser API",error.message);
        }
    }

    // update note into DB
    export const editNote = async(id,note)=>{
        try{
            return await axios.put(`${URL}/${id}`,note);
        }
        catch(error)
        {
            console.log("Error while retrieving editNote API",error.message);
        }
    }
    //delete note from DB
    export const deleteNote = async(id)=>{
        try{
            return await axios.delete(`${URL}/${id}`);
        }
        catch(error){
            console.log("Error while retrieving deleteNote API",error.message);
        }
    }