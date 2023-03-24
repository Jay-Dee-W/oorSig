import React from 'react';

import { x, SystemProps } from '@xstyled/emotion';

interface InputProps extends SystemProps {
  label: string;
  helper?: string;
  error?: { message?: string };
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  name?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  ref?: React.Ref<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      label,
      helper,
      error,
      onChange,
      onBlur,
      name,
      placeholder,
      type,
      ...styleProps
    },
    ref
  ) => {
    return (
      <x.div w="full" {...styleProps}>
        <x.label fontSize="sm" fontWeight="md" color="gray-700">
          {label}
          <x.div mt={1}>
            <x.input
              display="block"
              w="full"
              p={2}
              px={3}
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
              color={error ? 'red-900' : undefined}
              // Use form hook connection
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              placeholder={placeholder}
            />
          </x.div>
        </x.label>
        {!error && helper && (
          <x.p mt={2} fontSize="sm" color="gray-500">
            {helper}
          </x.p>
        )}
        {error?.message && (
          <x.p mt={2} fontSize="sm" color="red-600">
            {error.message}
          </x.p>
        )}
      </x.div>
    );
  }
);

Input.displayName = 'Input';