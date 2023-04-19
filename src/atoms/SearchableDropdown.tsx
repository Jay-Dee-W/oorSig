import React, { useState } from 'react';
import { x } from '@xstyled/emotion';
import { useCombobox } from 'downshift';

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

export const Dropdown: React.FC<SelectProps> = ({
  options,
  label,
  placeholder,
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
    <x.div bg="#2C2F30" w="full"  borderRadius="8px">
      <x.div display="flex" flexDirection="column">
        <x.label
          bg="#373B3D"
          color="white"
          w="fit"
          h="42.12px"
          borderRadius="8px 8px 0 0"
          px="11px"
          py="9px"
          {...getLabelProps()}
        >
          {label}
        </x.label>
        <x.div
          display="flex"
          p="10px"
          flexDirection="column"
          borderRadius="0 0 8px 8px"
        >
          <x.input
            bg="#2C2F30"
            placeholder={placeholder}
            w="full"
            {...getInputProps()}
          />
          <x.ul bg="#2C2F30" color="#FFFFFF" {...getMenuProps()}>
            {isOpen &&
              items.map((item, index) => (
                <x.li
                  alignContent="center"
                  py="11px"
                  px="9px"
                  bg={highlightedIndex === index ? '#373B3D' : 'transparent'}
                  borderRadius={highlightedIndex === index ? '0.367rem' : ''}
                  display="flex"
                  flexDirection="row"
                  cursor="pointer"
                  key={`${index}`}
                  {...getItemProps({ item, index })}
                >
                  {item.imgSrc ? (
                    <x.img src={item.imgSrc} w="30.22px" h="30.22px"/>
                  ) : (
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        x="0.326599"
                        y="0.704102"
                        width="30.2163"
                        height="30.2163"
                        rx="4"
                        fill="url(#pattern0)"
                      />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_272_3021"
                            transform="scale(0.00238095)"
                          />
                        </pattern>
                        <image
                          id="image0_272_3021"
                          width="420"
                          height="420"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                  )}

                  <x.span pl="8px" fontSize="16px" display="flex" alignItems="center">{item.label}</x.span>
                </x.li>
              ))}
          </x.ul>
        </x.div>
      </x.div>
    </x.div>
  );
};
