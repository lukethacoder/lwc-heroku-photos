import ApolloClient, { InMemoryCache } from 'apollo-boost';

const URI = 'https://hasura-lwc-photos-db.herokuapp.com/v1/graphql';
export const client = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache()
});
