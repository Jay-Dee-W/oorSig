import React, { useCallback, useMemo } from 'react';
import { x } from '@xstyled/emotion';
import { Button } from '@atoms/Button';
import { StatusBadge } from '@atoms/StatusBadge';
import { Table } from '@atoms/Table';
import { Organizations_viewer } from '@domains/Organiztions/Organizations';
import { Organizations_viewer$key } from '@relay/__generated__/Organizations_viewer.graphql';
import { OrganizationsRefetchQuery } from '@relay/__generated__/OrganizationsRefetchQuery.graphql';
import { usePaginationFragment } from 'react-relay';

interface HomeTableProps {
  HomeTableRef: Organizations_viewer$key;
  loadedItem: number;
}

interface Organization {
  name: string;
  image: string;
  teams: number;
  repositories: number;
  administer: boolean;
  action: boolean;
}

const tableColumns = [
  {
    key: 'image',
    style: {
      paddingLeft: '0.8rem',
    },
    header: '',
    render: (value: string) => (
      <x.img src={value} alt="Image" w="2rem" h="2rem" />
    ),
  },
  { key: 'name', header: 'Name' },
  { key: 'teams', header: 'Teams' },
  { key: 'repositories', header: 'Repositories' },
  {
    key: 'administer',
    header: 'Administer',
    render: (value: boolean) => <StatusBadge size="sm" isActive={value} />,
  },
  {
    key: 'action',
    header: '',
    style: {
      textAlign: 'right' as 'right',
    },
    render: (value: boolean) => (
      <Button variant="secondary">{value ? 'Open' : 'Close'}</Button>
    ),
  },
];

export const HomeTable: React.FC<HomeTableProps> = ({
  HomeTableRef,
  loadedItem,
}) => {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    OrganizationsRefetchQuery,
    Organizations_viewer$key
  >(Organizations_viewer, HomeTableRef);

  const organizationData: Organization[] = useMemo(() => {
    return (
      data?.organizations.edges?.map((edge: any) => ({
        name: edge.node.name,
        image: edge.node.avatarUrl,
        teams: edge.node.teamCount.totalCount,
        repositories: edge.node.repositories.totalCount,
        administer: edge.node.viewerCanAdminister,
        action: edge.node.viewerCanCreateRepositories,
      })) ?? []
    );
  }, [data?.organizations.edges]);

  const loadMoreOrganizations = useCallback(() => {
    if (!hasNext || isLoadingNext) return;
    loadNext(loadedItem);
  }, [loadNext, hasNext, isLoadingNext, loadedItem]);

  return (
    <>
      <Table
        columns={tableColumns}
        data={organizationData}
        paginate={loadMoreOrganizations}
        numberOfRows={loadedItem}
        hasNext={hasNext}
      />
    </>
  );
};
