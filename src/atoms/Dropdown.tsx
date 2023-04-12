import React, { useState, useEffect, useRef } from 'react';
import { x } from '@xstyled/emotion';

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  defaultValue?: string;
  placeholder?: string;
  onChange?: (selectedValue: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  placeholder = 'Select',
  onChange,
  ...systemProps
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        (event.target as HTMLElement).nodeName !== 'OPTION'
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', onOutsideClick);

    return () => {
      document.removeEventListener('click', onOutsideClick);
    };
  }, []);

  const onOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <x.div
      display="inline-block"
      position="relative"
      {...systemProps}
      ref={dropdownRef}
    >
      <x.button
        onClick={() => setIsOpen(!isOpen)}
        display="flex"
        flexDirection="row"
        bg="#2C2F30"
        border="0.03125rem solid #C8CACB"
        w="13.343rem"
        h="2.773rem"
        p="0.61rem 1.067rem 0.61rem 0.933rem"
        cursor="pointer"
        color="white"
        fontStyle="normal"
        fontFamily="Inter"
        borderRadius="0.367rem"
        boxSizing="border-box"
        fontWeight="400"
        fontSize="1rem"
        lineHeight="1.5rem"
      >
        <x.span
          overflow="hidden"
          textOverflow="ellipsis"
          flex="1"
          textAlign="left"
        >
          {selectedValue
            ? options.find(option => option.value === selectedValue)?.label
            : placeholder}
        </x.span>
        <x.svg viewBox="0 0 16 16" w="0.99rem" flex="none" left="11.063rem">
          <path
            d="M8 12l-4-4M8 12l4-4"
            fill="none"
            stroke="#C8CACB"
            strokeWidth="0.12rem"
            strokeLinecap="round"
          />
        </x.svg>
      </x.button>
      {isOpen && (
        <x.ul
          position="absolute"
          top="100%"
          color="white"
          w="13.343rem"
          listStyleType="none"
          bg="#2C2F30"
          borderRadius="0.367rem"
        >
          {options.map(option => (
            <x.li
              key={option.value}
              p="0.533rem"
              cursor="pointer"
              bg={{ hover: '#C8CACB' }}
              borderRadius={{ hover: '0.367rem' }}
              onClick={() => onOptionClick(option.value)}
            >
              {option.label}
            </x.li>
          ))}
        </x.ul>
      )}
    </x.div>
  );
};
