import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { MouseEvent } from 'react';

export type Props = {
  item?: Site | Folder;
  showContextMenu: boolean;
  cleanId: () => void;
  closeAndClean: () => void;
  closeContextMenu: () => void;
  onContextMenu: (e: MouseEvent<any>, item: Site | Folder) => void;
};
