import { Site } from './site';

export interface Folder {
  children: (Site | Folder)[];
  dateAdded: number;
  dateGroupModified: number;
  id: string;
  index: number;
  parentId: string;
  title: string;
}
