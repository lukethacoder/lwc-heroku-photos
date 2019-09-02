import ApolloClient from 'apollo-boost';

const URI = 'https://hasura-lwc-test.herokuapp.com/v1/graphql';
export const client = new ApolloClient({
    uri: URI
});
