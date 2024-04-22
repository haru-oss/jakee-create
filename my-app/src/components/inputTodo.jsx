export const InputTodo = (props)=>{
    return(
        <div className="input-area">
        <input placeholder="Todoを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>

      </div>

    )
};