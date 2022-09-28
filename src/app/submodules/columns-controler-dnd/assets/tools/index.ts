import { ColumnType } from '@/domain/entities/column';
import { chromeGet, chromeMove } from '@/infra/services/chrome';
import { DropResult } from 'react-beautiful-dnd';
import { ChromeMove } from './types';

export const dndOnDragEnd = async (
  result: DropResult,
  state: ColumnType[],
  setState: (state: ColumnType[]) => void
) => {
  if (result.draggableId === '2') return;
  const { source, destination, combine } = result;

  const sourceId = source.droppableId;
  const sourceIndex = source.index;
  // const sourceFolder = state[+sourceId];

  const destinationId = destination?.droppableId;
  let destinationIndex =
    destination?.index !== undefined ? destination?.index : -1;
  // const destinationFolder = destinationId && state[+destinationId];

  const otherBookmarkExistis = state[0].children.slice(-1).pop()?.id === '2';
  const lastPositionArrayZero =
    destinationId === '0' &&
    destinationIndex >= state[0].children.length - 1 &&
    otherBookmarkExistis;
  if (lastPositionArrayZero) destinationIndex = state[0].children.length - 1;

  // const newState = [...state];
  const id = result.draggableId;
  let resultParms: ChromeMove = { id };

  if (combine) {
    if ((await chromeGet(combine.draggableId)).url) return;
    resultParms.destination = { parentId: combine.draggableId };
  } else if (destination && sourceId === destinationId) {
    let auxIndex = destinationIndex;
    if (sourceIndex < destinationIndex) auxIndex += 1;
    resultParms.destination = { index: auxIndex };
  } else if (destination && sourceId !== destinationId) {
    resultParms.destination = {
      index: destinationIndex,
      parentId: state[+destination.droppableId].id,
    };
  }

  try {
    if (resultParms.destination) {
      await chromeMove(resultParms.id, resultParms.destination);
    }
  } catch (error) {
    //setState(newState);
  } finally {
    return;
  }
};
