import { x } from '@xstyled/emotion';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { ReactNode, useState } from 'react';

interface Props {
  href?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  label?: string;
}

export const SidebarNavigation: React.FC<Props> = ({
  href = '#',
  title,
  icon,
  children,
}) => {
  return (
    <Navigation >
      <x.ul>
        <x.li>
          <x.div pl="4px" pr="4px" w="16.50rem">
            <x.div
              display="flex"
              pt="8px"
              pr="12px"
              pb="8px"
              pl="19px"
              alignItems="center"
              borderRadius="6px"
              cursor="pointer"
              justifyContent="space-between"
              bg={{ _: 'transparent', hover: 'gray-700' }}
            >
              <x.div
                display="flex"
                position="relative"
                boxSizing="border-box"
                alignItems="center"
                flexShrink={1}
              > 
                {icon? (
                  <x.div w="24px" h="24px" mr="12px">
                  {icon}
                </x.div>
                ) : null}
                <Link href={href} passHref>
                  <x.a
                    fontSize="14px"
                    fontWeight={500}
                    cursor="pointer"
                    color="#D1D5DB"
                  >
                    {title}
                  </x.a>
                </Link>
              </x.div>
            </x.div>
          </x.div>
        </x.li>
      </x.ul>
    </Navigation>
  );
}
