import { createContext } from "react"
export const ItemStore = createContext(
    {
        todoItems: [],
        handleNewItem: () => { },
        handleDeleteItem: () => { },
    }
);