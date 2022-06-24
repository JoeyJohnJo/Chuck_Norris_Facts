import Joke from "./Joke";

type HomePageQueryResponse =  {
    categories?: Array<string>
    randomJoke: Joke
    randomJokeWithCategory: Joke
}

export default HomePageQueryResponse;
