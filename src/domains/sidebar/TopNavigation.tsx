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

  const Dummy_team_data = [
    {
      label: 'Airful',
      value: 'Airful',
      imgSrc: 'team.png',
    },
    {
      label: 'Hustle',
      value: 'Hustle',
      imgSrc: 'team.png',
    },
    {
      label: 'BlueMeg',
      value: 'BlueMeg',
      imgSrc: 'team.png',
    },
  ];

  const [showOrgnizationList, setShowOrgnizationList] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [showTeamList, setShowTeamList] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('Select Team');

  const handleOrganiztionClick = () => {
    setShowOrgnizationList(!showOrgnizationList);
  };
  const handleTeamClick = () => {
    setShowTeamList(!showTeamList);
  };
  const handleOrganizationSelect = (org: string) => {
    setSelectedOrganization(org);
    setShowOrgnizationList(false);
  };
  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team);
    setShowTeamList(false);
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
              Selecte organization
            </Typography>
            <Typography variant="h4" size="base" color="white">
              {selectedOrganization}
            </Typography>
          </x.div>
          <MdExpandMore size={'1.6rem'} />
        </x.div>
      ) : (
        <x.div
          position="absolute"
          w="15.9rem"
          border="1px solid"
          borderColor="gray-250"
          borderRadius="0.5rem"
          zIndex={2}
        >
          <SearchableList
            options={Dummy_orgnization_data}
            placeholder="Search Organization"
            label="Select Organization"
            imgSize="2rem"
            isSearchable={true}
            onSelect={handleOrganizationSelect}
          />
        </x.div>
      )}
      {!showTeamList ? (
        <x.div
          backgroundColor="gray-250"
          p="0.4rem"
          borderRadius="0 0 0.6rem 0.6rem"
          display={'flex'}
          alignItems={'center'}
          gap="0.4rem"
          color="gray-50"
          onClick={handleTeamClick}
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
              {selectedTeam}
            </Typography>
          </x.div>
          <MdExpandMore size={'1.6rem'} />
        </x.div>
      ) : (
        <x.div
          position="absolute"
          w="15.9rem"
          border="1px solid"
          borderColor="gray-250"
          borderRadius="0.5rem"
          zIndex={2}
        >
          <SearchableList
            options={Dummy_team_data}
            placeholder="Search Team"
            label="Select Team"
            imgSize="2rem"
            isSearchable={true}
            onSelect={handleTeamSelect}
          />
        </x.div>
      )}
    </x.div>
  );
};
