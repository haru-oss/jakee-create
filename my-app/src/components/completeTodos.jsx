export const CompleteTodos = (props)=>{

    const {todos,onClickReturn} = props;
    return(
        <div className = "complate-area">
        <p className="title">完了のtodo</p>
        <ul>
            {todos.map((Todo,index) => (

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



)
}