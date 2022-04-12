import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Plates from "./pages/Plates";
import Episodes from "./pages/Episodes";
import Messungen from "./pages/Messungen";
import Charts from "./pages/Charts";
import ScrollArrow from "./components/ScrollArrow";

// import "./App.css";

export  function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/charts" element={<Charts />} />
            <Route path="/autos" element={<Messungen />} />
            <Route path="/episoden" element={<Episodes />} />
            <Route path="/" element={<Plates />} />
          </Routes>
        <Footer />
        <ScrollArrow />
      </Router>
    </>
  );
}
