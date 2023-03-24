import React from 'react';
import { graphql } from 'relay-runtime';
import type { Members_member$key } from '@github/relay/__generated__/Members_member.graphql';
import { useFragment } from 'react-relay';

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
    props.member
  );

  return (
    <div>
      <p>{data.login}</p>
    </div>
  );
}
