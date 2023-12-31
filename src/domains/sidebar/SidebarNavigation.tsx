import { ReactNode, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SystemProps, Theme, x } from '@xstyled/emotion';

import { Typography } from '@atoms/index';
interface Props extends SystemProps<Theme> {
  href?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  label?: string;
  active?: (path: string) => boolean;
}

export const SidebarNavigation: React.FC<Props> = ({
  href = '#',
  title,
  icon,
  active = () => false,
}) => {
  const router = useRouter();
  const isActive = active?.(router.asPath) ?? router.asPath === href;
  const activeColor = 'gray-250';
  const backgroundColor = useMemo(
    () => (isActive ? activeColor : 'transparent'),
    [isActive]
  );

  return (
    <x.div display={'flex'} flexDirection={'column'} gap="0.3rem">
      <x.div display="flex" flexDirection="column">
        <x.nav>
          <x.ul>
            <x.li>
              <x.div pl="4px" pr="4px" w="16.50rem">
                <x.div
                  display="flex"
                  pt="18px"
                  pr="18px"
                  pb="16px"
                  pl="19px"
                  mb="2px"
                  alignItems="center"
                  borderRadius="6px"
                  cursor="pointer"
                  justifyContent="space-between"
                  bg={{ _: backgroundColor, hover: activeColor }}
                >
                  <x.div
                    display="flex"
                    position="relative"
                    boxSizing="border-box"
                    alignItems="center"
                    flexShrink={1}
                  >
                    {icon ? <x.div mr="0.5rem">{icon}</x.div> : null}
                    <Link href={href} passHref>
                      <x.a
                        fontSize="14px"
                        fontWeight={500}
                        cursor="pointer"
                        color="gray-50"
                      >
                        <Typography flex={1}>{title}</Typography>
                      </x.a>
                    </Link>
                  </x.div>
                </x.div>
              </x.div>
            </x.li>
          </x.ul>
        </x.nav>
      </x.div>
    </x.div>
  );
};
