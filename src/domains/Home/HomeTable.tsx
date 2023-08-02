import React from 'react';
import { x } from '@xstyled/emotion';
import { Button } from '@atoms/Button';
import { StatusBadge } from '@atoms/StatusBadge';
import { Table } from '@atoms/Table';
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
    render: (value: string) => <Button variant="secondary">{value}</Button>,
  },
];
const tableData = [
  {
    image: '/team.png',
    name: 'Gitsart HQ',
    teams: 25,
    repositories: 100,
    administer: true,
    action: 'Open',
  },
  {
    image: '/team.png',
    name: 'Meta',
    teams: 30,
    repositories: 50,
    administer: false,
    action: 'Close',
  },
];

export const HomeTable = () => {
  return (
    <>
      <Table columns={tableColumns} data={tableData} />
    </>
  );
};
