import { DraggableLocation, DropResult } from 'react-beautiful-dnd';

const reorder = <Item>(list: Item[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = <Item>(
  source: Item[],
  destination: Item[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: { [key: string]: Item[] } = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  console.log(result);

  return result;
};

export const onDragEnd = <Item>(
  result: DropResult,
  state: Item[][],
  handlerSetState: (state: Item[][]) => void
) => {
  const { source, destination } = result;

  // dropped outside the list
  if (!destination) {
    return;
  }
  const sInd = +source.droppableId;
  const dInd = +destination.droppableId;

  if (sInd === dInd) {
    const items = reorder(state[sInd], source.index, destination.index);
    const newState = [...state];
    newState[sInd] = items;
    handlerSetState(newState);
  } else {
    const result = move(state[sInd], state[dInd], source, destination);
    const newState = [...state];
    newState[sInd] = result[sInd];
    newState[dInd] = result[dInd];

    handlerSetState(newState.filter((group) => group.length));
  }
};
