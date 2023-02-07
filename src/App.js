import React, { useState } from "react";
import ReactDOM from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css';



//Props-
// function H1(props){
//   return(
//     <h1>{props.title}-{props.children}</h1>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <H1 title="heading">Welcome To React</H1>
//       <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//       </ul>
//     </div>
//   );
// }
//--------------------------------------------------------

//State-

// function App(){
//   const [counter, setCounter] = useState(0);

//   const onPlus = () => {
//     setCounter(prev => prev+1);
//     // setCounter(counter+1);
//   }

//   const onMinus = () => {
//     setCounter(prev => prev-1);
//   }


//   return(
//     <div className="app">
//       <h1>Counter</h1>
//       <div>{counter}</div>
//       <button onClick={onPlus} className="counter-button">+</button>
//       <button onClick={onMinus} className="counter-button">-</button>
//     </div>
//   )
// }


//--------------------------------------------------------------------------
//Simple CRUD using React-
function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Exercise", completed: false },
    { id: 2, title: "Breakfast", completed: false },
    { id: 3, title: "Go to work", completed: false },
    { id: 3, title: "Complete Project", completed: false },
    { id: 3, title: "Go Home", completed: false },
  ]);


  const onTodoAdd = (task) => {
    // alert(JSON.stringify(task));
    task.id = +new Date();
    task.completed = false;
    setTasks(
      [...tasks, task]
    )
  }



  const onTodoDelete = (taskId) => {
    alert(taskId);
    //never mutate state in react, create new array
    let remainingTasks = tasks.filter((t) => {
      return t.id != taskId;
    });

    // alert(JSON.stringify(remainingTasks));

    setTasks(remainingTasks);

  }


  return (
    <div className="container app">
      <h1>To-Do App</h1>
      <hr/>

      <TodoForm onTodoAdd={onTodoAdd} />

      {tasks.length > 0 ? <TodoList tasks={tasks} onTodoDelete={onTodoDelete} /> : <h2>No Tasks</h2>}
      {/* <TodoList tasks={tasks} onTodoDelete={onTodoDelete} /> */}

    </div>
  )
}



export default App;
