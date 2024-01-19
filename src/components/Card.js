import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Box = ({ id, color, zIndex, moveBox }) => {
  const [, drag] = useDrag({
    type: 'BOX',
    item: { id },
  });

  const [, drop] = useDrop({
    accept: 'BOX',
    hover: (item) => {
      if (item.id !== id) {
        moveBox(item.id, id);
        item.id = id; // update the dragged item's id after drop
      }
    },
  });

  drag(drop);

  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    borderRadius: '8px',
    margin: '8px',
    position: 'absolute',
    zIndex: zIndex,
    cursor: 'grab',
  };

  return <div style={boxStyle}></div>;
};

const Card = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, color: 'red' },
    { id: 2, color: 'green' },
    { id: 3, color: 'blue' },
    // Add more boxes as needed
  ]);

  const moveBox = (fromId, toId) => {
    const updatedBoxes = [...boxes];
    const fromIndex = updatedBoxes.findIndex((box) => box.id === fromId);
    const toIndex = updatedBoxes.findIndex((box) => box.id === toId);
    const [movedBox] = updatedBoxes.splice(fromIndex, 1);
    updatedBoxes.splice(toIndex, 0, movedBox);
    setBoxes(updatedBoxes);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ position: 'relative' }}>
        {boxes.map((box, index) => (
          <Box key={box.id} id={box.id} color={box.color} zIndex={index + 1} moveBox={moveBox} />
        ))}
      </div>
    </DndProvider>
  );
};

export default Card;
