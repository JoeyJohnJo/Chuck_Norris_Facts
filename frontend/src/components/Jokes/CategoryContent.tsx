import React, {useEffect} from "react";
import Column from "../Column/Column";
import {useLazyQuery} from '@apollo/client';
import joke_by_category from "../../queries/joke_by_category.query";
import Spinner from "../Spinner/Spinner";
import Joke from "../../models/Joke";
import Card from "./Card";

import moment from 'moment';

const CategoryContent: React.FC<{ category: string }> = props => {

    const [getJoke, { loading, data }] = useLazyQuery<{ randomJokeWithCategory: Joke }>(joke_by_category, {
        variables: { category: props.category },
        fetchPolicy: 'network-only', // Used for first execution
        nextFetchPolicy: 'cache-first', // Used for subsequent executions
    });

    useEffect(() => { getJoke().then() }, [])

    const loadingNode = <div className="flex justify-center items-center grow"><Spinner/></div>;

    return (
        <Column>
            <div className="pb-10 flex justify-end">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => getJoke()}>
                    New Fact
                </button>
            </div>
            {
                loading ? loadingNode :
                    <Card
                        title={props.category.charAt(0).toUpperCase() + props.category.slice(1)}
                        content={data?.randomJokeWithCategory?.value!!}
                        footer={moment(data?.randomJokeWithCategory?.created_at!!).format('MMMM Do YYYY, h:mm:ss a')}
                    />
            }
        </Column>
    )
}

export default CategoryContent
