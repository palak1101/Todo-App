import React from "react";

function TodoList({tasks, onTodoDelete}) {
  

  const onDelete = (taskId) => {
    // alert(taskId);
    onTodoDelete(taskId);
  }


  return (
    <div className="container">
      {
        tasks.map((t) => {
          return (
            <div className="todo-item">
              <div>
                {t.title}
              </div>

              <div className="buttons">
                <button onClick={() => onDelete(t.id)} className="btn btn-sm text-danger">Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoList;