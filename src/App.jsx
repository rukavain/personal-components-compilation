import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Sidebar from "./assets/components/Sidebar.jsx";
import Employees from "./assets/pages/Employees.jsx";
import Library from "./assets/pages/Library.jsx";
import Performance from "./assets/pages/Performance.jsx";
import QuickLinks from "./assets/pages/QuickLinks.jsx";
import Requests from "./assets/pages/Requests.jsx";
import Training from "./assets/pages/Training.jsx";

export default function App() {
  return (
    <>
      {" "}
      <Router>
        {" "}
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/library" element={<Library />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/quicklinks" element={<QuickLinks />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/training" element={<Training />} />
        </Routes>
      </Router>
    </>
  );
}
