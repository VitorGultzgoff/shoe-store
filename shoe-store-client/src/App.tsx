// Libs
import React from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import { useQuery } from "@apollo/client";

// GraphQL
import { GET_ALL_STORES } from "./graphql/queries";

function App() {
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_STORES);
  console.log("error = ", error);
  console.log("data = ", data);
  return (
    <ActionCableConsumer
      channel="DataBridgeChannel"
      onReceived={(response) => {
        console.log("response = ", response);
      }}
    >
      <div className="App">
        <h1>Shoe Store</h1>
      </div>
    </ActionCableConsumer>
  );
}

export default App;
