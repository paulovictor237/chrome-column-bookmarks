import { Bookmark } from "./Bookmark";

interface ReactNodeArray extends Folder { }
export interface Folder {
  children: (Bookmark | ReactNodeArray)[],
  dateAdded: number,
  dateGroupModified: number,
  id: string,
  index: number,
  parentId: string,
  title: string
}
