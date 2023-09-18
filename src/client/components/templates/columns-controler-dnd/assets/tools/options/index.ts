import { ColumnType } from '@/infra/types/column';
import { DraggableLocation } from 'react-beautiful-dnd';

export const dndDelete = (
  folder: ColumnType,
  startIndex: number
): ColumnType => {
  const destinationFolder = Object.assign({}, folder);
  destinationFolder.children = Array.from(folder.children);
  const [removed] = destinationFolder.children.splice(startIndex, 1);
  return destinationFolder;
};

export const dndReorder = (
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

export const dndMove = (
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
