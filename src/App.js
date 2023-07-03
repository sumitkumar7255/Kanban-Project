import "./App.css";
import { useState } from "react";
import TodoList from "./components/Home/Home";
import Navbars from "./components/Home/Navbar";

function App() {

  const [color,setColor]= useState("");
  return (
    <div>
      <Navbars/>
      <TodoList/>
        </div>
      
    
  );
}

      
export default App;
