import { useState } from "react";
import "./style.css";

export const Todo = ()=> {


  const [todoText,setTodoText] = useState("");
  const [incomplateTodos,setIncomplateTodos] = useState([
    "todoです",
    "todoです2",
  ]);


  const [complateTodos,setComplateTodos] = useState([
                       "todoでした",
                       "todoでした2"
                       ]);


  const onChangeTodoText =  (event) => setTodoText(event.target.value);

// onchangeなどのイベントが発火すると、「eventという引数が渡ってくるようになっている。」

  const onClickAdd = () => {
    if (todoText === "")return;
    const newTodos = [...incomplateTodos,todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

const onClickDelete = (index) => {
  alert(index);
};

  return (

     <>

      <div className="input-area">
        <input placeholder="Todoを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>

      </div>

{/* onchangeってなんだ？ 　＝>  テキストボックスに変更があった時に発火するイベント*/}



      <div className="incomplate-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incomplateTodos.map((todo,index) => (
              <li key ={todo} >
                  <div className="list-row">
                    <p className="todo-item">{todo}</p>
                    <button>完了</button>
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
            {complateTodos.map((Todo) => (

              <li key ={Todo} >
                    <div className="list-row">
                      <p className="todo-item">{Todo}</p>
                      <button>戻す</button>
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