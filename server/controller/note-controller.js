import Note from "../model/noteSchema.js";

//add note
export const addNote=async(req,res)=>{
   const note = req.body;
   const newNote = new Note(note);
   try{
    await newNote.save();
    res.status(201).json(newNote);
   }catch(error){
    res.status(409).json({message:error.message});
   }
}
//retrieve notes
export const getNotes=async(req,res)=>{
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
}
//get note by ID
 export const getNote = async(req,res)=>{  
   try{
    const note = await Note.findById(req.params.id);
    res.status(200).json(note);
   }
   catch(error)
   {
    res.status(404).json({message:error.message});
   }

}
//edit note
export const editNote = async (req,res)=>{
    const note = req.body;
    
    const editNote = new Note(note);
    try{
        await Note.updateOne({_id:req.params.id},editNote);
        res.status(201).json(editUser); 
    }catch(error)
    {
        res.status(409).json({message:error.message});
    }
}
//delete note
 export const deleteNote = async(req,res)=>{
     try{            
        console.log(req.params.id);
         await Note.deleteOne({_id:req.params.id});
         res.status(201).json({message:'user deleted succcessfully!'}); //success deleting data
           } catch(error){
            res.status(409).json({message:error.message});//not found in db
           }  
 }