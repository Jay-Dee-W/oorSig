import React from 'react';
import { graphql } from 'relay-runtime';
import { useFragment } from 'react-relay';

import type { Members_member$key } from '@relay/__generated__/Members_member.graphql';

type MemberProps = {
  member: Members_member$key;
};

export function Member(props: MemberProps) {
  const data = useFragment(
    graphql`
      fragment Members_member on User {
        login
        avatarUrl
      }
    `,
    props.member,
  );

  return (
    <div>
      <p>{data.login}</p>

    </div>
  );
}
