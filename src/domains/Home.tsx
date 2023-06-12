import { Typography } from '@oorsig/atoms';
import Card from '@oorsig/atoms/Card';
// import { LineChart } from '@oorsig/atoms/Chart';
import styled, { x } from '@xstyled/emotion';
import React from 'react';

const Table = styled(x.table)`
  width: 100%;
  border-collapse: collapse;
  font-size: base;
  border-radius: 0.2rem;
  overflow: hidden;
  thead {
    text-align: left;
    background-color: gray-300;
  }

  th,
  td {
    padding: 0.4rem;
    background-color: gray-300;
    border-bottom: 1px solid;
    border-color: gray-100;
  }

  th {
    background-color: gray-200;
  }
`;

export const Home: React.FC = () => {
  return (
    <x.div className="App">
      <x.div
        padding="1rem"
        backgroundColor="gray-300"
        display="flex"
        alignItems={'center'}
        borderBottom="1"
        borderBottomColor="gray-200"
      >
        <x.div flex="1">
          <Typography fontSize="2xl" fontWeight="bold">
            Dashboard
          </Typography>
          <Typography color="gray-50">Welcome to your dashboard</Typography>
        </x.div>
        <x.div>
          <x.select
            w="150"
            backgroundColor="transparent"
            border="1"
            borderColor="gray-50"
            p="2"
            color="white"
            borderRadius="0.2rem"
          >
            <option>Weekly</option>
            <option>Monthly</option>
          </x.select>
        </x.div>
      </x.div>

      <x.div p="1rem" backgroundColor="gray-300" w="100%">
        <x.div display="flex" mb="3" gap="2" alignItems="center">
          <Typography size="3xl">🤖</Typography>
          <Typography size="sm">
            Lorem ipsum dolor sit amet consectetur. Tellus pellentesque
            tincidunt <br /> id velit pellentesque. Est senectus fusce donec
            sed.
          </Typography>
        </x.div>

        <x.div display="flex">
          <x.div h="300" flex="1">
            {/* <LineChart /> */}
          </x.div>

          <x.div display="grid" gridTemplateColumns="2" col gap="5" maxW="340">
            <Card> Merged PRs </Card>
            <Card> Organizations </Card>
            <Card> Open PRs </Card>
            <Card> My Repos </Card>
            <Card> Closed PRs</Card>
            <Card> Contribution </Card>
          </x.div>
        </x.div>
      </x.div>

      <x.div maxW="1200" mx="auto" px="4">
        <Typography size="3xl" mt="4" mb="2">
          Organizations
        </Typography>

        <Table w="100%">
          <x.thead>
            <x.tr>
              <x.th w="20"></x.th>
              <x.th>Name</x.th>
              <x.th>Teams</x.th>
              <x.th>Repositories</x.th>
              <x.th>Administer</x.th>
              <x.th w="14"></x.th>
            </x.tr>
          </x.thead>
          <x.tbody>
            {[
              {
                avatar: 'https://avatars.githubusercontent.com/u/31163758?v=4',
                name: 'GitStart',
                teams: 2,
                repos: 4,
                admin: false,
              },
              {
                avatar:
                  'https://1000logos.net/wp-content/uploads/2021/10/Meta-Symbol.png',
                name: 'Mate',
                teams: 2,
                repos: 4,
                admin: false,
              },
              {
                avatar: 'https://avatars.githubusercontent.com/u/31163758?v=4',
                name: 'Mega GitStart',
                teams: 2,
                repos: 4,
                admin: false,
              },
              {
                avatar: 'https://avatars.githubusercontent.com/u/31163758?v=4',
                name: 'GitStart Plus',
                teams: 2,
                repos: 4,
                admin: false,
              },
            ].map((el, i) => (
              <x.tr key={i}>
                <x.td>
                  <x.img
                    backgroundColor="white"
                    src={el.avatar}
                    alt={'Main Logo'}
                    title={'Logo'}
                    h={'35'}
                    w={'35'}
                    borderRadius="0.4rem"
                    border="1"
                    borderColor="gray-50"
                  />
                </x.td>
                <x.td>{el.name}</x.td>
                <x.td>{el.teams}</x.td>
                <x.td>{el.repos}</x.td>
                <x.td>{el.admin ? 'Active' : 'Disabled'}</x.td>
                <x.td>
                  <x.button
                    p="2 4"
                    borderRadius="0.2rem"
                    backgroundColor={{ _: 'gray-100', hover: 'gray-50' }}
                    color={{ _: 'white' }}
                  >
                    Open
                  </x.button>
                </x.td>
              </x.tr>
            ))}
          </x.tbody>
        </Table>
      </x.div>
    </x.div>
  );
};
