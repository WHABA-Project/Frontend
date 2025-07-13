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
import GuideDetail from "./pages/GuideDetail";
import TravelerDetail from "./pages/TravelerDetail";
import Wishlist from "./pages/Wishlist"; // ✅ 추가

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/guideregister" element={<GuideRegister />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/travelers" element={<TravelersPage />} />
        <Route path="/travelerregister" element={<TravelerRegister />} />
        <Route path="/travelerregister2" element={<TravelerRegister2 />} />
        <Route path="/requestlist" element={<RequestList />} />
        <Route path="/guiderequestlist" element={<GuideRequestList />} />
        <Route path="/registerselect" element={<RegisterPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/guide/:id" element={<GuideDetail />} />
        <Route path="/traveler/:id" element={<TravelerDetail />} />

        {/* 로그인 및 아이디/비밀번호 찾기 */}
        <Route path="/login" element={<Login />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />

        {/* ✅ Wishlist 페이지 추가 */}
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
