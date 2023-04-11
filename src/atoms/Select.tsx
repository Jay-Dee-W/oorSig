import React from 'react';
import { SystemProps, x } from '@xstyled/emotion';

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends SystemProps {
  options: Option[];
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder,
  onChange,
  ...systemProps
}) => {
  return (
    <x.select
      value={value}
      onChange={onChange}
      boxSizing="border-box"
      display="flex"
      flexDirection="row"
      alignItems="center"
      padding="0.6875rem 1.0625rem 0.6875rem 0.9375rem"
      gap="6.6875rem"
      position="absolute"
      w="13.21875rem"
      h="2.875rem"
      left="1.25rem"
      top="1.25rem"
      background="#2C2F30"
      borderRadius="0.375rem"
      border="0.03125rem solid #C8CACB"
      {...systemProps}
      color="white"
    >
      {placeholder && (
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
      )}
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </x.select>
  );
};
