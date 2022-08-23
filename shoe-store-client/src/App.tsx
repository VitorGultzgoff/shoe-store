// Libs
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActionCableConsumer } from "react-actioncable-provider";
import { useLocation } from "react-router-dom";

// Hooks
import { useDashboard } from "hooks/useDashboard";
import { useProducts } from "hooks/useProducts";
import { useStores } from "hooks/useStores";

// Layouts
import { ApplicationLayout } from "layouts/ApplicationLayout/ApplicationLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import { Products } from "pages/Products";
import { Stores } from "pages/Stores";

function App() {
  const { retrieveDashboardData } = useDashboard();
  const { retrieveProductsData } = useProducts();
  const { retrieveStoresData } = useStores();
  const { pathname } = useLocation();

  const syncData = () => {
    switch (pathname) {
      case "/stores":
        retrieveStoresData({});
        break;
      case "/models":
        retrieveProductsData({});
        break;
      case "/":
      default:
        retrieveDashboardData({});
        break;
    }
  };
  return (
    <ApplicationLayout>
      <ActionCableConsumer
        channel="DataBridgeChannel"
        onReceived={() => syncData()}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="stores" element={<Stores />} />
          <Route path="models" element={<Products />} />
        </Routes>
      </ActionCableConsumer>
    </ApplicationLayout>
  );
}

export default App;
