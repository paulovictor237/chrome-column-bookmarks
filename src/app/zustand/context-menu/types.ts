import { MouseEvent } from 'react';

export type Props = {
  showMenuId?: string;
  closeMenu: () => void;
  onContextMenu: (e: MouseEvent<any>, id: string) => void;
};
