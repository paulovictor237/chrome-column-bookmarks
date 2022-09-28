import { Site } from '@/domain/entities/site';
import { dndDelete, dndMove, dndReorder } from '../options';
import { DndCombine, DndDifColumn, DndSameColumn } from './types';

export const dndCombine: DndCombine = (newState, setState, source, combine) => {
  for (const column of newState) {
    for (const item of column.children) {
      if (item.id === combine.draggableId && !!(item as Site).url) return;
    }
  }
  const folder = dndDelete(newState[+source.droppableId], source.index);
  newState[+source.droppableId] = folder;
  setState(newState);
};

export const dndSameColumn: DndSameColumn = (
  newState,
  setState,
  source,
  destination
) => {
  const folder = dndReorder(
    newState[+source.droppableId],
    source.index,
    destination.index
  );
  newState[+source.droppableId] = folder;
  setState(newState);
};

export const dndDifColumn: DndDifColumn = (
  newState,
  setState,
  source,
  destination
) => {
  const [sourceResult, destinationResult] = dndMove(
    newState[+source.droppableId],
    newState[+destination.droppableId],
    source,
    destination
  );
  newState[+source.droppableId] = sourceResult;
  newState[+destination.droppableId] = destinationResult;
  setState(newState);
};
