import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { ControlledError } from '../controlled-error';
import { Input } from '../input';
import { Props } from './types';

export const ControlledUpload = ({
  name = 'file',
  className,
  registerOptions,
  ...rest
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Input
        className={twMerge(!!errors?.[name] && 'border-red-600', className)}
        type="file"
        {...rest}
        {...register(name, registerOptions)}
      />
      <ControlledError name={name} />
    </>
  );
};
