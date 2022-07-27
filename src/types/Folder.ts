import { Site } from "./Site";

interface ReactNodeArray extends Folder { }
export interface Folder {
  children: (Site | ReactNodeArray)[],
  dateAdded: number,
  dateGroupModified: number,
  id: string,
  index: number,
  parentId: string,
  title: string
}
