import { ColumnType } from '@/domain/entities/column';
import { Combine, DraggableLocation } from 'react-beautiful-dnd';

export type DndCombine = (
  state: ColumnType[],
  setState: (state: ColumnType[]) => void,
  source: DraggableLocation,
  combine: Combine
) => void;

export type DndSameColumn = (
  state: ColumnType[],
  setState: (state: ColumnType[]) => void,
  source: DraggableLocation,
  destination: DraggableLocation
) => void;

export type DndDifColumn = (
  state: ColumnType[],
  setState: (state: ColumnType[]) => void,
  source: DraggableLocation,
  destination: DraggableLocation
) => void;
