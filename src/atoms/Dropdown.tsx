import React from 'react';
import { x } from '@xstyled/emotion';
import { useSelect } from 'downshift';
import { HiOutlineChevronDown } from 'react-icons/hi';

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
        p="6px 10px"
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
          <x.span
            flex="none"
            display="flex"
            alignItems="center"
            fontSize="3xl"
            ml="1.25rem"
            transform={isOpen ? 'rotate(-180deg)' : ''}
            transition="all 0.2s ease-in-out"
          >
            <HiOutlineChevronDown strokeWidth={1} />
          </x.span>
        </x.div>
      </x.div>
      <x.ul
        display={isOpen ? 'block' : 'none'}
        position="absolute"
        boxShadow="0px 2px 10px rgba(0, 0, 0, 0.25)"
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
