import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client';


const networkInterface = createNetworkInterface({
    uri: 'http://localhost:3333/graphql'
})

const client = new ApolloClient({
    networkInterface: networkInterface
})


ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
)
