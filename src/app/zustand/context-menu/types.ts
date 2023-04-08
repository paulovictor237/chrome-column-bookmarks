import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { MouseEvent } from 'react';

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
