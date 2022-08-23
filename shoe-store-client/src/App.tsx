// Libs
import React from "react";
import { Route, Routes } from "react-router-dom";

// Layouts
import { ApplicationLayout } from "layouts/ApplicationLayout/ApplicationLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import { Products } from "pages/Products";
import { Stores } from "pages/Stores";
import { StoreDetails } from "pages/StoreDetails";

function App() {
  return (
    <ApplicationLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="stores" element={<Stores />} />
        <Route path="stores/:id" element={<StoreDetails />} />
        <Route path="models" element={<Products />} />
      </Routes>
    </ApplicationLayout>
  );
}

export default App;
