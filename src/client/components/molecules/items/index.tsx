import { Folder } from '@/infra/types/folder';
import { Site } from '@/infra/types/site';
import { forwardRef } from 'react';
import { Props } from './types';
import { FolderUi } from '@/client/components/atoms/ui-folder';
import { SiteUi } from '@/client/components/atoms/ui-site';

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
