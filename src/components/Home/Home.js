import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import {DragDropContext } from 'react-beautiful-dnd';
import Description from "./Description box/Description";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';





  function Home() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose1 = () => {
      setOpen(false);
    };



  const [todos, setTodos] = useState([]); // array to store todo data
  const [inputValue, setInputValue] = useState(""); // for input value
  const [todoHeader, setTodoHeader] = useState(""); // for header
  const [todoForm, settodoForm] = useState(false) // form display

  

  


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('premtodo'));
    if (storedData) {
      setTodos(storedData)
    }
  }, []);


  const handleFormSubmit = (id) => {

    if (inputValue.trim() !== "") {
      
     
      let modifyData=todos;
      for (let index = 0; index < todos.length; index++) {
        if(modifyData[index].id===id){
          modifyData[index].content.push({"id":Math.floor(Math.random()*100),"content":inputValue});

          setTodos(modifyData)
          localStorage.setItem("premtodo",JSON.stringify(todos))
        }
        
      }
      setInputValue("");
      document.getElementById(id).value=""
    }
    localStorage.setItem('todos', todos);
  };

  const handleTodoHeader=()=>{
    const data={
      "header":todoHeader,
      "content":[],
      "id":Math.floor(Math.random()*10000)
    }

    setTodos([...todos,data])
    localStorage.setItem("premtodo",JSON.stringify([...todos,data]))
    settodoForm(false)
  }
  const handleClose=(id)=>{
    const tempArray=
  todos.filter(item=>item.id!==id)
  // console.log(tempArray);
    setTodos(tempArray)
    localStorage.setItem("premtodo",JSON.stringify(tempArray))
  }
const handleCloseList=(boardId,listId)=>{
  const tempA=todos;
  for (let index = 0; index < todos.length; index++) {
    if(todos[index].id===boardId){
      const tempArray=todos[index].content.filter(item=>item.id!==listId)
      console.log(tempArray)
      tempA[index]["content"]=tempArray;
      // console.log(tempA[index]);
      setTodos([...tempA])
      localStorage.setItem("premtodo",JSON.stringify(todos))
    }
    
  }
  
}
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      {
        todos?.map(item=>(
      <div className={styles.todosBox}>
        
      <div className={styles.header}>
        <span>
        {item.header}
        
        </span>
        <span onClick={()=>handleClose(item.id)}>
         <HighlightOffIcon style={{color:"red",cursor:"pointer", marginRight:'10px',fontSize:"30px"}}/>
        </span>
      </div>
      <ul>
      {
        item.content?.map(it=>(
          <>
        <li className={styles.todolist} >
          <span variant="outlined" onClick={handleClickOpen} >{it.content} </span>
          <span onClick={()=>handleCloseList(item.id,it.id)} className={styles.cutIcon}><CloseIcon CloseIcon style={{color:"red",cursor:"pointer"}}/></span>
        </li>
        <Dialog
        open={open}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <Description data={item} cardName={item.content} />
      </Dialog>
          </>

        ))
      }
      </ul>
      <form>
      <input type="text"
      autoComplete="off"
      id={item.id}
    
      placeholder="Enter a Title for This Card..."
      onChange={(e)=>setInputValue(e.target.value)} className={styles.inputTitle}/></form>

      <button type="submit" className={styles.btnCard} onClick={()=>handleFormSubmit(item.id)}>Add Task</button>
      
      </div>
      

        ))
      }
      
      </div>
      <div className={styles.addBoardBox}>
      {
        !todoForm &&
      <button className={styles.btn} onClick={()=>settodoForm(true)}><span className={styles.plus}>+</span>Add a New List</button>
      }
      {

        todoForm && 
      <div className={styles.addBoardForm}>
        <input
         type="text"
         placeholder="Enter List Title..."
         className={styles.inputbox}
          onChange={(e)=>setTodoHeader(e.target.value)}/>
        <button className={styles.btnList} onClick={handleTodoHeader}>Add List</button>
      </div>
      }
      </div>
      
    </div>
  );
}

export default Home;
