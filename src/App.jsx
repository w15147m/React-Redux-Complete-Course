import AppName from "./components/AppName";
import CurrentTime from "./components/CurrentTime";
import ClockSlogan from "./components/ClockSlogan";
const App = () => {

  return (
    <center className="todo_app">
      <AppName/>
      <div className="container">
      <ClockSlogan/>
      <CurrentTime/>
      </div>
    </center>
  );
};

export default App;
