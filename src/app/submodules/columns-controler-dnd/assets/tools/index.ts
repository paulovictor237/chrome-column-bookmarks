import { ColumnType } from '@/domain/entities/column';
import { Site } from '@/domain/entities/site';
import { DraggableLocation, DropResult } from 'react-beautiful-dnd';

export const dndDelete = (
  folder: ColumnType,
  startIndex: number
): ColumnType => {
  const destinationFolder = Object.assign({}, folder);
  destinationFolder.children = Array.from(folder.children);
  const [removed] = destinationFolder.children.splice(startIndex, 1);
  return destinationFolder;
};

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
  const { source, destination, combine } = result;

  const sourceId = +source.droppableId;
  const sourceFolder = state[sourceId];

  const newState = [...state];

  if (combine) {
    // TODO: arrumar essa lógica
    for (const column of newState) {
      for (const item of column.children) {
        if (item.id === combine.draggableId) {
          const isSite = !!(item as Site).url;
          if (isSite) return;
        }
      }
    }
    const folder = dndDelete(sourceFolder, source.index);
    newState[sourceId] = folder;
    setState(newState);
    return;
  }

  if (!destination) return;
  const destinationId = +destination.droppableId;
  const destinationFolder = state[destinationId];

  if (sourceId === destinationId) {
    const folder = reorder(sourceFolder, source.index, destination.index);
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
