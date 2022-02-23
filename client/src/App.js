import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./pages/Map";
import Episodes from "./pages/Episodes";

import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/episoden" element={<Episodes />} />
          <Route path="/" element={<Map />} />
        </Routes>
      </Router>
    </>
  );
}
