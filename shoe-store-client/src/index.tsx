// Libs
import React from "react";
import ReactDOM from "react-dom/client";
import { ActionCableProvider } from "react-actioncable-provider";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Constants
import { ENV_URLS } from "./constants/config";

// Style
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ActionCableProvider url={ENV_URLS.ACTION_CABLE_SERVER}>
      <App />
    </ActionCableProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
