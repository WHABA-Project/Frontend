import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profileImg from "../assets/profile.png";
import starImg from "../assets/star.png";
import heartFilledImg from "../assets/heart2.png";
import heartOutlineImg from "../assets/heart1.png";

const guideData = {
  jimin_k: {
    name: "김지민",
    age: 28,
    gender: "여성",
    region: "서울",
    username: "jimin_k",
    rating: 4.7,
    matched: true,
    intro: "안녕하세요! 알뜰하면서 즐거운 여행을 만들어드리는 김지민입니다.",
    tags: ["알뜰한", "계획적인"],
    reviews: [
      { user: "@user1", date: "2025.05.20", rating: 5, content: "친절하고 유쾌하신 가이드였습니다!" },
      { user: "@user2", date: "2025.05.18", rating: 4, content: "추천합니다. 좋은 여행이었어요." },
      { user: "@user3", date: "2025.05.15", rating: 5, content: "정말 만족스러운 여행이었습니다." },
    ],
  },
};

export default function GuideDetail() {
  const { id } = useParams();
  const guide = guideData[id];
  const [liked, setLiked] = useState(false);

  if (!guide) return <div className="text-center py-20">가이드를 찾을 수 없습니다.</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 flex justify-center py-10 px-4">
        <div className="bg-white shadow rounded-lg p-6 w-full max-w-4xl space-y-8">
          {/* 상단 프로필 */}
          <div className="flex justify-between items-start gap-6">
            <div className="flex gap-4">
              <img
                src={profileImg}
                alt="프로필"
                className="w-20 h-20 rounded-full object-cover shadow"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {guide.name} ({guide.age}) <span className="text-lg text-gray-500">{guide.gender}</span>
                </h2>
                <p className="text-gray-600 mt-1">{guide.region} / @{guide.username}</p>
                <div className="flex items-center mt-2">
                  <img src={starImg} alt="별" className="w-5 h-5 mr-1" />
                  <span className="text-yellow-500 text-lg font-medium">{guide.rating.toFixed(1)}</span>
                  {guide.matched && (
                    <span className="ml-2 text-green-600 text-sm">(매칭중)</span>
                  )}
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {guide.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs border rounded text-gray-700 bg-gray-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => setLiked(!liked)}>
              <img
                src={liked ? heartFilledImg : heartOutlineImg}
                alt="찜"
                className="w-8 h-8"
              />
            </button>
          </div>

          {/* 소개 */}
          <section className="text-gray-800">
            <h3 className="font-semibold mb-2 text-lg">소개</h3>
            <p className="text-gray-700">{guide.intro}</p>
          </section>

          {/* 리뷰 */}
          <section>
            <h3 className="font-semibold mb-4 text-lg">리뷰</h3>
            <div className="space-y-3">
              {guide.reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="p-3 border rounded-md bg-gray-50 shadow-sm"
                >
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{review.user}</span>
                    <span>{review.date}</span>
                  </div>
                  <div className="flex mt-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <img
                        key={i}
                        src={starImg}
                        alt="별"
                        className="w-4 h-4 mr-1"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mt-1 text-sm">{review.content}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
