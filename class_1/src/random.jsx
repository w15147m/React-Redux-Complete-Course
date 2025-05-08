/* This code snippet is a React functional component named `random`. Here's a breakdown of what it
does: */
import { useState } from "react";

function random() {

 let [foodItem, setFoodItem] = useState( [
    { id: 1, name: "Cras justo odio" },
    { id: 2, name: "Dapibus ac facilisis in" },
    { id: 3, name: "Morbi leo risus" },
    { id: 4, name: "Porta ac consectetur ac" },
    { id: 5, name: "Vestibulum at eros" }
  ])
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const newItem = { id: foodItem.length + 1, name: e.target.value };
      setFoodItem([...foodItem, newItem]);
      e.target.value = ""; // Clear the input field after adding the item
    }
  }
  const onClick = (id) => {
    console.log(id);
    
  }
  return (
    <div>
      <div>
        <input type="text" className="form" name="" id="" onKeyDown={onKeyDown}/>
      </div>
    <ul className="list-group">
      {foodItem.map((item) => (
        <li key={item.id} className="list-group-item">{item.name} <button onClick={onClick(item.id)} className="btn btn-info">Click</button></li>
      ))}

    </ul>
    </div>
  )
}
export default random;
