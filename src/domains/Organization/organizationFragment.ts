import { graphql } from 'relay-runtime';

export const organizationFragment = graphql`
fragment organizationFragment on User {
  organization(login:"GitStartHQ") {
    ... on Organization {
      name
      ...teamFragment
    }
  }
}
`;