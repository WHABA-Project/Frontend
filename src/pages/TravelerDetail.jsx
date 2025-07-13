import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heartFilledImg from "../assets/heart2.png";
import heartOutlineImg from "../assets/heart1.png";

export default function TravelerDetail() {
  const { id } = useParams();

  const travelerData = {
    1: {
      nickname: "관광객 1",
      date: "2025.05.20",
      message: "Hello, I'm from Australia",
      tags: ["알뜰한", "계획적인"],
      level: "한국어 수준: 중상",
      username: "@axoxiii__",
      intro: "서울을 여행하면서 현지 문화를 체험하고 싶어요. 가이드와 함께 좋은 추억을 만들고 싶습니다!",
    },
    2: {
      nickname: "관광객 2",
      date: "2025.05.21",
      message: "Hello, I'm from Canada",
      tags: ["편안한", "즉흥적인"],
      level: "한국어 수준: 중",
      username: "@maple__",
      intro: "자유로운 분위기에서 한국의 숨겨진 명소를 방문하고 싶어요.",
    },
    3: {
      nickname: "관광객 3",
      date: "2025.05.22",
      message: "Hello, I'm from Japan",
      tags: ["고급진", "계획적인"],
      level: "한국어 수준: 상",
      username: "@nihon__",
      intro: "한국의 역사와 전통을 배우고 싶습니다. 멋진 일정 부탁드려요!",
    },
  };

  const traveler = travelerData[id];
  const [liked, setLiked] = useState(false);

  if (!traveler) {
    return <div className="text-center py-20">관광객 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 bg-gray-50 flex justify-center py-10 px-4">
        <div className="bg-white shadow rounded-xl p-6 w-full max-w-2xl space-y-4 relative">
          <button
            onClick={() => setLiked(!liked)}
            className="absolute top-4 right-4"
            title="찜하기"
          >
            <img
              src={liked ? heartFilledImg : heartOutlineImg}
              alt="찜"
              className="w-6 h-6"
            />
          </button>

          <h1 className="text-xl font-bold">{traveler.nickname}</h1>
          <span className="text-sm text-gray-400">{traveler.date}</span>

          <p className="text-gray-700 mt-2">{traveler.message}</p>

          <div className="flex gap-2 mt-2">
            {traveler.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-xs border rounded text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          <p className="mt-2 text-sm text-gray-600">{traveler.level}</p>
          <p className="text-sm text-gray-500">{traveler.username}</p>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">소개글</h2>
            <p className="text-gray-700 mt-1">{traveler.intro}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
