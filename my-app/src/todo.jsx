import { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/inputTodo";
import {IncompleteTodos} from "./components/incompleteTodos";
import {CompleteTodos} from "./components/completeTodos";

export const Todo = ()=> {


  const [todoText,setTodoText] = useState("");
  const [incomplateTodos,setIncomplateTodos] = useState([]);


  const [complateTodos,setComplateTodos] = useState([]);


  const onChangeTodoText =  (event) => setTodoText(event.target.value);

// onchangeなどのイベントが発火すると、「eventという引数が渡ってくるようになっている。」

  const onClickAdd = () => {
    if (todoText === "")return;
    const newTodos = [...incomplateTodos,todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

const onClickDelete = (index) => {
  const newTodos = [...incomplateTodos]
  newTodos.splice(index,1);
  setIncomplateTodos(newTodos)
};

const onClickComplete = (index)=>{
  const newIncomplateTodos = [...incomplateTodos];
  newIncomplateTodos.splice(index,1);

  const newComplateTodos = [...complateTodos,incomplateTodos[index]];

  setIncomplateTodos(newIncomplateTodos);
  setComplateTodos(newComplateTodos);
};

const onClickReturn = (index)=>{
  const newComplateTodos = [...complateTodos];
  newComplateTodos.splice(index,1);


  const newInComplateTodos = [...incomplateTodos,complateTodos[index]];

  setComplateTodos(newComplateTodos);
  setIncomplateTodos(newInComplateTodos);
};





  return (

     <>


       <InputTodo todoText = {todoText}
                   onChange ={onChangeTodoText}
                   onClick ={onClickAdd}/>




      <IncompleteTodos
                       todos = {incomplateTodos}
                       onClickComplete = {onClickComplete}
                       onClickDelete = {onClickDelete}/>


      <CompleteTodos
                      todos = {complateTodos}
                      onClickReturn = {onClickReturn}
      />








            </>


  );
};