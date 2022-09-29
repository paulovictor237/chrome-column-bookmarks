import { Site } from '@/domain/entities/site';
import { dndDelete, dndMove, dndReorder } from '../options';
import { DndCombine, DndDifColumn, DndSameColumn } from './types';

export const dndCombine: DndCombine = (state, setState, source, combine) => {
  for (const column of state) {
    for (const item of column.children) {
      if (item.id === combine.draggableId && !!(item as Site).url) return;
    }
  }
  const newState = [...state];
  const folder = dndDelete(newState[+source.droppableId], source.index);
  newState[+source.droppableId] = folder;
  setState(newState);
};

export const dndSameColumn: DndSameColumn = (
  state,
  setState,
  source,
  destination
) => {
  const newState = [...state];
  const folder = dndReorder(
    newState[+source.droppableId],
    source.index,
    destination.index
  );
  newState[+source.droppableId] = folder;
  setState(newState);
};

export const dndDifColumn: DndDifColumn = (
  state,
  setState,
  source,
  destination
) => {
  const newState = [...state];
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
