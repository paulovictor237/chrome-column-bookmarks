import { ColumnType } from '@/domain/entities/column';

export type Props = JSX.IntrinsicElements['div'] & {
  column: ColumnType;
  index: number;
  className?: string;
  showTitle?: boolean;
  title?: string;
};
