import React from "react";
import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function App() {

    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/search' element={<SearchResults/>}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    )
}

export default App
