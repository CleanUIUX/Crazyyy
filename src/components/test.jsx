import { useState } from "react";

function Test() {
    const [leftItems, setLeftItems] = useState(['item1', 'item2', 'item3']);
    const [rightItems, setRightItems] = useState([]);
    const [draggItem, setDraggItem] = useState([null]);
    const [draggOver, setDraggOver] = useState([null]);

    const handleDragStart = (event, item) => {
        setDraggItem(item); 
        event.dataTransfer.setData('text/plain', item);
        event.dataTransfer.effectAllowed = 'move';
    }
    const handleDragOver = (event, targetBox) => {
        event.preventDafault();
        setDraggOver(targetBox)
    }
    return(
        <>

        </>
    )
}

export default Test;