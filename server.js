import express from "express";
import apollo from 'apollo-server-express';
import dotenv from "dotenv";
import userTypes from "./graphql/types/user.js";
import userResolver from "./graphql/resolvers/user.js";

const { ApolloServer} = apollo

dotenv.config();



async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs: [userTypes],
        resolvers: [userResolver],
    });

    await server.start();

    const app = express();

    server.applyMiddleware({ app });
    await new Promise(resolve => app.listen({ port: process.env.PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${ process.env.PORT }${server.graphqlPath}`);

    return (server, app)
}

startApolloServer()