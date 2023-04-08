import { ColumnType } from '@/domain/entities/column';
import { ReactNode } from 'react';

export type Props = {
  column?: ColumnType;
  threeDots: boolean;
  classNameTitle?: string;
  defaultTitle?: string;
  children: ReactNode;
  className: string;
};
