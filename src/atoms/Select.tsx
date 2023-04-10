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
      padding="11px 17px 11px 15px"
      gap="107px"
      position="absolute"
      w="211.49px"
      h="46px"
      left="20px"
      top="20px"
      background="#2C2F30"
      borderRadius="6px"
      border="0.5px solid #C8CACB"
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
