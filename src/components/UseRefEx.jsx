import { useEffect, useRef, useState } from "react";

function UseRefEx () {
    const inputRef = useRef(null);
    const BtnClick = () => {
        inputRef.current.focus();
    }

    const renderCount = useRef(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        renderCount.current += 1;
    })

    // Drag and Drop
    const [list, setList] = useState(['list1', 'list2', 'list3']);
    const [rightList, setRightList] = useState(['list1', 'list2', 'list3']);
    
    const draggingItem = useRef();
    const draggingFromBox = useRef();

    const handleDragStart = (e, item, fromBox) => {
        draggingItem.current = item;
        draggingFromBox.current = fromBox;
        e.dataTransfer.effectAllowed = 'move'
        
    }

    const handleDragEnter = (index) => {
        draggingOverItemIndex.current = index;
    }

    const handleDragEnd = () => {
        const copyListItems = [...list];
        const draggingItemContent = copyListItems[draggingItemIndex.current]; // 드래그 중인 아이템의 내용을 저장

        copyListItems.splice(draggingItemIndex.current, 1);
        copyListItems.splice(draggingOverItemIndex.current, 0, draggingItemContent);

        // 리스트를 새로운 순서로 업데이트
        setList(copyListItems);
        
        draggingItemIndex.current = null;
        draggingOverItemIndex.current = null;

        // const handleDragOver = (e) => {
        //     e.preventDefalut();
        // }
    }

    return(
        <>
        <input ref={inputRef} type="text"  placeholder="focus me!"/>
        <button onClick={BtnClick}>click!</button>

        <p>count up! : {renderCount.current}</p>
        <p>Count : {count}</p>
        <button onClick={() => setCount(count + 1)}>여기를 클릭하면 횟수가 올라가</button>

        <ul>
            {list.map((item, index) => (
                <li
                    key={index}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragEnter={() => handleDragEnter(index)}
                    onDragEnd={handleDragEnd}
                    // onDragOver={)}
                    style={{ padding: '8px', border: '1px solid #222', margin: '4px 0' }}
                >
                    {item}
                </li>
            ))}
            
        </ul>
        </>
    )
}

export default UseRefEx;