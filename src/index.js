import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazI3czk4bmV0dm53MDk5NHN2bzg3bjI1IiwiaWF0IjoxNTcyMTEwNjUwfQ.M4R_L4pf53E-V9YBWj3hf7nS3j1Ao9ph1Rchk17EVDM"
  }
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root')
)
serviceWorker.unregister();