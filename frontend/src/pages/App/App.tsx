import './App.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import {useQuery} from "@apollo/client";
import categories from "../../queries/categories.query";
import Spinner from "../../components/Spinner/Spinner";
import FactTabs from "../../components/Jokes/FactTabs";

function App() {

    const factCategories = useQuery<{ categories: string[] }>(categories)

    return (
        <div>
            <Header/>
            <main className="App-main">
                <div className="pb-10 flex justify-end">
                    <SearchBar className="w-full sm:w-3/5"/>
                </div>
                {
                    factCategories.loading ?
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
