import { forwardRef, useId, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { Props } from './types';

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      className,
      containerClassName,
      labelClassName,
      type,
      iconBefore,
      iconAfter,
      disabled,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    const [passwordShown, setPasswordShown] = useState(false);

    const toggle = () => setPasswordShown((prev) => !prev);

    const disabledStyle = disabled ? 'bg-gray-200 pointer-events-none' : '';

    return (
      <div
        className={twMerge(
          `flex flex-col gap-1 justify-center w-full`,
          containerClassName
        )}
      >
        {label && (
          <label htmlFor={id} className={labelClassName}>
            {label}
          </label>
        )}

        <div
          className={twMerge(
            'group transition-all duration-75 ease-linear',
            'border-2 border-peve-zinc hover:border-peve-selected focus-within:border-peve-selected',
            'text-peve-dark bg-peve-zinc',
            'flex flex-row items-center gap-2',
            'px-2 h-8 rounded-full',
            className,
            disabledStyle
          )}
        >
          {iconBefore}

          <input
            id={id}
            ref={ref}
            className={twMerge(
              'bg-transparent border-none outline-none w-full relative right-0'
            )}
            type={passwordShown ? 'text' : type}
            disabled={disabled}
            {...rest}
          />

          {type === 'password' && (
            <div className="cursor-pointer text-gray-700">
              {!passwordShown && <FiEye size={20} onClick={toggle} />}
              {passwordShown && <FiEyeOff size={20} onClick={toggle} />}
            </div>
          )}

          {iconAfter}
        </div>
      </div>
    );
  }
);

export type { Props as InputProps };
