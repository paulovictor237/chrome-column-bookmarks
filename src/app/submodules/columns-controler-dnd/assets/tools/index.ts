import { VITE_DEV_MODE } from '@/domain/constants';
import { ColumnType } from '@/domain/entities/column';
import { chromeGet, chromeMove } from '@/infra/services/chrome';
import { DropResult } from 'react-beautiful-dnd';
import { dndCombine, dndDifColumn, dndSameColumn } from './operations';
import { DestinationType } from './types';

export const dndOnDragEnd = async (
  result: DropResult,
  state: ColumnType[],
  setState: (state: ColumnType[]) => void
) => {
  if (result.draggableId === '2') return;
  const { source, destination, combine } = result;

  const sourceId = source.droppableId;
  const sourceIndex = source.index;

  const destinationId = destination?.droppableId;
  let destinationIndex =
    destination?.index !== undefined ? destination?.index : -1;

  const otherBookmarkExistis = state[0].children.slice(-1).pop()?.id === '2';
  const lastPositionArrayZero =
    destinationId === '0' &&
    destinationIndex >= state[0].children.length - 1 &&
    otherBookmarkExistis;
  if (lastPositionArrayZero) destinationIndex = state[0].children.length - 1;

  const id = result.draggableId.replace(/^\D+/g, '');
  let resultParms: DestinationType;

  if (combine) {
    if (VITE_DEV_MODE) return dndCombine(state, setState, source, combine);
    if ((await chromeGet(combine.draggableId)).url) return;
    resultParms = { parentId: combine.draggableId };
  } else if (destination && sourceId === destinationId) {
    if (VITE_DEV_MODE)
      return dndSameColumn(state, setState, source, destination);
    let auxIndex = destinationIndex;
    if (sourceIndex < destinationIndex) auxIndex += 1;
    resultParms = { index: auxIndex };
  } else if (destination && sourceId !== destinationId) {
    if (VITE_DEV_MODE)
      return dndDifColumn(state, setState, source, destination);
    resultParms = {
      index: destinationIndex,
      parentId: state[+destination.droppableId].id,
    };
  }

  try {
    if (resultParms) {
      await chromeMove(id, resultParms);
    }
  } catch (error) {
    console.error(error);
  } finally {
    return;
  }
};
