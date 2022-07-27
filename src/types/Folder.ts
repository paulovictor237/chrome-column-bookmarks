import { Bookmark } from "./Bookmark";
export interface Folder {
  children: any[],
  dateAdded: number,
  dateGroupModified: number,
  id: string,
  index: number,
  parentId: string,
  title: string
}
export interface FolderMain {
  children: (Bookmark | Folder)[],
  dateAdded: number,
  dateGroupModified: number,
  id: string,
  index: number,
  parentId: string,
  title: string
}

