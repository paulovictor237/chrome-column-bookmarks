import { Folder } from '@/infra/types/folder';
import { Site } from '@/infra/types/site';

type Pos = { x: number; y: number; column: boolean };

export type Props = {
  item?: Site | Folder;
  showContextMenu: boolean;
  pos: Pos;
  cleanId: () => void;
  closeAndClean: () => void;
  closeContextMenu: () => void;
  onContextMenu: (pos: Pos, item: Site | Folder) => void;
};
