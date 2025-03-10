import Item from "./iIem"

const ItemsList = ({foodItems}) => {

    return <ul className="list-group text-start">
        {foodItems.map((item) => <Item key={item} item={item}/>)}
      
    </ul>
}
export default ItemsList