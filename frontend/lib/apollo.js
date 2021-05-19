import ApolloClient from "apollo-boost";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

export const client = new ApolloClient({
  uri: `${API_URL}/graphql`, // Server URL (must be absolute)
});

