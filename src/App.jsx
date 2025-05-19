import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterSelect";
import GuideRegister from "./pages/GuideRegister";
import TravelerRegister from "./pages/TravelerRegister1";
import TravelerRegister2 from "./pages/TravelerRegister2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/guideregister" element={<GuideRegister />} />
        <Route path="/travelerregister" element={<TravelerRegister />} />
        <Route path="/travelerregister2" element={<TravelerRegister2 />} />
      </Routes>
    </Router>
  );
}

export default App;