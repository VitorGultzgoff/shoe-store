// Libs
import React from "react";
import { ActionCableConsumer } from "react-actioncable-provider";

function App() {
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
