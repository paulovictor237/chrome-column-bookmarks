import { ColumnType } from '@/domain/entities/column';

export type Props = JSX.IntrinsicElements['div'] & {
  column?: ColumnType;
  threeDots: boolean;
  classNameTitle?: string;
};
