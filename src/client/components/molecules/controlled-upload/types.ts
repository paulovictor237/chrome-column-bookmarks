import { RegisterOptions } from 'react-hook-form';
import { InputProps } from '../../atoms/input';

export type Props = InputProps & {
  name: string;
  registerOptions?: RegisterOptions;
};
