import './App.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import {useQuery} from "@apollo/client";
import categories from "../../queries/categories.query";
import random_joke from "../../queries/random_joke.query";
import Card from "../../components/Jokes/Card";
import Joke from "../../models/Joke";
import Spinner from "../../components/Spinner/Spinner";
import FactTabs from "../../components/Jokes/FactTabs";

function App() {

    const factCategories = useQuery<{ categories: string[] }>(categories)
    const randomJoke = useQuery<{ randomJoke: Joke }>(random_joke)

    return (
        <div>
            <Header/>
            <main className="App-main">
                <div className="pb-10 flex justify-end">
                    <SearchBar className="w-full sm:w-3/5"/>
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
