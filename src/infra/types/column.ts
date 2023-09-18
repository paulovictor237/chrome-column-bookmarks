import { Site } from './site';
import { Folder } from './folder';

export type ColumnChildren = (Site | Folder)[];

export type ColumnType = Folder & {
  children: ColumnChildren;
};
