import { useContext } from "react";

import { ItemStore } from "../store/itemStore";
import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
  const todoItems = useContext(ItemStore).todoItems;
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Welcome to the Todo App</p>
  );
};

export default WelcomeMessage;
