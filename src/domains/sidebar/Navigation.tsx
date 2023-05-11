import Link from 'next/link';
import { x } from '@xstyled/emotion';
import { Logo } from '@atoms/index';

interface NavigationProps {
  children: React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = ({ children }) => (
  <x.div>
    <Link href="/home">
      <x.div cursor="pointer" w="80%" m="auto">
        <Logo w="12.50rem" />
      </x.div>
    </Link>
    <x.div display="flex" flexDirection="column">
      <x.nav>{children}</x.nav>
    </x.div>
  </x.div>
);
