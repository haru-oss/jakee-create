

const style = {
  backgroundColor:"rgb(130, 10, 241)" ,
  width: "400px",
  height: "30px",
  padding: "15px",
  margin: "8px",
  borderRadius: "8px",
}


export const InputTodo = (props)=>{
    const {todoText,onChange,onClick,disabled} =props;



    return(
        <div style ={style}>
        <input disabled = {disabled} placeholder="Todoを入力" value={todoText} onChange={onChange} />
        <button disabled = {disabled} onClick={onClick}>追加</button>

      </div>

    )
};