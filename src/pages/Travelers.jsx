import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ 추가
import Header from "../components/Header";
import Banner from "../components/Banner";
import FilterSidebar from "../components/FilterSidebar";
import Footer from "../components/Footer";

const Travelers = () => {
  const [filter, setFilter] = useState({
    region: "전체",
    gender: "전체",
    ageOrder: "전체",
    sortOrder: "전체",
  });

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
      nickname: "관광객 2",
      date: "2025.05.21",
      message: "Hello, I'm from Canada",
      tags: ["편안한", "즉흥적인"],
      level: "한국어 수준: 중",
      username: "@maple__",
    },
    {
      id: 3,
      nickname: "관광객 3",
      date: "2025.05.22",
      message: "Hello, I'm from Japan",
      tags: ["고급진", "계획적인"],
      level: "한국어 수준: 상",
      username: "@nihon__",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />

      <div className="flex flex-1 justify-center bg-white">
        <div className="max-w-7xl w-full flex gap-6 px-6 py-10 items-start">
          <div className="w-1/5">
            <FilterSidebar filter={filter} setFilter={setFilter} />
          </div>

          <div className="w-4/5 flex flex-col gap-6">
            {travelers.map((traveler) => (
              <Link
                key={traveler.id}
                to={`/traveler/${traveler.id}`} // ✅ id 기반 경로로 이동
                className="flex gap-4 border border-gray-300 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition duration-200 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
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
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Travelers;
