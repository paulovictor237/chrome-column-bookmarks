import {
  DraggableLocation,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd';
import { Item } from './types';

export const getItems = (count: number, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }));

const reorder = (list: Item[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export function onDragEnd(
  result: DropResult,
  state: Item[][],
  handlerSetState: (state: Item[][]) => void
) {
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
}

export const move = (
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

// style
const grid = 8;
export const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});
export const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
  height: 800,
});
