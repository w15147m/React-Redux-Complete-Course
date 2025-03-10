const ItemError = ({foodItems}) => {
    return (foodItems.length < 0 && <h1> food not found </h1>);}
export default ItemError;