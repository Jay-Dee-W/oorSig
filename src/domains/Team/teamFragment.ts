import { graphql } from 'relay-runtime';

export const teamFragment = graphql`
fragment teamFragment on Organization {
  team(slug: "team-hustle") {
    name
    members(first: 100) {
      edges {
        node {
          id
          name
          email
        }
      }
    }
  }
}
`;
