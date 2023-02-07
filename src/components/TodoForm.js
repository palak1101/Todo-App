import React,{useState} from "react";

const TodoForm = ({ onTodoAdd }) => {

    const [newTask, setNewTask] = useState({id: "", title: ""});

    const onSubmit = (e) => {
        e.preventDefault();
        onTodoAdd(newTask);
    }


    const handleChange = (e) => {
        setNewTask(
            {
                ...newTask, title: e.target.value
            }
        )
    }

    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <input type="text"
                onChange = {handleChange} 
                value={newTask.title}
                className="col-7" 
                placeholder="add task" 
                />

                <button type="submit" className="m-2 btn btn-success">Submit</button>
            </form>
        </div>
    )
}


export default TodoForm;