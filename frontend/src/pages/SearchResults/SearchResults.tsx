import {useLocation, useNavigate} from 'react-router-dom';
import { FixedSizeList } from 'react-window';
import React, {FC, PureComponent} from "react";
import Card from "../../components/Jokes/Card";
import Joke from "../../models/Joke";

interface SearchResultsState {
    results: Joke[]
}

function SearchResults() {

    const location = useLocation();
    const navigate = useNavigate();
    const { results } = location.state as SearchResultsState;

    const Row: FC<{ index: number, style: any}> = props => (
        <div style={props.style}>
            <Card title={results[props.index].categories?.at(0) ? results[props.index].categories?.at(0)?.toUpperCase()!! : ""}
                  content={results[props.index].value}
                  footer={results[props.index].created_at}
            />
        </div>
    );

    return (
        <>
            <div className="flex justify-between py-2 items-center">
                <p>Search Results</p>

                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full text-base"
                        onClick={() => navigate('/')}>
                    Back
                </button>
            </div>
            <hr className="mb-2"/>
            <FixedSizeList
                height={700}
                width={"100%"}
                itemCount={results.length}
                itemSize={200}
            >
                {Row}
            </FixedSizeList>
        </>
    )
}

export default SearchResults
