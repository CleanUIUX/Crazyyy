import { useRef, useState } from "react";

function Test() {
    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list , setList] = useState([
        "item1",
        "item2",
        "item3",
        "item4",
    ]);

    // 드래그가 시작될때
    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
    }
    // 드래그 중인 대상이 위로 포개졌을 때
    const dragEnter = (e, position) => {
        dragOverItem.current = position;
    }

    // 드랍
    const drop = (e) => {
        const newList = [...list];
        const dragItemValue = newList[dragItem.current];
        newList.splice(dragItem.current, 1);
        newList.splice(dragOverItem.current, 0 , dragItemValue);
        dragItem.current = null;
        dragOverItem.current = null;
    };

    return (
        <>
            {list &&
                list.map((item, index) => (
                    <div 
                        key={index}
                        style={{
                            backgroundColor: "lightblue",
                            margin: "20px 25%",
                            textAlign: "center",
                            fontSize: "40px"
                        }}
                        draggable
                        onDragStart={(e) => dragStart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={drop}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        {item}
                    </div>
                ))
            }
        </>
    )
}

export default Test;