import express from "express";
import Connection from "./database/connection.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

dotenv.config(); // initialize env file

//middlewares
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

//cors configure
app.use(cors({origin: true, credentials: true}));
//all the routes comes from route.js
app.use('/',Routes);


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);


app.listen(8000, ()=>{
    console.log("Server Listening on port 8000");
})