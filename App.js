import React from "react";
import { useState } from 'react'; 
import { useEffect } from "react";
import './App.css';
import Pagetitle from './components/Pagetitle';
import { Task } from "./components/Task";
import Form from "./components/Form";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const[status, setStatus] = useState("all");
  const[filteredlist, setFilteredList] = useState([]);

  const filterhandler = () => {
    switch(status){
      case "completed":
        setFilteredList(todoList.filter((task) => task.completed === true));
        break;
      case "Incompleted":
        setFilteredList(todoList.filter((task) => task.completed === false));
        break;
      default:
        setFilteredList(todoList)
        break;
    }
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div>
        <p> Benedictus Filbert - 2502005263</p>
      </div>
      
      <Pagetitle>Todo List</Pagetitle>  
      
      <div className="addTask">
        <form onSubmit={handleSubmit}>
          <input id="txtbox" onChange={handleChange} type={"input"} />
          <button onClick={addTask}>Add Task</button>
        </form>
        <Form></Form>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
            filteredlist={filteredlist}
            />
            );
          })}
      </div>

    </div>
  );
}

// {/* crude build */}
// function App() {
//   const [list, setList] = useState([]);
//   const [input, setInput] = useState([]);
//   const addTodo = (todo) => {
//     const newTodo = {
//       id: Math.random(),
//       todo: todo
//     };
//     //add to list
//     setList([...list, newTodo]);
//     //clear
//     setInput("");
//   };
//   const deleteTodo = (id) => {
//     const newList = list.filter((todo) => todo.id !== id);
//     setList(newList)
//   };
  
//   function sayHello() {
//     alert('You clicked me!');
//   }

//   // function func(){
//   //   addTodo(input); sayHello();
//   // }

//   return (
//     <div className="App">
//       <Pagetitle>Todo List</Pagetitle>    
      
//       <div className='header'>
//         <input type="text" id="txtbox" value={input} onChange={(e)=>setInput(e.target.value)}/>
//         <button onClick={() => addTodo(input)} >Add</button>
//       </div>
//       <div className='body'>
      
//         <ol className='lists'>
//         {list.map((todo) => (
//           <li key={todo.id}>
//             {todo.todo}
//             <button onClick={() => deleteTodo(todo.id)}>&times;</button>
//             <button>edit</button>
//           </li>
//         ))}
//         </ol>
//       </div>
//       {/* ------------ */}
      
//       <Content/>
      
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

//i dont get it how to filter (`:
//#thereWasAnAttempt


export default App;
