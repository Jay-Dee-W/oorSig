import React from 'react';
import styled, { x } from '@xstyled/emotion';
import { Dropdown } from '@atoms/Dropdown';
import { TopHeader } from '@atoms/TopHeader';
import { Typography } from '@atoms/Typography';
import useMobileView from '@oorsig/hooks/useMobileView';
import { HomeTable } from './HomeTable';
import { HomeLineChart } from './HomeLineChart';
import { HomeCard } from './HomeCard';
import { PreloadedQuery, usePreloadedQuery, graphql } from 'react-relay';
import { HomeQuery as HomeQueryType } from '@relay/__generated__/HomeQuery.graphql';

interface HomeProps {
  queryRef: PreloadedQuery<HomeQueryType>;
}

const dropDownOptions = [
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
];

export const HomeQuery = graphql`
  query HomeQuery {
    viewer {
      ...HomeCard_viewer
    }
  }
`;

export const Home: React.FC<HomeProps> = ({ queryRef }) => {
  const { viewer } = usePreloadedQuery(HomeQuery, queryRef);
  const isMobileView = useMobileView();

  return (
    <Container>
      <x.div className="App">
        <TopHeader title="Dashboard" subtitle="Welcome to your dashboard">
          <Dropdown options={dropDownOptions} placeholder="Weekly" />
        </TopHeader>
        <x.div p="1rem" className="main" backgroundColor="gray-300" w="100%">
          <x.div display="flex" mb="3" gap="2" alignItems="center">
            <Typography size="3xl">🤖</Typography>
            <Typography size="sm">
              Access and visualize all your Github metrics in one place with
              OorSig by GitStart.
              <br /> Export data for further analysis and optimize your
              productivity.
            </Typography>
          </x.div>
          <x.div
            display="flex"
            flexWrap={isMobileView ? 'wrap' : 'nowrap'}
            w="100%"
            gap="1rem"
          >
            <x.div flex={isMobileView ? '100%' : '65%'} className="lineChart">
              <HomeLineChart />
            </x.div>
            <x.div
              flex={isMobileView ? '100%' : '35%'}
              display="grid"
              gridTemplateColumns={
                isMobileView
                  ? 'repeat(3, minmax(0, 1fr))'
                  : 'repeat(2, minmax(0, 1fr))'
              }
              flexDirection="column"
              gap="3"
              maxHeight={400}
              className="wordWrap"
            >
              <HomeCard HomeCardRef={viewer} />
            </x.div>
          </x.div>
        </x.div>
        <x.div p="1rem">
          <Typography size="3xl" mb="2">
            Organizations
          </Typography>
          <x.div overflowX="auto" mb="3rem">
            <HomeTable />
          </x.div>
        </x.div>
      </x.div>
    </Container>
  );
};

const Container = styled(x.div)`
  .main {
    box-sizing: border-box;
  }
  .wordWrap {
    word-wrap: break-word;
  }
  @media (max-width: ${props => props.theme.breakpoints['lg']}px) {
    .lineChart {
      margin-bottom: 2rem;
      min-width: 98%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints['md']}px) {
    .lineChart {
      height: auto;
      min-width: 96%;
    }
  }
`;
