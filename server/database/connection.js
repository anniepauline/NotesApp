import mongoose from "mongoose";

const connection=async(username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.bp9jpuw.mongodb.net/?retryWrites=true&w=majority`;
    try{
        //mongoose connection
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
         console.log("Database connected successfully!");
    }
    catch(error){
        console.log("error while connecting to the database",error)
    }
}

export default connection;