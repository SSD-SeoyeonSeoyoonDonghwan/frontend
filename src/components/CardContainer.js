import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes'; // ItemTypes를 같이 정의해야 합니다.
import Card from './Card';

const style = {
  width: '100%',
  height: '12rem',
  overflowY: 'auto',
  position: 'relative',
};

const CardContainer = ({ cards, moveCard }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const index = cards.findIndex((c) => c.id === item.id);
      const newOrder = [...cards];
      newOrder.splice(index, 1); // 원래 위치에서 제거
      newOrder.splice(index + delta.y > 0 ? index + 1 : index, 0, item); // 새 위치에 삽입
      moveCard(newOrder);
      return undefined;
    },
  }));

  return (
    <div ref={drop} style={style}>
      {cards.map((card, index) => (
        <Card key={card.id} id={card.id} text={card.text} />
      ))}
    </div>
  );
};

export default CardContainer;
