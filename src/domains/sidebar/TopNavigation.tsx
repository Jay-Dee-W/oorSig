import Link from 'next/link';
import { x } from '@xstyled/emotion';
import { MdExpandMore } from 'react-icons/md';

import { Logo, Typography } from '@atoms/index';

interface TopNavigationProps {}

export const TopNavigation: React.FC<TopNavigationProps> = () => (
  <x.div>
    <Link href="/home">
      <x.div cursor="pointer" w="80%" m="auto">
        <Logo w="100%" />
      </x.div>
    </Link>
    <x.div
      backgroundColor="gray-200"
      p="0.4rem"
      borderRadius="0.6rem 0.6rem 0 0"
      display={'flex'}
      alignItems={'center'}
      gap="0.3rem"
      color="gray-50"
    >
      <x.img
        src="/logo.png"
        alt={'Main Logo'}
        title={'Logo'}
        h={'45'}
        w={'45'}
        borderRadius="0.4rem"
        borderColor="gray-50"
      />
      <x.div flex={1}>
        <Typography variant="h6" size="xs">
          Selected organization
        </Typography>

        <Typography variant="h4" size="base" color="white">
          GitStart
        </Typography>
      </x.div>
      <MdExpandMore size={'1.6rem'} />
    </x.div>
    <x.div
      backgroundColor="gray-250"
      p="0.4rem"
      borderRadius="0 0 0.6rem 0.6rem"
      display={'flex'}
      alignItems={'center'}
      gap="0.4rem"
      color="gray-50"
    >
      <x.img
        src="/team.png"
        alt={'Main Logo'}
        title={'Logo'}
        h={'8'}
        w={'8'}
        borderRadius="0.4rem"
        borderColor="gray-50"
      />
      <x.div flex={1}>
        <Typography variant="h4" size="base" color="white">
          Team hustle
        </Typography>
      </x.div>

      <MdExpandMore size={'1.6rem'} />
    </x.div>
  </x.div>
);
