import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
<<<<<<< HEAD
import { loadQuery } from 'react-relay';
import { graphql } from 'relay-runtime';
import { usePreloadedQuery } from 'react-relay/hooks';

import { Home } from "@domains/Home"
import { environment } from '@relay/environment';
import { homeQuery } from '@relay/__generated__/homeQuery.graphql'

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

=======
import { Home } from '../domains/Home';
>>>>>>> main

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
