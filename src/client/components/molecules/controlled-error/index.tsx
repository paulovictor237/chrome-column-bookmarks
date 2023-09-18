import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { Props } from './types';
import { InputErrorMessage } from '../../atoms/input-error';

export const ControlledError = ({ name }: Props) => {
  const { formState } = useFormContext();
  return (
    <ErrorMessage
      errors={formState.errors}
      name={name}
      render={({ message }) => (
        <InputErrorMessage message={message} className="mt-1" />
      )}
    />
  );
};
