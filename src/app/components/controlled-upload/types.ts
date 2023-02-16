import { RegisterOptions } from 'react-hook-form';
import { InputProps } from '../input';

export type Props = InputProps & {
  name: string;
  registerOptions?: RegisterOptions;
};
