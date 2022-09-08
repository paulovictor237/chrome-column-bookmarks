import { Site } from './site';
// interface ReactNodeArray extends Folder {}
// children: (Site | ReactNodeArray)[];
export interface Folder {
  children: (Site | Folder)[];
  dateAdded: number;
  dateGroupModified: number;
  id: string;
  index: number;
  parentId: string;
  title: string;
}
