import "./App.css";

import fetch from "cross-fetch";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${window.location.protocol}//${window.location.hostname}:1338/graphql`,
      fetch,
    }),
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
