

import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';


const noteSchema = mongoose.Schema({
    title:String,
    content:String,
    
})
 //initialize auto-increment with mongoose
autoIncrement.initialize(mongoose.connection);
//using auto-increement as a plugin on the user collection
noteSchema.plugin(autoIncrement.plugin,'note');
//user model with userSchema
const note = mongoose.model('note',noteSchema);
export  default note;