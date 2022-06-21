import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App'
import './assets/css/index.css'
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./config/apollo";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={ apolloClient }>
            <App/>
        </ApolloProvider>
    </React.StrictMode>
)
