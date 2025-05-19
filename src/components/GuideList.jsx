import React from "react";
import GuideCard from "./GuideCard";

const sampleGuides = [
  {
    name: "김지민",
    age: 28,
    region: "서울",
    username: "jimin_k",
    rating: 4.9,
    matched: true,
  },
  {
    name: "양준형",
    age: 35,
    region: "부산",
    username: "junh",
    rating: 4.7,
    matched: false,
  },
  {
    name: "여소미",
    age: 25,
    region: "인천",
    username: "somm",
    rating: 4.5,
    matched: false,
  },
  {
    name: "김가영",
    age: 30,
    region: "제주",
    username: "kimga0",
    rating: 4.8,
    matched: false,
  },
  {
    name: "김지민",
    age: 28,
    region: "서울",
    username: "jimin_k",
    rating: 4.9,
    matched: true,
  },
  {
    name: "양준형",
    age: 35,
    region: "부산",
    username: "junh",
    rating: 4.7,
    matched: false,
  },
  {
    name: "여소미",
    age: 25,
    region: "인천",
    username: "somm",
    rating: 4.5,
    matched: false,
  },
  {
    name: "김가영",
    age: 30,
    region: "제주",
    username: "kimga0",
    rating: 4.8,
    matched: false,
  },
];

const GuideList = () => {
  const handleCardClick = (guide) => {
    alert(`${guide.name} 가이드를 클릭했어요!`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {sampleGuides.map((guide, index) => (
        <GuideCard key={index} guide={guide} onClick={() => handleCardClick(guide)} />
      ))}
    </div>
  );
};

export default GuideList;
