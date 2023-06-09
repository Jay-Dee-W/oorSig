import React, { useState } from 'react';
import Link from 'next/link';
import { x } from '@xstyled/emotion';
import { MdExpandMore } from 'react-icons/md';

import { Logo, Typography } from '@atoms/index';
import { SearchableList } from '@atoms/index';

interface TopNavigationProps {}

export const TopNavigation: React.FC<TopNavigationProps> = () => {
  const Dummy_orgnization_data = [
    {
      label: 'Gitstart',
      value: 'Gitstart',
      imgSrc: 'team.png',
    },
    {
      label: 'CodeToInsprie',
      value: 'CTI',
      imgSrc: 'team.png',
    },
    {
      label: 'TutiaTech',
      value: 'TutiaTech',
      imgSrc: 'team.png',
    },
  ];

  const [showOrgnizationList, setShowOrgnizationList] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState('');



  const handleOrganiztionClick = () => {
    setShowOrgnizationList(!showOrgnizationList);
  };

  const handleOrganizationSelect = (org: string) => {
    setSelectedOrganization(org);
    setShowOrgnizationList(false);
  };

  return (
    <x.div alignItems={'center'}>
      <Link href="/home">
        <x.div cursor="pointer" w="80%" m="auto">
          <Logo w="100%" />
        </x.div>
      </Link>
      {!showOrgnizationList ? (
        <x.div
          backgroundColor="gray-200"
          p="0.4rem"
          borderRadius="0.6rem 0.6rem 0 0"
          display={'flex'}
          alignItems={'center'}
          gap="0.3rem"
          color="gray-50"
          onClick={handleOrganiztionClick}
          zIndex={1}
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
              {selectedOrganization}
            </Typography>
          </x.div>
          <MdExpandMore size={'1.6rem'} />
        </x.div>
      ) : (
        <x.div position="absolute" zIndex={2}>
          <SearchableList
            options={Dummy_orgnization_data}
            placeholder="Search Organization"
            label="Select Organization"
            imgSize="2rem"
            isSearchable={true}
            // onSelect={handleOrganizationSelect}
          />
        </x.div>
      )}
    </x.div>
  );
};
