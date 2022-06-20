import {Arg, Query, Resolver} from "type-graphql";
import Joke from "../models/joke.model";

const axios = require('axios');
const config = require('config');

@Resolver()
export class JokesResolver {

    baseUrl = `${config.get('api')}/jokes`

    @Query(() => Joke)
    async randomJoke() {
        return (await axios.get(`${this.baseUrl}/random`)).data
    }

    @Query(() => Joke)
    async randomJokeWithCategory(@Arg('category') category: string) {
        return (await axios.get(`${this.baseUrl}/random?category=${category}`)).data
    }

    @Query(() => [Joke!]!)
    async search(@Arg('q') query: string) {
        return (await axios.get(`${this.baseUrl}/search?query=${query}`)).data.result
    }
}
