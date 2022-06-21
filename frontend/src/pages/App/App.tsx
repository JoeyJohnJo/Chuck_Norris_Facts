import './App.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import {useLazyQuery, useQuery} from "@apollo/client";
import categories from "../../queries/categories.query";
import random_joke from "../../queries/random_joke.query";
import Card from "../../components/Jokes/Card";
import Joke from "../../models/Joke";
import Spinner from "../../components/Spinner/Spinner";
import FactTabs from "../../components/Jokes/FactTabs";
import joke_by_category from "../../queries/joke_by_category.query";

function App() {

    const factCategories = useQuery<{ categories: string[] }>(categories)
    const randomJoke = useQuery<{ randomJoke: Joke }>(random_joke)
    const [searchJoke, searchResults] = useLazyQuery<{ search: Joke[] }>(joke_by_category, {
        fetchPolicy: 'network-only', // Used for first execution
        nextFetchPolicy: 'cache-first', // Used for subsequent executions
    });

    const onUserSearch = (searchTerm: string) => {
        searchJoke({ variables: { q: searchTerm } }).then(r => {
            const results = searchResults.data?.search
        })
     }

    return (
        <div>
            <Header/>
            <main className="App-main">
                <div className="pb-10 flex justify-end">
                    <SearchBar className="w-full sm:w-3/5" onClick={onUserSearch}/>
                </div>
                    {
                        randomJoke.loading ? null :
                            <div className="py-5">
                                <Card title="Did you know..."
                                      content={randomJoke.data?.randomJoke?.value!!}
                                      footer={randomJoke.data?.randomJoke?.created_at!!}
                                />
                            </div>
                    }
                    {
                        factCategories.loading || randomJoke.loading ?
                            <div className="flex justify-center items-center grow"><Spinner/></div>
                            :
                            <FactTabs tabs={factCategories.data?.categories!!}/>
                    }
            </main>
            <Footer/>
        </div>
    )
}

export default App
