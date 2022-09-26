import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { forwardRef } from 'react';
import { FolderUi } from '../ui-folder';
import { SiteUi } from '../ui-site';
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
