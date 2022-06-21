import {useLocation} from 'react-router-dom';
import Joke from "../../../../backend/src/models/joke.model";

interface SearchResultsState {
    results: Joke[]
}

function SearchResults() {

    const location = useLocation();
    const { results } = location.state as SearchResultsState;

    return (
        <div>
            Search Results
            <hr/>
            {results?.map(joke => <div>{joke.value}</div>)}
        </div>
    )
}

export default SearchResults
