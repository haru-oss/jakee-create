export const InComplateArea = (props)=>{
    const {todo,index,inComplate,onComplate,onDelete} = props;








<div className="incomplate-area">
<p className="title">未完了のtodo</p>
<ul>
  {inComplate.map((todo,index) => (
    <li key ={todo} >
          <div className="list-row">
            <p className="todo-item">{todo}</p>
            <button onClick={()=>onComplate(index)}>完了</button>
            <button onClick={()=>onDelete(index)}>削除</button>
          </div>
      </li>
)) }
</ul>
</div>
}