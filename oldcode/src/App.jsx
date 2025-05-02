import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import AppList from "./components/AppList";
const App = () => {

  return (
    <center className="todo_app">
      <AppName/>
      <div className="container">
      <AppTodo/>
      <AppList/>
     
        
     
      </div>
    </center>
  );
};

export default App;
