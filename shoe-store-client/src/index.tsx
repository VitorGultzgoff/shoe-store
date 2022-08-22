// Libs
import React from "react";
import ReactDOM from "react-dom/client";
import { ActionCableProvider } from "react-actioncable-provider";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { ThemeProvider } from "@mui/styles";
import { ScopedCssBaseline } from "@mui/material";

// Constants
import { ENV_URLS } from "./constants/config";
import { theme } from "./theme";

// Style
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const link = createHttpLink({
  uri: ENV_URLS.GRAPHQL_SERVER,
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

console.log("theme in app = ", theme);

root.render(
  <React.StrictMode>
    <ActionCableProvider url={ENV_URLS.ACTION_CABLE_SERVER}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <ScopedCssBaseline>
            <App />
          </ScopedCssBaseline>
        </ThemeProvider>
      </ApolloProvider>
    </ActionCableProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
