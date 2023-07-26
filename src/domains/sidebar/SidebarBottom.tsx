import { MdLogout, MdOutlineMoreVert, MdSettings } from 'react-icons/md';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { x } from '@xstyled/emotion';
import { Avatar } from '@atoms/Avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@atoms/Popover';
import { Typography } from '@atoms/Typography';
import { SidebarQuery } from '@relay/__generated__/SidebarQuery.graphql';
import {
  graphql,
  GraphQLTaggedNode,
  PreloadedQuery,
  usePreloadedQuery,
  useFragment,
} from 'react-relay';
import { SidebarBottom_viewer$key } from '@relay/__generated__/SidebarBottom_viewer.graphql';
interface SidebarBottomProps {
  SidebarBottomQuery: GraphQLTaggedNode;
  SidebarBottomQueryReference: PreloadedQuery<SidebarQuery>;
}

const SidebarBottom_viewer = graphql`
  fragment SidebarBottom_viewer on User {
    name
    avatarUrl
  }
`;
export const SidebarBottom: React.FC<SidebarBottomProps> = ({
  SidebarBottomQuery,
  SidebarBottomQueryReference,
}) => {
  const { viewer } = usePreloadedQuery(
    SidebarBottomQuery,
    SidebarBottomQueryReference
  );
  const data = useFragment<SidebarBottom_viewer$key>(
    SidebarBottom_viewer,
    viewer
  );

  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const clickSignOut = async () => {
    await signOut();
    router.replace('/');
  };

  return (
    <x.div>
      <Popover placement="top-start">
        <PopoverTrigger>
          <x.div
            display="flex"
            p="0.7rem"
            border="1"
            borderColor="gray-200"
            mb="1rem"
            borderRadius="0.4rem"
            alignItems={'center'}
            gap="2"
            cursor="pointer"
          >
            <Avatar
              src={data?.avatarUrl ?? undefined}
              alt={data?.name || 'NA'}
            />
            <Typography flex={1} color="white">
              {data?.name}
            </Typography>
            <MdOutlineMoreVert size="1.6rem" />
          </x.div>
        </PopoverTrigger>
        <PopoverContent>
          <x.div
            w="15.2rem"
            display="flex"
            flexDirection="column"
            backgroundColor="gray-300"
            p={2}
            spaceY={2}
          >
            <MenuItem icon={<MdLogout />} onClick={clickSignOut}>
              <x.span>Logout</x.span>
            </MenuItem>
            <MenuItem icon={<MdSettings />} onClick={() => {}}>
              <x.span>Setting</x.span>
            </MenuItem>
          </x.div>
        </PopoverContent>
      </Popover>
      <Typography size="xs" color="gray-50">
        Copyright © {currentYear} Gitstart <br />
        All right reserved
      </Typography>
    </x.div>
  );
};

interface MenuItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, icon, onClick }) => {
  return (
    <x.div
      p={4}
      display="flex"
      backgroundColor={{ hover: 'gray-250' }}
      onClick={onClick}
      fontSize="20px"
      cursor="pointer"
    >
      <x.span pr={3}>{icon}</x.span>
      {children}
    </x.div>
  );
};
