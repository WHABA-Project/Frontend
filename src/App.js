import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
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
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/guideregister" element={<GuideRegister />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/Travelers" element={<TravelersPage />} />
        <Route path="/travelerregister1" element={<TravelerRegister />} />
        <Route path="/travelerregister2" element={<TravelerRegister2 />} />
        <Route path="/RequestList" element={<RequestList />} />
        <Route path="/GuideRequestList" element={<GuideRequestList />} />
        <Route path="/RegisterSelect" element={<RegisterPage />} />
        <Route path="/MyPage" element={<MyPage />} />

        {/* ✅ 추가된 로그인/찾기 라우팅 */}
        <Route path="/login" element={<Login />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
      </Routes>
    </Router>
  );
}

export default App;
