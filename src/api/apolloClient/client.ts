import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.bitquery.io/", // Bitquery GraphQL API endpoint
  headers: {
    "X-API-KEY": import.meta.env.VITE_APP_BITQUERY_API_KEY, // Replace with your actual API key
  },
  cache: new InMemoryCache(),
});

export default client;
