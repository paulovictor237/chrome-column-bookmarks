import { MouseEvent } from 'react';

export type Props = {
  itemId: string;
  showContextMenu: boolean;
  cleanId: () => void;
  closeAndClean: () => void;
  closeContextMenu: () => void;
  onContextMenu: (e: MouseEvent<any>, id: string) => void;
};
