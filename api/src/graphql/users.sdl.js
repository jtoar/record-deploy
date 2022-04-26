export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
  }

  type Query {
    users: [User!]! @requireAuth
  }
`
