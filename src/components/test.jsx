import { useRef, useState } from "react";

function Test() {
    const ItemIndex = useRef(null);
    const OverItemIndex = useRef(null);
    const [availableOptionsArr , setAvailableOptionsArr] = useState(['item1', 'item2', 'item3'])
 
    const DragStart = (e, index, id) => {
        ItemIndex.current = index;
        e.target.classList.add('grabbing')
    }

    const onAvailableItemDragEnter  = (e, index) => {
        OverItemIndex.current = index;
        const copyListItems = [...availableOptionsArr];
        const dragItemContent = copyListItems[ItemIndex.current];
        copyListItems.splice(ItemIndex.current, 1);
        copyListItems.splice(OverItemIndex.current, 0 , dragItemContent);
    }
    return (
        <>
            
        </>
    )
}

export default Test;