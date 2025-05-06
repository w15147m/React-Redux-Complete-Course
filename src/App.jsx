import React, { useState } from "react";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import AppList from "./components/AppList";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: "1", name: "Task 1", date: "2023-01-01" },
   
  ]);

  const addTask = (name, date) => {
    const newTask = {
      id:  Math.floor(10 + Math.random() * 90).toString(), // unique ID
      name,
      date,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <center className="todo_app">
      <AppName />
      <div className="container">
        <AppTodo addTask={addTask} />
        <AppList tasks={tasks} />
      </div>
    </center>
  );
};

export default App;
