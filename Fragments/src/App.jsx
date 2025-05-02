import Random from "./components/ListGroup";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  let list = [
    { id: 1, name: "Cras justo odio 1" },
    { id: 2, name: "Dapibus ac facilisis in 2" },
    { id: 3, name: "Morbi leo risus 3" },
    { id: 4, name: "Porta ac consectetur ac 4" },
    { id: 5, name: "Vestibulum at eros 5" }
  ];
  return (
    <center className="todo_app px-3">
      <h1>New app</h1>
      <ErrorPage IsList={list.length > 0 ? true : false}/>
      <Random ListItems={list} />

    </center>
  );
};

export default App;
