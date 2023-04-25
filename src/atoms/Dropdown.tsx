import React from 'react';
import { x } from '@xstyled/emotion';
import { useSelect } from 'downshift';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select',
}) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect<DropdownOption>({
    items: options,
  });

  return (
    <x.div position="relative">
      <x.div
        w="full"
        display="flex"
        flexDirection="column"
        bg="gray-300"
        border="0.03125rem solid #5B5B5B"
        p="11px 17px 11px 15px"
        cursor="pointer"
        color="white"
        fontStyle="normal"
        fontFamily="Inter"
        borderRadius="0.367rem"
        boxSizing="border-box"
        fontWeight="400"
        fontSize="base"
        lineHeight="base"
        {...getToggleButtonProps()}
      >
        <x.div display="flex" cursor="pointer">
          <x.span
            flex="1"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
          >
            {selectedItem ? selectedItem.label : placeholder}
          </x.span>
          <x.span flex="none" display="flex" alignItems="center">
            {isOpen ? (
              <x.svg
                w="17.49px"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10.6602L9.74561 1.91467L18.4912 10.6602"
                  stroke="#C8CACB"
                  strokeWidth="1.92"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 10.6602L9.74561 1.91467L18.4912 10.6602"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="1.92"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </x.svg>
            ) : (
              <x.svg
                w="17.49px"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.33984L9.74561 10.0854L18.4912 1.33984"
                  stroke="#C8CACB"
                  stroke-width="1.92"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 1.33984L9.74561 10.0854L18.4912 1.33984"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.92"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </x.svg>
            )}
          </x.span>
        </x.div>
      </x.div>
      <x.ul
        position="absolute"
        w="full"
        top="100%"
        left="0"
        color="white"
        bg="gray-300"
        borderRadius="0.367rem"
        listStyleType="none"
        zIndex="10"
        m="0"
        p="0"
        {...getMenuProps()}
      >
        {isOpen &&
          options.map((item, index) => (
            <x.li
              p="0.533rem"
              cursor="pointer"
              bg={highlightedIndex === index ? 'gray-100' : 'transparent'}
              borderRadius={highlightedIndex === index ? '0.367rem' : ''}
              key={index}
              {...getItemProps({ item, index })}
            >
              <x.span>{item.label}</x.span>
            </x.li>
          ))}
      </x.ul>
    </x.div>
  );
};
