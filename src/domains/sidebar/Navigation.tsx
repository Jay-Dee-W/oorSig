import { Logo } from '@oorsig/atoms/Logo';
import { x } from '@xstyled/emotion';
import Link from 'next/link';

interface NavigationProps {
  children: React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = ({ children }) => (
  <x.div bg="#2C2F30" w="17.82125rem" color="#ffffff">
    <Link href="/home">
      <x.div cursor="pointer" px={2}>
        <Logo w="16.50rem"/>
      </x.div>
    </Link>
    <x.div display="flex" flexDirection="column">
      {children}
    </x.div>
  </x.div>
);