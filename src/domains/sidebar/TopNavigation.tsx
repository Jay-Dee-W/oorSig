import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  graphql,
  GraphQLTaggedNode,
  PreloadedQuery,
  usePreloadedQuery,
  usePaginationFragment,
} from 'react-relay';
import Link from 'next/link';
import { x } from '@xstyled/emotion';
import { MdClose, MdExpandMore } from 'react-icons/md';
import { Backdrop, Logo, Typography, SearchableList } from '@atoms/index';
import { SidebarQuery } from '@relay/__generated__/SidebarQuery.graphql';
import { TopNavigation_viewer$key } from '@relay/__generated__/TopNavigation_viewer.graphql';
import { TopNavigationRefetchQuery } from '@relay/__generated__/TopNavigationRefetchQuery.graphql';
import { SidebarTeams } from './SidebarTeams';
interface TopNavigationProps {
  TopNavigationQuery: GraphQLTaggedNode;
  TopNavigationQueryReference: PreloadedQuery<SidebarQuery>;
  loadedItem: number;
}
interface Organization {
  label: string;
  value: string;
  imgSrc: string;
}

const TopNavigation_viewer = graphql`
  fragment TopNavigation_viewer on User
  @refetchable(queryName: "TopNavigationRefetchQuery")
  @argumentDefinitions(
    organizationsFirst: { type: "Int!" }
    organizationsCursor: { type: "String" }
    teamsFirst: { type: "Int!" }
    teamsCursor: { type: "String" }
  ) {
    organizations(first: $organizationsFirst, after: $organizationsCursor)
      @connection(key: "TopNavigation_organizations") {
      edges {
        node {
          name
          label: name
          avatarUrl
          ...SidebarTeams_viewer
            @arguments(teamsFirst: $teamsFirst, teamsCursor: $teamsCursor)
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

export const TopNavigation: React.FC<TopNavigationProps> = ({
  TopNavigationQuery,
  TopNavigationQueryReference,
  loadedItem,
}) => {
  const { viewer } = usePreloadedQuery(
    TopNavigationQuery,
    TopNavigationQueryReference
  );

  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    TopNavigationRefetchQuery,
    TopNavigation_viewer$key
  >(TopNavigation_viewer, viewer);

  const organizationData: Organization[] = useMemo(() => {
    return (
      data?.organizations.edges?.map((edge: any) => ({
        label: edge.node.label,
        value: edge.node.name,
        imgSrc: edge.node.avatarUrl,
      })) ?? []
    );
  }, [data?.organizations.edges]);

  // console.log('data', data);

  const [showOrgnizationList, setShowOrgnizationList] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  const toggleShowOrganizationList = () => {
    setShowOrgnizationList(!showOrgnizationList);
  };
  const handleOrganizationSelect = (org: any) => {
    setSelectedOrganization(org);
    setShowOrgnizationList(false);
  };
  const handleBackdropClick = () => {
    setShowOrgnizationList(false);
  };

  const handleLoadMoreOrganizations = useCallback(() => {
    if (!hasNext || isLoadingNext) {
      console.log('completelLoaded', data.organizations.edges);
      return;
    }
    loadNext(loadedItem);
    console.log('loaded!!!!!!!!!!!!!!!!', data.organizations.edges);
  }, [loadNext, hasNext, isLoadingNext]);
  return (
    <x.div alignItems="center">
      <Link href="/home">
        <x.div cursor="pointer" w="80%" m="auto">
          <Logo w="100%" />
        </x.div>
      </Link>
      {showOrgnizationList && <Backdrop onClick={handleBackdropClick} />}
      {organizationData.length > 0 &&
        (!showOrgnizationList ? (
          <x.div
            backgroundColor="gray-200"
            p="0.6rem"
            // borderRadius={
            //   teamData.length === 0 || !selectedOrganization
            //     ? ' 0.6rem'
            //     : '0.6rem 0.6rem 0 0'
            // }
            borderRadius={' 0.6rem'}
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
              <x.div
                position="absolute"
                right="5px"
                color="gray-50"
                pt="0.3rem"
              >
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
                isLoading={isLoadingNext}
                onScroll={handleLoadMoreOrganizations}
              />
            </x.div>
          </x.div>
        ))}

      {data.organizations.edges?.map((edge, index) => (
        <SidebarTeams
          sidebarTeamsRef={edge?.node}
          loadedItem={loadedItem}
          selectedOrganization={selectedOrganization}
          key={index}
        />
      ))}
    </x.div>
  );
};
