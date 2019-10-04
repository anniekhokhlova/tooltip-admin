import React from 'react';
import './App.css';
import { Main } from './views/Main';
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from './Apollo/client';

function App() {
  return (
    <div className="App">
        <ApolloProvider client={client}>
            <Main/>
        </ApolloProvider>
    </div>
  )
}

export default App;
