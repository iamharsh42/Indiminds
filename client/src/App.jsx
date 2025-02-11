import React from "react";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar / Dashboard */}
      <Dashboard />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 bg-gray-100">
        <Details />
        <Summary />
      </div>
    </div>
  );
}

export default App;
