import "reflect-metadata"
import {buildSchema} from "type-graphql";
import path = require("path");
import {ApolloServer} from "apollo-server";

const config = require('config');


async function main() {
    const schema = await buildSchema({
        resolvers: [__dirname + "/**/*.resolver.ts"],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    })

    const server = new ApolloServer({schema})
    const {url} = await server.listen()
    console.log(`Server is running, GraphQL Playground available at ${url}`)
}

main().then(() => console.log(config.get('name')))
