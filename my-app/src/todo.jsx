import { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/inputTodo";

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


       <InputTodo/>





      <div className="incomplate-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incomplateTodos.map((todo,index) => (
            <li key ={todo} >
                  <div className="list-row">
                    <p className="todo-item">{todo}</p>
                    <button onClick={()=>onClickComplete(index)}>完了</button>
                    <button onClick={()=>onClickDelete(index)}>削除</button>
                  </div>
              </li>



)

) }

        </ul>
      </div>





      <div className = "complate-area">
        <p className="title">完了のtodo</p>
        <ul>
            {complateTodos.map((Todo,index) => (

              <li key ={Todo} >
                    <div className="list-row">
                      <p className="todo-item">{Todo}</p>
                      <button onClick={()=>onClickReturn(index)}>戻す</button>

                    </div>
              </li>
                 )
                )
              }

        </ul>
      </div>




            </>


  );
};