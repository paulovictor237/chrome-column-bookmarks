import { ReactNode } from 'react';

export type Props = JSX.IntrinsicElements['input'] & {
  label?: string;
  register?: any;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  labelClassName?: string;
  containerClassName?: string;
};
