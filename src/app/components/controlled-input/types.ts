import { RegisterOptions } from 'react-hook-form';
import { InputProps } from '../input';

export type Props = InputProps & {
  name: string;
  controlledClassName?: string;
  formater?: (text: string) => string;
  registerOptions?: RegisterOptions;
};
