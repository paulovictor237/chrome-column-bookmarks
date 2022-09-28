import { ColumnType } from '@/domain/entities/column';
import { Combine, DraggableLocation } from 'react-beautiful-dnd';

export type DndCombine = (
  newState: ColumnType[],
  setState: (state: ColumnType[]) => void,
  source: DraggableLocation,
  combine: Combine
) => void;

export type DndSameColumn = (
  newState: ColumnType[],
  setState: (state: ColumnType[]) => void,
  source: DraggableLocation,
  destination: DraggableLocation
) => void;

export type DndDifColumn = (
  newState: ColumnType[],
  setState: (state: ColumnType[]) => void,
  source: DraggableLocation,
  destination: DraggableLocation
) => void;
