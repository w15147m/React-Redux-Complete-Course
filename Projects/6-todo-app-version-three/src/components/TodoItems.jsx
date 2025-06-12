import { useContext } from "react";
import { ItemStore } from "../store/itemStore";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({  onDeleteClick }) => {
  const todoItems = useContext(ItemStore).todoItems;
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
