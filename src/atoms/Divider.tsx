import { x , SystemProps} from '@xstyled/emotion';

interface DividerProps extends SystemProps {
  borderColor?:'gray-300' | 'gray-200'| 'gray-100' ,
}

export const Divider: React.FC<DividerProps> = ({
  borderColor = "gray-100",
  ...spaceProps
}) => {
  return (
    <x.div display="relative" w="100%" {...spaceProps}>
      <x.div display="absolute" flex alignItems="center">
        <x.div w="full" borderTopWidth={1} borderColor={borderColor} />
      </x.div>
    </x.div>
  );
};
