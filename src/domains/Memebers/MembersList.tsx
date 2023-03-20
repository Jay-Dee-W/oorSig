import React from 'react';
import { graphql } from 'relay-runtime';
import type { MembersList_members$key } from '@github/relay/__generated__/MembersList_members.graphql';
import { useFragment } from 'react-relay';
import { Member } from './Members';

type MembersListProps = {
    members: MembersList_members$key;
  };
  
export const  MembersList:React.FC<MembersListProps> = ( props ) => {


  console.log("props", props)

    const data = useFragment(
      graphql`
        fragment MembersList_members on Team {
          members(first: 20) {
            edges {
              node {
                id
                ...Members_member
              }
            }
          }
        }
      `,
      props.members,
    );

    console.log("data", data)
  
    const members = data?.members?.edges?.map((edge) => edge?.node);
  
    return (
      <div>
        <h2>Members List</h2>
        <ul>
          {members?.map((member) => (
            <li key={member?.id}>
              <Member member={member} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

