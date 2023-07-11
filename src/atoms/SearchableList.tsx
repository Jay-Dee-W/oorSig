import React, { useState } from 'react';
import styled, { SystemProps, x } from '@xstyled/emotion';
import { useCombobox } from 'downshift';

import { Input } from '@atoms/Input';
import { SearchIcon } from '@atoms/SearchIcon';

interface SelectOptionProps {
  label: string;
  value: string;
  imgSrc?: string;
}

interface SelectProps extends SystemProps {
  options: SelectOptionProps[];
  placeholder?: string;
  label?: string;
  imgSize?: string;
  isSearchable?: boolean;
  onSelect?: (org: string) => void;
  selectedValue?: string;
}

const StyledDiv = styled(x.div)`
  max-height: 12.5rem;
  overflow-y: auto;
  display: block;
  &::-webkit-scrollbar {
    width: 0.625rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray-50;
    border-radius: 0.3125rem;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 0.3125rem;
  }
`;

function getOptionsFilter(inputValue: string) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return function optionsFilter(option: SelectOptionProps) {
    return (
      !inputValue ||
      option.label.toLowerCase().includes(lowerCasedInputValue) ||
      option.value.toLowerCase().includes(lowerCasedInputValue)
    );
  };
}

export const SearchableList: React.FC<SelectProps> = ({
  options,
  label = 'Searchable List',
  placeholder = 'Search option',
  imgSize = '1.875rem',
  isSearchable = false,
  onSelect,
  selectedValue,
  ...systemProps
}) => {
  const [items, setItems] = useState(options);
  const {
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
      <x.div display="flex" w="full" flexDirection="column" {...systemProps}>
        <x.label
          bg="gray-250"
          color="white"
          w="fit"
          borderRadius="0.5rem 0.5rem 0 0"
          px="0.625rem"
          py="0.577rem"
          {...getLabelProps()}
        >
          {label}
        </x.label>
        <x.div bg="gray-300" p="0.625rem" borderRadius="0 0 0.5rem 0.5rem">
          {isSearchable && (
            <Input
              icon={<SearchIcon />}
              placeholder={placeholder}
              borderColor="gray-50"
              {...getInputProps()}
            />
          )}
          <StyledDiv>
            <x.ul
              bg="gray-300"
              color="white"
              pt={isSearchable && '0.625rem'}
              borderRadius="0 0 0.5rem 0.5rem"
              {...getMenuProps()}
            >
              {items.map((item, index) => (
                <x.li
                  alignContent="center"
                  py="0.625rem"
                  px="0.5rem"
                  my="0.2rem"
                  bg={
                    item.value === selectedValue || highlightedIndex === index
                      ? 'gray-200'
                      : 'transparent'
                  }
                  borderRadius={
                    item.value === selectedValue || highlightedIndex === index
                      ? '0.367rem'
                      : ''
                  }
                  display="flex"
                  flexDirection="row"
                  cursor="pointer"
                  key={`${index}`}
                  {...getItemProps({ item, index })}
                  onClick={() => onSelect && onSelect(item.value)}
                >
                  {item.imgSrc && (
                    <x.img
                      src={item.imgSrc}
                      borderRadius="0.25rem"
                      w={imgSize}
                      h={imgSize}
                    />
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
          </StyledDiv>
        </x.div>
      </x.div>
    </x.div>
  );
};
