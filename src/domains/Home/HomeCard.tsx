import React from 'react';
import { x } from '@xstyled/emotion';
import { Card } from '@atoms/Card';
import { Typography } from '@atoms/Typography';
import useMobileView from '@oorsig/hooks/useMobileView';
import { graphql, useFragment } from 'react-relay';
import { HomeCard_viewer$key } from '@relay/__generated__/HomeCard_viewer.graphql';

interface HomeCardProps {
  HomeCardRef: HomeCard_viewer$key;
}

const HomeCard_viewer = graphql`
  fragment HomeCard_viewer on User {
    organizations(first: 100) {
      totalCount
    }
    repositories(first: 100) {
      totalCount
    }
    OpenPR: pullRequests(first: 100, states: OPEN) {
      totalCount
    }
    closedPRs: pullRequests(first: 100, states: CLOSED) {
      totalCount
    }
    mergedPRs: pullRequests(first: 100, states: MERGED) {
      totalCount
    }
    contributionsCollection {
      totalIssueContributions
      totalCommitContributions
      totalRepositoryContributions
      totalPullRequestContributions
      totalPullRequestReviewContributions
    }
  }
`;

export const HomeCard: React.FC<HomeCardProps> = ({ HomeCardRef }) => {
  const data = useFragment<HomeCard_viewer$key>(HomeCard_viewer, HomeCardRef);

  const contributionsCollection = data.contributionsCollection;
  const totalCountContributions = Object.values(contributionsCollection).reduce(
    (sum, contribution) => sum + contribution,
    0
  );

  const userGithubStatistics = [
    {
      label: 'Merged PRs',
      value: data.mergedPRs.totalCount,
      bgColor: 'green-100',
      txtColor: 'green-400',
    },

    {
      label: 'My Repos',
      value: data.repositories.totalCount,
      bgColor: 'gray-200',
      txtColor: 'white',
    },
    {
      label: 'Open PRs',
      value: data.OpenPR.totalCount,
      bgColor: 'primary-100',
      txtColor: 'primary-400',
    },
    {
      label: 'Organizations',
      value: data.organizations.totalCount,
      bgColor: 'gray-200',
      txtColor: 'white',
    },
    {
      label: 'Closed PRs',
      value: data.closedPRs.totalCount,
      bgColor: 'red-100',
      txtColor: 'red-200',
    },
    {
      label: 'Contribution',
      value: totalCountContributions,
      bgColor: 'gray-200',
      txtColor: 'white',
    },
  ];
  const isMobileView = useMobileView();
  const sortGithubStatisticsForMobile = () => {
    const order = [0, 2, 4, 1, 3, 5];
    return order.map(index => userGithubStatistics[index]);
  };

  return (
    <>
      {isMobileView
        ? sortGithubStatisticsForMobile().map((item, index) => (
            <Card key={index} bg={item?.bgColor}>
              <x.p color={item?.txtColor} pb="0.5rem">
                {item?.label}
              </x.p>
              <Typography fontSize="4xl" color={item?.txtColor}>
                {item?.value}
              </Typography>
            </Card>
          ))
        : userGithubStatistics.map((item, index) => (
            <Card key={index} bg={item.bgColor}>
              <x.p color={item.txtColor} pb="0.5rem">
                {item.label}
              </x.p>
              <Typography fontSize="4xl" color={item.txtColor}>
                {item.value}
              </Typography>
            </Card>
          ))}
    </>
  );
};
