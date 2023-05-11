import { MdOutlineMoreVert, MdLogout } from 'react-icons/md';
import { useState } from 'react';
import { x } from '@xstyled/emotion';
import { Typography } from '@atoms/index';
import { Avatar } from '@atoms/index';
import { Button } from '@atoms/index';

export const SidebarBottom: React.FC = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setShowLogout(!showLogout);
  };
  return (
    <x.div position="fixed" bottom="0" w="15.203rem">
      {showLogout && (
        <x.div m={3}>
          <Button
            icon={<MdLogout />}
            h="3.041rem"
            w="13.203rem"
            borderRadius="none"
            variant="light"
            position="absolute"
            bottom="8rem"
            zIndex="999"
            onClick={() => {
              // need to add the logout function here
            }}
          >
            Logout
          </Button>
        </x.div>
      )}
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
        <Avatar src={undefined} alt={'unkown'} />
        <Typography flex={1} color="white">
          Username
        </Typography>
        <MdOutlineMoreVert size="1.6rem" onClick={handleLogout} />
      </x.div>
      <Typography size="xs" color="gray-50">
        Copyright © 2023 Gitstart <br />
        All right reserved
      </Typography>
    </x.div>
  );
};
