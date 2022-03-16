import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Plates from "./pages/Plates";
import Episodes from "./pages/Episodes";
import Cars from "./pages/Cars";

import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/autos" element={<Cars />} />
          <Route path="/episoden" element={<Episodes />} />
          <Route path="/" element={<Plates />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
