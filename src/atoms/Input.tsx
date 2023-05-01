import React from 'react';
import { x, SystemProps } from '@xstyled/emotion';

interface InputProps extends SystemProps {
  error?: { message?: string };
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  name?: string;
  placeholder?: string;
  type?: 'text' | 'search';
  ref?: React.Ref<HTMLInputElement>;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      error,
      onChange,
      onBlur,
      name,
      placeholder,
      type = 'text',
      icon,
      ...systemProps
    },
    ref
  ) => {
    return (
      <x.div w="full" {...systemProps}>
        <x.div mt={1} position="relative" color="gray-700">
          {icon && (
            <x.div
              position="absolute"
              left="0.5rem"
              top="50%"
              transform="translateY(-50%)"
              pointerEvents="none"
              color="#fff"
            >
              {icon}
            </x.div>
          )}
          <x.input
            display="block"
            w="full"
            p={2}
            px={3}
            pl={icon ? '2.5rem' : '1rem'}
            type={type}
            ring={{ focus: 1 }}
            ringColor={{
              focus: !error ? 'primary-300' : 'red-500',
            }}
            outline="none"
            borderRadius="md"
            borderWidth="1px"
            borderColor={{
              _: !error ? 'gray-300' : 'red-300',
              focus: !error ? 'primary-300' : 'red-500',
            }}
            fontSize={{ _: 'default', sm: 'sm' }}
            color={error ? 'red-900' : '#ffffff'}
            background="#2C2F30"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            placeholder={placeholder}
          />
        </x.div>
        {error?.message && (
          <x.p mt={2} fontSize="sm" color="red">
            {error.message}
          </x.p>
        )}
      </x.div>
    );
  }
);

Input.displayName = 'Input';
