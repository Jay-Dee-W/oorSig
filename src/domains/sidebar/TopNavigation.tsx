import React, { useState } from 'react';
import {
  graphql,
  GraphQLTaggedNode,
  PreloadedQuery,
  usePreloadedQuery,
  useFragment,
  usePaginationFragment,
} from 'react-relay';
import Link from 'next/link';
import { x } from '@xstyled/emotion';
import { MdClose, MdExpandMore } from 'react-icons/md';
import { Backdrop, Logo, Typography, SearchableList } from '@atoms/index';
import { SidebarQuery } from '@relay/__generated__/SidebarQuery.graphql';
import { TopNavigation_viewer$key } from '@relay/__generated__/TopNavigation_viewer.graphql';
import { TopNavigation_viewer$data } from '@relay/__generated__/TopNavigation_viewer.graphql';

interface TopNavigationProps {
  TopNavigationQuery: GraphQLTaggedNode;
  TopNavigationQueryReference: PreloadedQuery<SidebarQuery>;
  loadedItem:number
}
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

const TopNavigation_viewer = graphql`
  fragment TopNavigation_viewer on User
  @argumentDefinitions(
    organizationsFirst: { type: "Int!" }
    organizationsCursor: { type: "String" }
    teamsFirst: { type: "Int!" }
    teamsCursor: { type: "String" }
  )@refetchable(queryName: "TopNavigationRefetchQuery"){
    organizations(first: $organizationsFirst, after: $organizationsCursor)
      @connection(key: "TopNavigation_organizations") {
      edges {
        node {
          name
          label: name
          avatarUrl
          teams(first: $teamsFirst, after: $teamsCursor)
            @connection(key: "TopNavigation_teams") {
            edges {
              node {
                name
                slug
                avatarUrl
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const TopNavigation: React.FC<TopNavigationProps> = ({
  TopNavigationQuery,
  TopNavigationQueryReference,
  loadedItem
}) => {
  const { viewer } = usePreloadedQuery(
    TopNavigationQuery,
    TopNavigationQueryReference
  );

  const organizationData: Organization[] =
    data.organizations?.edges?.map((edge: any) => ({
      label: edge.node.label,
      value: edge.node.name,
      imgSrc: edge.node.avatarUrl,
    })) ?? [];
  const [teamData, setTeamData] = useState<Team[]>([]);

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

    const selectedOrg = data.organizations.edges?.find(
      (edge: any) => edge.node.name === org
    );

    const newTeamData: Team[] =
      selectedOrg?.node?.teams.edges?.map((edge: any) => ({
        label: edge.node.name,
        value: edge.node.slug,
        imgSrc: edge.node.avatarUrl,
      })) ?? [];

    if (!newTeamData.some(team => team.value === selectedTeam)) {
      setSelectedTeam('Select Team');
    }

    setTeamData(newTeamData);
  };
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
            teamData.length === 0 || !selectedOrganization
              ? ' 0.6rem'
              : '0.6rem 0.6rem 0 0'
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
      {teamData.length > 0 &&
        selectedOrganization &&
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
