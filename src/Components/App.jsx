import { useState } from "react";
import { initialItems } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    }
    
    const newItems = [...items, newItem];
    setItems(newItems);
  }

  const handleDeleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  const handleToggleItem = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    setItems(newItems);

  }

  const handleRemoveAllItems = () => {
    setItems([]);
  }

  const handleResetToInitial = () => {
    setItems(initialItems);
  }

  const handleMarkAllAsComplete = () => {
    const newItems = items.map(item => {
      return { ...item, packed: true};
    })

    setItems(newItems);
  }

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map(item => {
      return { ...item, packed: false};
    })

    setItems(newItems);
  }

  //const totalNumOfItems = items.length;

  return <>
    <BackgroundHeading />
    
    <main>
      <Header numOfItemsPacked={items.filter(item => item.packed).length} 
        totalNumOfItems={items.length}/>

      <ItemList items={items} handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem} />

      <Sidebar handleAddItem={handleAddItem} 
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete} />
    </main>
    
    <Footer />
  </>;
}

export default App
