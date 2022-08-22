// Libs
import React from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useQuery } from "@apollo/client";

// // GraphQL
// import { GET_ALL_STORES } from "./graphql/queries";

// Layouts
import { ApplicationLayout } from "layouts/ApplicationLayout/ApplicationLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import { Models } from "pages/Models";
import { Stores } from "pages/Stores";

function App() {
  // const { loading, error, data, fetchMore } = useQuery(GET_ALL_STORES);
  // console.log("error = ", error);
  // console.log("data = ", data);
  return (
    <ActionCableConsumer channel="DataBridgeChannel">
      <BrowserRouter>
        <ApplicationLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="stores" element={<Stores />} />
            <Route path="models" element={<Models />} />
          </Routes>
        </ApplicationLayout>
      </BrowserRouter>
    </ActionCableConsumer>
  );
}

export default App;
