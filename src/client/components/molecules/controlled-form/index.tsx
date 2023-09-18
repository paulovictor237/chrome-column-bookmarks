import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { Props } from './types';

export const ControlledForm: FC<Props> = ({
  formMethods,
  children,
  ...rest
}) => (
  <FormProvider {...formMethods}>
    <form {...rest}>{children}</form>
  </FormProvider>
);
