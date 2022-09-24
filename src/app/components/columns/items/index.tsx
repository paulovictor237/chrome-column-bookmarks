import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { forwardRef } from 'react';
import { FolderUi } from '../folder-ui';
import { SiteUi } from '../site-ui';
import { Props } from './types';

export const ColumnItem = forwardRef<HTMLDivElement, Props>(
  ({ columnIndex, item, ...rest }, ref) => {
    const isSite = !!(item as Site).url;
    return (
      <div ref={ref} {...rest}>
        {isSite && <SiteUi link={item as Site} />}
        {!isSite && <FolderUi folder={item as Folder} index={columnIndex} />}
      </div>
    );
  }
);
