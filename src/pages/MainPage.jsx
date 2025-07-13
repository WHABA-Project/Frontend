import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import searchBackground from "../assets/search.jpg";
import MapCanvas from "../components/MapCanvas";

const MainPage = () => {
  const [selectedRegion, setSelectedRegion] = useState(null); // ✅ 선택된 지역 상태

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-0"></div>
      </div>

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

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">지도로 보기</h2>
        <MapCanvas onRegionClick={setSelectedRegion} />

        {/* ✅ 지역 클릭 시 설명 표시 */}
        {selectedRegion && (
          <div className="mt-8 bg-white p-6 rounded-xl shadow text-gray-800 border border-gray-200">
            <h3 className="text-lg font-bold mb-2">{selectedRegion}</h3>
            <p className="text-sm">
              {selectedRegion} 지역은 다양한 문화와 여행지가 있는 곳으로,
              가이드를 통해 특별한 경험을 만들어보세요.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
