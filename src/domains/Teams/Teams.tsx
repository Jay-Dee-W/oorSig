import React, { useState, useCallback, useEffect } from 'react';
import { graphql, usePaginationFragment } from 'react-relay';
import { x } from '@xstyled/emotion';
import { MdClose, MdExpandMore } from 'react-icons/md';
import { Teams_viewer$key } from '@relay/__generated__/Teams_viewer.graphql';
import { TeamsRefetchQuery } from '@relay/__generated__/TeamsRefetchQuery.graphql';
import { Backdrop, Typography, SearchableList } from '@atoms/index';

interface SidebarTeamProps {
  TeamsRef: Teams_viewer$key;
  loadedItem: number;
  selectedOrganization: string | null;
}

interface Team {
  label: string;
  value: string;
  imgSrc: string;
}

const Teams_viewer = graphql`
  fragment Teams_viewer on Organization
  @refetchable(queryName: "TeamsRefetchQuery")
  @argumentDefinitions(first: { type: "Int!" }, cursor: { type: "String" }) {
    teams(first: $first, after: $cursor) @connection(key: "Teams_teams") {
      edges {
        node {
          name
          slug
          avatarUrl
          organization {
            name
          }
        }
      }
      pageInfo {
        startCursor
        hasNextPage
        endCursor
      }
    }
  }
`;

export const Teams: React.FC<SidebarTeamProps> = ({
  TeamsRef,
  loadedItem,
  selectedOrganization,
}) => {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    TeamsRefetchQuery,
    Teams_viewer$key
  >(Teams_viewer, TeamsRef);

  const [teamData, setTeamData] = useState<Team[]>([]);
  const [showTeamList, setShowTeamList] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('Select Team');

  useEffect(() => {
    const newTeamData: Team[] =
      data.teams.edges
        ?.filter(edge => edge?.node?.organization.name === selectedOrganization)
        .map((edge: any) => ({
          label: edge.node.name,
          value: edge.node.slug,
          imgSrc: edge.node.avatarUrl,
        })) ?? [];

    setTeamData(newTeamData);
  }, [data.teams.edges, selectedOrganization]);

  const toggleShowTeamList = () => {
    setShowTeamList(!showTeamList);
  };

  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team);
    setShowTeamList(false);
  };

  const handleBackdropClick = () => {
    setShowTeamList(false);
  };

  const handleLoadMoreTeams = useCallback(() => {
    if (!hasNext || isLoadingNext) return;
    loadNext(loadedItem);
  }, [loadNext, hasNext, isLoadingNext]);

  return (
    <x.div>
      {showTeamList && <Backdrop onClick={handleBackdropClick} />}

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
              w="16.5rem"
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
                isLoading={isLoadingNext}
                onScroll={handleLoadMoreTeams}
              />
            </x.div>
          </x.div>
        ))}
    </x.div>
  );
};
