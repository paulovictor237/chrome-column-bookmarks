import { ColumnType } from '@/domain/entities/column';
import { Site } from '@/domain/entities/site';
import { chromeGet, chromeMove } from '@/infra/services/chrome';
import { DraggableLocation, DropResult } from 'react-beautiful-dnd';

const dndDelete = (folder: ColumnType, startIndex: number): ColumnType => {
  const destinationFolder = Object.assign({}, folder);
  destinationFolder.children = Array.from(folder.children);
  const [removed] = destinationFolder.children.splice(startIndex, 1);
  return destinationFolder;
};

const dndReorder = (
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

const dndMove = (
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

export const dndOnDragEnd = async (
  result: DropResult,
  state: ColumnType[],
  setState: (state: ColumnType[]) => void
) => {
  const { source, destination, combine } = result;

  const id = result.draggableId;

  const sourceId = +source.droppableId;
  const sourceFolder = state[sourceId];

  const newState = [...state];
  if (id === '2') return;

  if (combine) {
    let isSite = true;
    try {
      const data = await chromeGet(combine.draggableId);
      isSite = !!data.url;
      console.log(data);
    } catch (error) {
      for (const column of newState) {
        for (const item of column.children) {
          if (item.id === combine.draggableId && !!(item as Site).url) return;
        }
      }
      isSite = false;
    }
    if (isSite) return;
    const folder = dndDelete(sourceFolder, source.index);
    newState[sourceId] = folder;
    try {
      await chromeMove(id, { parentId: combine.draggableId });
    } catch (error) {
      setState(newState);
    } finally {
      return;
    }
  }
  // TODO: verificar se existe (otherBookmark)
  if (!destination) return;
  const destinationId = +destination.droppableId;
  const destinationFolder = state[destinationId];
  const preventSubscribleOtherBookmakrs =
    destinationId === 0 && destination.index >= state[0].children.length - 1;

  if (sourceId === destinationId) {
    const folder = dndReorder(sourceFolder, source.index, destination.index);
    newState[sourceId] = folder;
    let index = destination.index;
    if (source.index < destination.index) index += 1;
    if (preventSubscribleOtherBookmakrs) index = state[0].children.length - 1;
    try {
      await chromeMove(id, {
        index,
      });
    } catch (error) {
      setState(newState);
    } finally {
      return;
    }
  }
  const [sourceResult, destinationResult] = dndMove(
    sourceFolder,
    destinationFolder,
    source,
    destination
  );
  newState[sourceId] = sourceResult;
  newState[destinationId] = destinationResult;
  let index = destination.index;
  if (preventSubscribleOtherBookmakrs) index = state[0].children.length - 1;
  try {
    await chromeMove(id, {
      index,
      parentId: newState[+destination.droppableId].id,
    });
  } catch (error) {
    setState(newState);
  } finally {
    return;
  }
};
