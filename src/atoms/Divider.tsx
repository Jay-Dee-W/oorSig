import { x} from '@xstyled/emotion';

export const Divider: React.FC = ({ ...spaceProps }) => {
  return (
    <x.div display="relative" w="100%" {...spaceProps}>
      <x.div display="absolute" flex alignItems="center">
        <x.div w="full" borderTopWidth={1} borderColor="gray-300" />
      </x.div>
    </x.div>
  );
};
