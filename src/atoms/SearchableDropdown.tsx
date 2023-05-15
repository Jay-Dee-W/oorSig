import React, { useState } from 'react';
import { x } from '@xstyled/emotion';
import { useCombobox } from 'downshift';
import { Input } from '@atoms/index';
import { SearchIcon } from '@atoms/index';

interface SelectOption {
  label: string;
  value: string;
  imgSrc?: string;
}

interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  label?: string;
}

export const SearchableDropdown: React.FC<SelectProps> = ({
  options,
  label = 'Searchable Dropdown',
  placeholder = 'Search option',
}) => {
  function getOptionsFilter(inputValue: string) {
    const lowerCasedInputValue = inputValue.toLowerCase();

    return function optionsFilter(option: SelectOption) {
      return (
        !inputValue ||
        option.label.toLowerCase().includes(lowerCasedInputValue) ||
        option.value.toLowerCase().includes(lowerCasedInputValue)
      );
    };
  }

  const [items, setItems] = useState(options);
  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    onInputValueChange: ({ inputValue }) => {
      setItems(options.filter(getOptionsFilter(inputValue || '')));
    },
    items,
    itemToString: item => (item ? item.label : ''),
  });

  return (
    <x.div>
      <x.div display="flex" w="full" flexDirection="column">
        <x.label
          bg="#373B3D"
          color="white"
          w="fit"
          borderRadius="0.5rem 0.5rem 0 0"
          px="0.7rem"
          py="0.7rem"
          {...getLabelProps()}
        >
          {label}
        </x.label>
        <x.div p="0.625rem" bg="gray-300" borderRadius="0 0 0.5rem 0.5rem">
          <Input
            borderColor="gray-50"
            placeholder={placeholder}
            icon={<SearchIcon />}
            {...getInputProps()}
          />
          <x.ul bg="gray-300" color="white" {...getMenuProps()}>
            {isOpen &&
              items.map((item, index) => (
                <x.li
                  alignContent="center"
                  py="0.7rem"
                  px="0.7rem"
                  bg={highlightedIndex === index ? 'gray-200' : 'transparent'}
                  borderRadius={highlightedIndex === index ? '0.367rem' : ''}
                  display="flex"
                  flexDirection="row"
                  cursor="pointer"
                  key={`${index}`}
                  {...getItemProps({ item, index })}
                >
                  {item.imgSrc ? (
                    <x.img src={item.imgSrc} w="1.875rem" h="1.875rem" />
                  ) : (
                    ''
                  )}
                  <x.span
                    pl="0.5rem"
                    fontSize="base"
                    display="flex"
                    alignItems="center"
                  >
                    {item.label}
                  </x.span>
                </x.li>
              ))}
          </x.ul>
        </x.div>
      </x.div>
    </x.div>
  );
};
