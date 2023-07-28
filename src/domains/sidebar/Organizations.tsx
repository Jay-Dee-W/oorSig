import React, { useState, useCallback, useMemo } from 'react';
import { MdClose, MdExpandMore } from 'react-icons/md';
import { graphql, usePaginationFragment } from 'react-relay';
import { x } from '@xstyled/emotion';
import { Organizations_viewer$key } from '@relay/__generated__/Organizations_viewer.graphql';
import { OrganizationsRefetchQuery } from '@relay/__generated__/OrganizationsRefetchQuery.graphql';
import { Teams_viewer$key } from '@relay/__generated__/Teams_viewer.graphql';
import { Backdrop, Typography, SearchableList } from '@atoms/index';
import { Teams } from './Teams';
interface OrganizationsProps {
  OrganizationsRef: Organizations_viewer$key;
  loadedItem: number;
}
interface Organization {
  label: string;
  value: string;
  imgSrc: string;
}

const Organizations_viewer = graphql`
  fragment Organizations_viewer on User
  @refetchable(queryName: "OrganizationsRefetchQuery")
  @argumentDefinitions(
    organizationsFirst: { type: "Int!" }
    organizationsCursor: { type: "String" }
    teamsFirst: { type: "Int!" }
    teamsCursor: { type: "String" }
  ) {
    organizations(first: $organizationsFirst, after: $organizationsCursor)
      @connection(key: "Organizations_organizations") {
      edges {
        node {
          name
          label: name
          avatarUrl
          ...Teams_viewer
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

export const Organizations: React.FC<OrganizationsProps> = ({
  OrganizationsRef,
  loadedItem,
}) => {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    OrganizationsRefetchQuery,
    Organizations_viewer$key
  >(Organizations_viewer, OrganizationsRef);

  const organizationData: Organization[] = useMemo(() => {
    return (
      data?.organizations.edges?.map((edge: any) => ({
        label: edge.node.label,
        value: edge.node.name,
        imgSrc: edge.node.avatarUrl,
      })) ?? []
    );
  }, [data?.organizations.edges]);

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
    if (!hasNext || isLoadingNext) return;
    loadNext(loadedItem);
  }, [loadNext, hasNext, isLoadingNext]);
  return (
    <x.div alignItems="center">
      {showOrgnizationList && <Backdrop onClick={handleBackdropClick} />}
      {organizationData.length > 0 &&
        (!showOrgnizationList ? (
          <x.div
            backgroundColor="gray-200"
            p="0.6rem"
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
        <Teams
          TeamsRef={edge?.node as Teams_viewer$key}
          loadedItem={loadedItem}
          selectedOrganization={selectedOrganization}
          key={index}
        />
      ))}
    </x.div>
  );
};
