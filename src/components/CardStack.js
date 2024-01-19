import React, { useState, useRef } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Card = ({ id, content, index, moveCard }) => {
  const ref = useRef(null);

  const [, drag] = useDrag({
    type: 'CARD',
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: 'CARD',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  drag(drop(ref));

  const zIndex = index === 0 ? 2 : 1; // Adjust zIndex for overlapping effect

  return (
    <div
      ref={ref}
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        margin: '8px',
        position: 'absolute',
        zIndex: zIndex,
        top: `${index * 20}px`, // Adjust top position for overlapping effect
        left: `${index * 20}px`, // Adjust left position for overlapping effect
      }}
    >
      {content}
    </div>
  );
};

const CardStack = () => {
  const [cards, setCards] = useState([
    { id: 1, content: 'Card 1' },
    { id: 2, content: 'Card 2' },
    { id: 3, content: 'Card 3' },
    // Add more cards as needed
  ]);

  const moveCard = (fromIndex, toIndex) => {
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(fromIndex, 1);
    updatedCards.splice(toIndex, 0, movedCard);
    setCards(updatedCards);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ position: 'relative' }}>
        {cards.map((card, index) => (
          <Card key={card.id} id={card.id} content={card.content} index={index} moveCard={moveCard} />
        ))}
      </div>
    </DndProvider>
  );
};

export default CardStack;