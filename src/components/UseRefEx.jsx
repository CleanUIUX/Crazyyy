import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
    const [list, setList] = useState(['item1', 'item2', 'item3']);
    const dragItem = useRef();
    const dragOverItem = useRef();

    // DragStart
    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);        
    }

    // DragEnter
    const dragEnter = (e, position) => {
        dragOverItem.current = position;

    }
    
    const drop = (e) => {
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent); 
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
      };
     
    
    return(
        <>
        <input ref={inputRef} type="text"  placeholder="focus me!"/>
        <button onClick={BtnClick}>click!</button>

        <p>count up! : {renderCount.current}</p>
        <p>Count : {count}</p>
        <button onClick={() => setCount(count + 1)}>여기를 클릭하면 횟수가 올라가</button>


       
        {
            list&&
            list.map((item, index) => (
                <StyleLi key ={index}> { item } </StyleLi>
            ))
        }
        
        
        </>
    )
}

// style
const StyleLi = styled.li`
    padding: 10px;
    margin: 5px 0;
    background-color: #f0f0f0;
    border-radius: 5px;
    list-style: none;
    color: #333;
    font-weight: bold;

    &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`

export default UseRefEx;