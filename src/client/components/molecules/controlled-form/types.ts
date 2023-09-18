import { UseFormReturn } from 'react-hook-form';

export type Props = JSX.IntrinsicElements['form'] & {
  formMethods: UseFormReturn<any, any>;
};
