import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuidesPage from "./pages/Guides";
import TravelersPage from "./pages/Travelers";
import RegisterPage from "./pages/RegisterSelect";
import GuideRegister from "./pages/GuideRegister";
import TravelerRegister from "./pages/TravelerRegister1";
import TravelerRegister2 from "./pages/TravelerRegister2";
import Login from "./pages/login";
import FindId from "./pages/FindId";
import FindPw from "./pages/FindPw";
import RequestList from "./pages/RequestList";
import GuideRequestList from "./pages/GuideRequestList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw />} />
        <Route path="/travelers" element={<TravelersPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/guideregister" element={<GuideRegister />} />
        <Route path="/travelerregister" element={<TravelerRegister />} />
        <Route path="/travelerregister2" element={<TravelerRegister2 />} />
        <Route path="/RequestList" element={<RequestList />} />
        <Route path="/GuideRequestList" element={<GuideRequestList />} />
      </Routes>
    </Router>
  );
}

export default App;
