import SearchBar from "../../components/SearchBar/SearchBar";
import {useLazyQuery, useQuery} from "@apollo/client";
import categories from "../../queries/categories.query";
import random_joke from "../../queries/random_joke.query";
import search_joke from "../../queries/search.query";
import Card from "../../components/Jokes/Card";
import Joke from "../../models/Joke";
import Spinner from "../../components/Spinner/Spinner";
import FactTabs from "../../components/Jokes/FactTabs";
import {useNavigate} from "react-router-dom";
import home_page_query from "../../queries/home_page.query";
import HomePageQueryResponse from "../../models/HomePageQueryResponse";

function Home() {
    const navigate = useNavigate()
    const initialData = useQuery<HomePageQueryResponse>(home_page_query, { variables: { category: 'animal' } });

    const [searchJoke] = useLazyQuery<{ search: Joke[] }>(search_joke, {
        fetchPolicy: 'network-only', // Used for first execution
        nextFetchPolicy: 'cache-first', // Used for subsequent executions
    });

    const onUserSearch = (searchTerm: string) => {
        searchJoke({ variables: { q: searchTerm } }).then(res => {
            const results = res.data?.search
            navigate('/search', { state: { results } })
        })
     }

    return (
        <>
            <div className="pb-10 flex justify-end">
                <SearchBar className="w-full sm:w-3/5" onClick={onUserSearch}/>
            </div>
            {
                initialData.loading ? null :
                    <div className="py-5">
                        <Card title="Did you know..."
                              content={initialData.data?.randomJoke?.value!!}
                              footer={initialData.data?.randomJoke?.created_at!!}
                        />
                    </div>
            }
            {
                initialData.loading ?
                    <div className="flex justify-center items-center grow"><Spinner/></div>
                    :
                    <FactTabs tabs={initialData.data?.categories!!}/>
            }
        </>
    )
}

export default Home
