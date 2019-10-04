import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';


const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const cache = new InMemoryCache({ addTypename: false });

/*
    For using real server use HttpLink with needed config from 'apollo-link-http' npm package:

    const link = new HttpLink()
*/

const link = new SchemaLink({ schema: executableSchema });

export const client = new ApolloClient({
    cache,
    link
});
