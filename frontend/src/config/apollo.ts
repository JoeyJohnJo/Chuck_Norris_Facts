import {ApolloClient, InMemoryCache} from "@apollo/client";

const serverUrl = import.meta.env.VITE_SERVER_URL

export const apolloClient = new ApolloClient({
    uri: serverUrl,
    cache: new InMemoryCache({}),
})
