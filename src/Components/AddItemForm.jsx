import { useState } from "react";
import Button from "./Button";

export default function AddItemForm() {
    const [itemText, setItemText] = useState("");
    
    return <form onSubmit={() => {
        
    }}>
        <h2>Add an item</h2>
        <input value="blabla" />
        <Button>Add to list</Button>
    </form>
}