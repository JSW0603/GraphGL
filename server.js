import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import gql from 'graphql-tag';

"define the shape of the data that will be returned from the server"
const typeDefs = gql`
    type Query {
        text: String
        hello: String
        }
`;

const server = new ApolloServer({typeDefs});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`Server is running at ${url}`);