import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plates from "./pages/Plates";
import Episodes from "./pages/Episodes";
import Cars from "./pages/Cars";

import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/autos" element={<Cars />} />
          <Route path="/episoden" element={<Episodes />} />
          <Route path="/" element={<Plates />} />
        </Routes>
      </Router>
    </>
  );
}
