
import ItemsList from "./components/ItemsList";
import ItemError from "./components/ItemError";
const App = () => {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  return (
    <center className="p-3">
      <h1>Food Items</h1>
      <ItemError foodItems={foodItems}/>
      <ItemsList foodItems={foodItems} />
    </center>

  );
};

export default App;
