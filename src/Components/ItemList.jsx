import { useMemo } from "react";
import { useState } from "react";
import Select from "react-select";
import { useItemsContext } from "../lib/hooks";
import EmptyView from "./EmptyView";

const sortingOptions = [
    {
        label: "Sort by default",
        value: "default"
    },
    {
        label: "Sort by packed",
        value: "packed"
    },
    {
        label: "Sort by unpacked",
        value: "unpacked"
    }
]

export default function ItemList() {
    
    const [sortBy, setSortBy] = useState("default");
    const {
        items,
        handleDeleteItem,
        handleToggleItem,
    } = useItemsContext();

     const sortedItems = useMemo(
        () => 
            [...items].sort((a, b) => {
            if (sortBy === "packed") {
                return b.packed - a.packed;
            } 
            if (sortBy === "unpacked") {
                return a.packed - b.packed;
            }
            return;
     }), [items, sortBy])

    return <ul className="item-list">
        
        {items.length === 0 && <EmptyView />}
            <Select onChange={option => setSortBy(option.value)} 
                defaultValue={sortingOptions[0]} 
                options={sortingOptions} />
        {items.length > 0 ? <section className="sorting">

        </section> : null}

        {
            sortedItems.map(item => {
                return <Item key={item.id} item={item} 
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem} />
            })
        }
    </ul>;
}

function Item({ item, onDeleteItem, onToggleItem }) {
    return <li className="item">
        <label>
            <input onChange={() => onToggleItem(item.id)}
             checked={item.packed} type="checkbox" />
            {item.name}
        </label>
        <button onClick={() => onDeleteItem(item.id)} >❌</button>
    </li>
}