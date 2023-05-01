import { Logo } from '@oorsig/atoms/Logo';
import { x } from '@xstyled/emotion';
import Link from 'next/link';

interface NavigationProps {
  children: React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = ({ children }) => (
  <x.div>
    <Link href="/home">
      <x.div cursor="pointer">
        <Logo w="12.50rem" />
      </x.div>
    </Link>
    <x.div display="flex" flexDirection="column">
      <x.nav>
        {children}
      </x.nav>
    </x.div>
  </x.div>
);