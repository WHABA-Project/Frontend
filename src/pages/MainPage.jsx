import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import searchBackground from "../assets/search.jpg";
import MapCanvas from "../components/MapCanvas"; // ✅ 지도 컴포넌트 import

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* 탭 메뉴 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-0"></div>
      </div>

      {/* 배너 영역 */}
      <div
        className="w-full h-[420px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${searchBackground})`,
        }}
      >
        <div className="w-full max-w-4xl px-6">
          <h1 className="text-white text-3xl font-bold leading-relaxed mb-6 drop-shadow-md">
            떠나고 싶은 지역을
            <br />
            자유롭게 검색해보세요
          </h1>

          <div className="flex items-center bg-white/60 backdrop-blur-md rounded-full overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="원하는 키워드로 검색해보세요."
              className="flex-1 px-6 py-3 text-sm placeholder-gray-500 bg-transparent focus:outline-none"
            />
            <button className="bg-sky-400 hover:bg-sky-500 text-white text-sm font-medium px-6 py-2 rounded-full m-1">
              검색
            </button>
          </div>
        </div>
      </div>

      {/* 본문 + 지도 */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">지도로 보기</h2>
        <MapCanvas /> {/* ✅ 지도 컴포넌트 삽입 */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
