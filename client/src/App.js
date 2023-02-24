import "./App.css";
import EditApp from "./components/EditApp";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NotesApp from "./components/NotesApp";



function App() {
  return (
    <div>  
     <BrowserRouter>
      <Routes>
       <Route path = "/notes" element = {<NotesApp/>}/>
       <Route path = "/edit/:id" element = {<EditApp/>}/>
       </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;

