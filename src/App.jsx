import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import AppList from "./components/AppList";
const App = () => {
  let tasks = [
    { id: "1", name: "Task 1", date: '2023-01-01' },
    { id: "2", name: "Task 1", date: '2023-01-01' },
    { id: "3", name: "Task 1", date: '2023-01-01' }];
  return (
    <center className="todo_app">
      <AppName/>
      <div className="container">
      <AppTodo/>
      <AppList tasks={tasks}/>
      </div>
    </center>
  );
};

export default App;
