import './App.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import TabBar from "../../components/TabBar/TabBar";

function App() {
    return (
        <div>
            <Header/>
            <main className="App-main">
                <div className="pb-10 flex justify-end">
                    <SearchBar className="w-full sm:w-3/5"/>
                </div>
                <TabBar/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
