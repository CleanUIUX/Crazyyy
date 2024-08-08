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
    const [leftlist, setLeftList] = useState(['list1', 'list2', 'list3']);
    const [rightList, setRightList] = useState(['list1', 'list2', 'list3']);
    
    const draggingItem = useRef();
    const draggingFromBox = useRef();

    const handleDragStart = (e, item, fromBox) => {
        draggingItem.current = item;
        draggingFromBox.current = fromBox;
        e.dataTransfer.effectAllowed = 'move'
        
    }

    const handleDragEnter = (e) => {
        e.preventDefalut();
        e.dataTransfer.dropEffect = 'move';
    }

    const handleDrop = (e, toBox) => {
        e.preventDefalut();
        const item = draggingItem.current;
        const fromBox = draggingFromBox.current;

        if(fromBox === toBox) return;

        if(fromBox === 'left') {
            setLeftList(prev => prev.filter(i => i !==item));
        }



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