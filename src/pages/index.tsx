import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
// import { loadQuery } from 'react-relay';
// import { graphql, OperationType } from 'relay-runtime';
import { PreloadedQuery, RelayEnvironmentProvider, usePreloadedQuery } from 'react-relay/hooks';
import { environment } from '@github/relay/environment';
import { Auth } from '@github/domains/Auth';

// const RepositoryNameQuery = graphql`
//   query pagesQuery {
//     repository(owner: "facebook", name: "relay") {
//       name
//     }
//   }
// `;

// async function fetchGraphQL(text: any, variables: any) {
//   const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

//   // Fetch data from GitHub's GraphQL API:
//   const response = await fetch('https://api.github.com/graphql', {
//     method: 'POST',
//     headers: {
//       Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: text,
//       variables,
//     }),
//   });

//   // Get the response as JSON
//   return await response.json();
// }

// const preloadedQuery = loadQuery(environment, RepositoryNameQuery, {
//   /* query variables */
// });

// function App(props: { preloadedQuery: PreloadedQuery<OperationType, Record<string, unknown>>; }) {
//   const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);
//   console.log(data)

//   return (
//     <div className="App">
//     </div>
//   );
// }

const AuthPage: NextPage = () => {
  
 

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Head>
        <title>Login | GitStart</title>
      </Head>
      <Auth />
      </RelayEnvironmentProvider>
  );
};

export default AuthPage;
