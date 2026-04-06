import { useState } from "react";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Pricing from "./pages/Pricing";
import Company from "./pages/Company";

function App() {
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <Dashboard />;
      case "Transactions":
        return <Transactions />;
      case "Analytics":
        return <Analytics />;
      case "Pricing":
        return <Pricing />;
      case "Company":
        return <Company />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <Navbar currentPage={page} setPage={setPage} />
      {renderPage()}
    </>
  );
}

export default App;