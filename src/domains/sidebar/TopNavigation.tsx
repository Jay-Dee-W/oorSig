import React, { useState } from 'react';
import Link from 'next/link';
import { x } from '@xstyled/emotion';
import { MdClose, MdExpandMore } from 'react-icons/md';

import { Backdrop, Logo, Typography, SearchableList } from '@atoms/index';

interface TopNavigationProps {}
interface Organization {
  label: string;
  value: string;
  imgSrc: string;
}

interface Team {
  label: string;
  value: string;
  imgSrc: string;
}

export const TopNavigation: React.FC<TopNavigationProps> = () => {
  const dummy_result_data = {
    viewer: {
      login: 'WajihaNiazi',
      organizations: {
        edges: [
          {
            node: {
              name: 'GitStart',
              label: 'GitStart',
              avatarUrl: 'https://avatars.githubusercontent.com/u/31163758?v=4',
              teams: {
                edges: [
                  {
                    node: {
                      name: 'Community',
                      slug: 'community',
                      avatarUrl:
                        'https://avatars.githubusercontent.com/t/2910644?s=400&v=4',
                    },
                  },
                  {
                    node: {
                      name: 'Team Hustle',
                      slug: 'team-hustle',
                      avatarUrl:
                        'https://avatars.githubusercontent.com/t/3877268?s=400&v=4',
                    },
                  },
                  {
                    node: {
                      name: 'GitStartFrontend_Team',
                      slug: 'gitstartfrontend_team',
                      avatarUrl:
                        'https://avatars.githubusercontent.com/t/6508005?s=400&v=4',
                    },
                  },
                  {
                    node: {
                      name: 'BlueMeg Team',
                      slug: 'bluemeg-team',
                      avatarUrl:
                        'https://avatars.githubusercontent.com/t/6824319?s=400&v=4',
                    },
                  },
                  {
                    node: {
                      name: 'Pabio_Team',
                      slug: 'pabio_team',
                      avatarUrl:
                        'https://avatars.githubusercontent.com/t/7661705?s=400&v=4',
                    },
                  },
                ],
              },
            },
          },
          {
            node: {
              name: 'CodeToInspire',
              label: 'CTI',
              avatarUrl: 'https://avatars.githubusercontent.com/u/31163758?v=4',
              teams: {
                edges: [
                  {
                    node: {
                      name: 'Full-Stak',
                      slug: 'full-stack',
                      avatarUrl:
                        'https://avatars.githubusercontent.com/t/2910644?s=400&v=4',
                    },
                  },
                  {
                    node: {
                      name: 'Game',
                      slug: 'game',
                      avatarUrl:
                        'https://avatars.githubusercontent.com/t/6824319?s=400&v=4',
                    },
                  },
                  {
                    node: {
                      name: 'Blockchine',
                      slug: 'blockchine',
                      avatarUrl:
                        'https://avatars.githubusercontent.com/t/7661705?s=400&v=4',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
  };

  const organizationData: Organization[] =
    dummy_result_data.viewer.organizations?.edges?.map((edge: any) => ({
      label: edge.node.label,
      value: edge.node.name,
      imgSrc: edge.node.avatarUrl,
    })) ?? [];

  const [showOrgnizationList, setShowOrgnizationList] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [showTeamList, setShowTeamList] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('Select Team');

  const toggleShowOrganizationList = () => {
    setShowOrgnizationList(!showOrgnizationList);
  };
  const toggleShowTeamList = () => {
    setShowTeamList(!showTeamList);
  };

  const handleOrganizationSelect = (org: string) => {
    setSelectedOrganization(org);
    setShowOrgnizationList(false);

    const selectedOrg = dummy_result_data.viewer.organizations.edges.find(
      (edge: any) => edge.node.name === org
    );

    const newTeamData: Team[] =
      selectedOrg?.node.teams.edges?.map((edge: any) => ({
        label: edge.node.name,
        value: edge.node.slug,
        imgSrc: edge.node.avatarUrl,
      })) ?? [];

    if (!newTeamData.some(team => team.value === selectedTeam)) {
      setSelectedTeam('Select Team');
    }

    setTeamData(newTeamData);
  };

  const [teamData, setTeamData] = useState<Team[]>(() => {
    const defaultOrg = dummy_result_data.viewer.organizations.edges[0];
    const defaultTeamData =
      defaultOrg?.node.teams.edges?.map((edge: any) => ({
        label: edge.node.name,
        value: edge.node.slug,
        imgSrc: edge.node.avatarUrl,
      })) ?? [];

    return defaultTeamData;
  });
  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team);
    setShowTeamList(false);
  };
  const handleBackdropClick = () => {
    setShowOrgnizationList(false);
    setShowTeamList(false);
  };

  return (
    <x.div alignItems="center">
      <Link href="/home">
        <x.div cursor="pointer" w="80%" m="auto">
          <Logo w="100%" />
        </x.div>
      </Link>
      {(showOrgnizationList || (selectedOrganization && showTeamList)) && (
        <Backdrop onClick={handleBackdropClick} />
      )}
      {!showOrgnizationList ? (
        <x.div
          backgroundColor="gray-200"
          p="0.6rem"
          borderRadius={
            selectedOrganization === '' ? ' 0.6rem' : '0.6rem 0.6rem 0 0'
          }
          display="flex"
          alignItems="center"
          gap="0.3rem"
          color="gray-50"
          onClick={toggleShowOrganizationList}
          zIndex={1}
        >
          <x.img
            src={
              selectedOrganization
                ? organizationData.find(
                    org => org.value === selectedOrganization
                  )?.imgSrc
                : '/logo.png'
            }
            alt={`${selectedOrganization} logo`}
            title="Logo"
            h="45"
            w="45"
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
          <MdExpandMore size="1.6rem" />
        </x.div>
      ) : (
        <x.div position="relative">
          <x.div
            position="absolute"
            w="15.9rem"
            border="1px solid"
            borderColor="gray-250"
            borderRadius="0.5rem"
            zIndex={2}
          >
            <x.div position="absolute" right="5px" color="gray-50" pt="0.3rem">
              <MdClose size="1.6rem" onClick={toggleShowOrganizationList} />
            </x.div>
            <SearchableList
              options={organizationData}
              placeholder="Search Organization"
              label="Select Organization"
              imgSize="2.3rem"
              isSearchable={organizationData.length > 3}
              onSelect={handleOrganizationSelect}
              selectedValue={selectedOrganization}
            />
          </x.div>
        </x.div>
      )}
      {selectedOrganization &&
        (!showTeamList ? (
          <x.div
            backgroundColor="gray-250"
            p="0.4rem"
            borderRadius="0 0 0.6rem 0.6rem"
            display={'flex'}
            alignItems={'center'}
            gap="0.4rem"
            color="gray-50"
            onClick={toggleShowTeamList}
          >
            <x.img
              src={
                selectedTeam !== 'Select Team'
                  ? teamData.find(team => team.value === selectedTeam)?.imgSrc
                  : '/team.png'
              }
              alt={`${selectedTeam} logo`}
              title="Logo"
              h="8"
              w="8"
              borderRadius="0.4rem"
              borderColor="gray-50"
            />
            <x.div flex={1}>
              <Typography variant="h4" size="base" color="white">
                {selectedTeam}
              </Typography>
            </x.div>
            <MdExpandMore size="1.6rem" />
          </x.div>
        ) : (
          <x.div position="relative">
            <x.div
              position="absolute"
              w="15.9rem"
              border="1px solid"
              borderColor="gray-250"
              borderRadius="0.5rem"
              zIndex={2}
            >
              <x.div
                position="absolute"
                right="5px"
                color="gray-50"
                pt="0.3rem"
              >
                <MdClose size="1.6rem" onClick={toggleShowTeamList} />
              </x.div>
              <SearchableList
                options={teamData}
                placeholder="Search Team"
                label="Select Team"
                imgSize="1.8rem"
                isSearchable={teamData.length > 4}
                onSelect={handleTeamSelect}
                selectedValue={selectedTeam}
              />
            </x.div>
          </x.div>
        ))}
    </x.div>
  );
};
