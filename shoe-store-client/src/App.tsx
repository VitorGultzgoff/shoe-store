// Libs
import React from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
// import { useQuery } from "@apollo/client";

// // GraphQL
// import { GET_ALL_STORES } from "./graphql/queries";

// Components
import Dashboard from "./components/Dashboard";

function App() {
  // const { loading, error, data, fetchMore } = useQuery(GET_ALL_STORES);
  // console.log("error = ", error);
  // console.log("data = ", data);
  return (
    <ActionCableConsumer channel="DataBridgeChannel">
      <div className="App">
        <Dashboard />
      </div>
    </ActionCableConsumer>
  );
}

export default App;
