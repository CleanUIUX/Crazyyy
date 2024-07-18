import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;

const Box = styled.div`
  border: 2px solid #ccc;
  padding: 20px;
  width: 200px;
  min-height: 300px;
  position: relative;
  transition: background-color 0.3s;

  ${(props) =>
    props.isDragOver &&
    css`
      background-color: #f0f0f0;
      border-color: #000;
    `}
`;

const Item = styled.div`
  padding: 8px;
  margin: 4px 0;
  border: 1px solid #ccc;
  cursor: move;
  background-color: #fff;
  transition: opacity 0.3s;

  ${(props) =>
    props.isDragging &&
    css`
      opacity: 0.5;
    `}
`;

const DragAndDropBoxes = () => {
  const [leftItems, setLeftItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [rightItems, setRightItems] = useState([]);
  const [draggingItem, setDraggingItem] = useState(null);
  const [draggingOverBox, setDraggingOverBox] = useState(null);

  const handleDragStart = (event, item) => {
    setDraggingItem(item);
    event.dataTransfer.setData('text/plain', item);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (event, targetBox) => {
    event.preventDefault();
    setDraggingOverBox(targetBox);
  };

  const handleDragLeave = () => {
    setDraggingOverBox(null);
  };

  const handleDrop = (event, targetBox) => {
    event.preventDefault();
    const item = event.dataTransfer.getData('text/plain');
    setDraggingOverBox(null);
    setDraggingItem(null);

    if (targetBox === 'right') {
      setLeftItems(leftItems.filter((i) => i !== item));
      setRightItems([...rightItems, item]);
    } else {
      setRightItems(rightItems.filter((i) => i !== item));
      setLeftItems([...leftItems, item]);
    }
  };

  return (
    <Container>
      <Box
        isDragOver={draggingOverBox === 'left'}
        onDragOver={(event) => handleDragOver(event, 'left')}
        onDrop={(event) => handleDrop(event, 'left')}
        onDragLeave={handleDragLeave}
      >
        <h3>Left Box</h3>
        {leftItems.map((item, index) => (
          <Item
            key={index}
            draggable
            onDragStart={(event) => handleDragStart(event, item)}
            isDragging={draggingItem === item}
          >
            {item}
          </Item>
        ))}
      </Box>
      <Box
        isDragOver={draggingOverBox === 'right'}
        onDragOver={(event) => handleDragOver(event, 'right')}
        onDrop={(event) => handleDrop(event, 'right')}
        onDragLeave={handleDragLeave}
      >
        <h3>Right Box</h3>
        {rightItems.map((item, index) => (
          <Item
            key={index}
            draggable
            onDragStart={(event) => handleDragStart(event, item)}
            isDragging={draggingItem === item}
          >
            {item}
          </Item>
        ))}
      </Box>
    </Container>
  );
};

export default DragAndDropBoxes;
