import { ColumnType } from '@/domain/entities/column';
import { DraggableLocation, DropResult } from 'react-beautiful-dnd';

const reorder = (
  folder: ColumnType,
  startIndex: number,
  endIndex: number
): ColumnType => {
  const destinationFolder = Object.assign({}, folder);
  destinationFolder.children = Array.from(folder.children);
  const [removed] = destinationFolder.children.splice(startIndex, 1);
  destinationFolder.children.splice(endIndex, 0, removed);
  return destinationFolder;
};

const move = (
  source: ColumnType,
  destination: ColumnType,
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
): ColumnType[] => {
  const sourceFolder = Object.assign({}, source);
  sourceFolder.children = Array.from(source.children);

  const destinationFolder = Object.assign({}, destination);
  destinationFolder.children = Array.from(destination.children);

  const [removed] = sourceFolder.children.splice(droppableSource.index, 1);

  destinationFolder.children.splice(droppableDestination.index, 0, removed);

  return [sourceFolder, destinationFolder];
};

export const dndOnDragEnd = (
  result: DropResult,
  state: ColumnType[],
  setState: (state: ColumnType[]) => void
) => {
  const { source, destination } = result;
  if (!destination) return;

  const sourceId = +source.droppableId;
  const destinationId = +destination.droppableId;

  const sourceFolder = state[sourceId];
  const destinationFolder = state[destinationId];

  const newState = [...state];

  if (sourceId === destinationId) {
    const folder = reorder(sourceFolder, source.index, destination!.index);
    newState[sourceId] = folder;
    setState(newState);
    return;
  }
  const [sourceResult, destinationResult] = move(
    sourceFolder,
    destinationFolder,
    source,
    destination
  );
  newState[sourceId] = sourceResult;
  newState[destinationId] = destinationResult;
  setState(newState);
  return;
};

export const dndDelete = <T>(
  ind: number,
  index: number,
  state: T[][],
  setState: (e: T[][]) => void
) => {
  const newState = [...state];
  newState[ind].splice(index, 1);
  setState(newState.filter((group) => group.length));
};

export const dndAddNewGroup = <T>(state: T, setState: (e: T) => void) => {
  // setState([...state, []]);
};

export const dndAddNewItem = <T>(state: T, setState: (e: T) => void) => {
  // setState([...state, getItems(1)]);
};
