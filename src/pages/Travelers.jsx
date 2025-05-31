import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FilterSidebar from "../components/FilterSidebar";
import Footer from "../components/Footer";

const Travelers = () => {
  // 예시용 데이터
  const travelers = [
    {
      id: 1,
      nickname: "관광객 1",
      date: "2025.05.20",
      message: "Hello, I'm from Australia",
      tags: ["알뜰한", "계획적인"],
      level: "한국어 수준: 중상",
      username: "@axoxiii__",
    },
    {
      id: 2,
      nickname: "관광객 1",
      date: "2025.05.20",
      message: "Hello, I'm from Australia",
      tags: ["알뜰한", "계획적인"],
      level: "한국어 수준: 중상",
      username: "@axoxiii__",
    },
    {
      id: 3,
      nickname: "관광객 1",
      date: "2025.05.20",
      message: "Hello, I'm from Australia",
      tags: ["알뜰한", "계획적인"],
      level: "한국어 수준: 중상",
      username: "@axoxiii__",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />

      <div className="flex flex-1 justify-center bg-white">
        <div className="max-w-7xl w-full flex gap-6 px-6 py-10 items-start">
          {/* 사이드 필터 */}
          <div className="w-1/5">
            <FilterSidebar />
          </div>

          {/* 관광객 리스트 */}
          <div className="w-4/5 flex flex-col gap-6">
            {travelers.map((traveler) => (
              <div
                key={traveler.id}
                className="flex gap-4 border border-gray-300 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition duration-200 cursor-pointer"
              >
                {/* 프로필 아이콘 */}
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                {/* 텍스트 정보 */}
                <div className="flex flex-col text-sm w-full">
                  <div className="flex justify-between items-center text-gray-800 font-semibold">
                    <span>{traveler.nickname}</span>
                    <span className="text-xs text-gray-400">
                      {traveler.date}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-600">{traveler.message}</p>
                  <div className="mt-2 flex gap-2">
                    {traveler.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-xs border border-gray-300 rounded-md text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-gray-500 text-xs">{traveler.level}</p>
                  <p className="text-gray-500 text-xs">{traveler.username}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Travelers;
