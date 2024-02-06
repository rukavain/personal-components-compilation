import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Sidebar from "./assets/components/Sidebar.jsx";

export default function App() {
  return (
    <>
      {" "}
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}
