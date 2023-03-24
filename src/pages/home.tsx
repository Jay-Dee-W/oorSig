import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { loadQuery } from 'react-relay';
import { graphql } from 'relay-runtime';
import { usePreloadedQuery } from 'react-relay/hooks';

import { Home } from "@oorsig/domains/Home"
import { environment } from '@oorsig/relay/environment';
import { homeQuery } from '@oorsig/relay/__generated__/homeQuery.graphql'



const assignedToFragment = graphql`
fragment homeAssignedTo on PullRequest {
  assignees(first: 1) {
    edges {
      node {
        login
      }
    }
  }
}
`;

const TeamHustleQuery = graphql`
query homeQuery {
  viewer {
    login
    organization(login: "GitstartHQ") {
      team(slug: "team-hustle") {
        ...MembersList_members
        repositories(first: 100) {
          nodes {
            id
            isArchived
            name
            openPRs: pullRequests(first: 100, states: OPEN) {
              nodes {
                url
                createdAt
                title
                ...homeAssignedTo
              }
            }
            ClosedPRs: pullRequests(first: 100, states: [CLOSED, MERGED]) {
              nodes {
                url
                createdAt
                title
                ...homeAssignedTo
              }
            }
          }
        }
      }
    }
  }
}
`;

const preloadedQuery = loadQuery<homeQuery>(environment, TeamHustleQuery, {
  /* query variables */
});


const HomePage: NextPage = () => {

  const data = usePreloadedQuery(TeamHustleQuery, preloadedQuery) ;

  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      <Home viewer={data.viewer}  />
    </>
  );
};

export default HomePage;
