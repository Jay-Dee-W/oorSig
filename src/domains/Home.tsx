import React from 'react';

import { MembersList } from '@oorsig/domains/Memebers/MembersList';
import { homeQuery$data } from '@oorsig/relay/__generated__/homeQuery.graphql';

export const Home:React.FC<homeQuery$data> = ({viewer}) => {

  const repos = viewer?.organization?.team?.repositories?.nodes?.filter((repo) => ( !repo?.isArchived )) || [];

  return (
    <div className='App'>
      <h1>repos</h1>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Open PRs</th>
            <th>Closed PRs</th>
          </tr>
        </thead>
        <tbody>
          {repos.map( (repo) => (
            <tr key={repo?.id}>
            <td>{repo?.name}</td>
            <td>{repo?.openPRs?.nodes?.length}</td>
            <td>{repo?.ClosedPRs?.nodes?.length}</td>
          </tr>
          ))}
        </tbody>
      </table>
        <MembersList members={viewer?.organization?.team } />
    </div>
  );
}
