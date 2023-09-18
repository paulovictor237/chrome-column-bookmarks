import { ColumnType } from '@/infra/types/column';

export interface Props {
  columnIndex: number;
  column: ColumnType;
  classNameTitle?: string;
  title?: string;
  isDropDisabled?: boolean;
  prefixId?: string;
}
