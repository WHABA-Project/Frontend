import React from "react";
import GuideCard from "./GuideCard";

// 샘플 가이드 데이터
const sampleGuides = [
  {
    name: "김지민",
    age: 28,
    gender: "여성",
    region: "서울",
    username: "jimin_k",
    rating: 4.7,
    matched: true,
  },
  {
    name: "양준형",
    age: 35,
    gender: "남성",
    region: "부산",
    username: "junh",
    rating: 4.7,
    matched: false,
  },
  {
    name: "여소미",
    age: 25,
    gender: "여성",
    region: "인천",
    username: "somm",
    rating: 4.5,
    matched: false,
  },
  {
    name: "김가영",
    age: 30,
    gender: "여성",
    region: "제주",
    username: "kimga0",
    rating: 4.8,
    matched: false,
  },
  {
    name: "최민우",
    age: 32,
    gender: "남성",
    region: "서울",
    username: "minwoo",
    rating: 4.6,
    matched: false,
  },
  {
    name: "이유정",
    age: 29,
    gender: "여성",
    region: "부산",
    username: "yujung",
    rating: 4.9,
    matched: true,
  },
  {
    name: "박보검",
    age: 27,
    gender: "남성",
    region: "대전",
    username: "bogum",
    rating: 4.3,
    matched: false,
  },
  {
    name: "아이유",
    age: 30,
    gender: "여성",
    region: "서울",
    username: "iu",
    rating: 4.8,
    matched: false,
  },
  {
    name: "정해인",
    age: 34,
    gender: "남성",
    region: "제주",
    username: "haein",
    rating: 4.2,
    matched: false,
  },
  {
    name: "한소희",
    age: 26,
    gender: "여성",
    region: "인천",
    username: "sohee",
    rating: 4.7,
    matched: false,
  },
  {
    name: "박서준",
    age: 31,
    gender: "남성",
    region: "대구",
    username: "seojoon",
    rating: 4.6,
    matched: false,
  },
  {
    name: "수지",
    age: 28,
    gender: "여성",
    region: "대전",
    username: "suzy",
    rating: 4.4,
    matched: false,
  },
];

const GuideList = ({ filter }) => {
  let filtered = sampleGuides;

  // 지역 필터
  if (filter.region !== "전체") {
    filtered = filtered.filter((g) => g.region === filter.region);
  }

  // 성별 필터
  if (filter.gender !== "전체") {
    filtered = filtered.filter((g) => g.gender === filter.gender);
  }

  // 나이 정렬
  if (filter.ageOrder === "오름차순") {
    filtered = [...filtered].sort((a, b) => a.age - b.age);
  } else if (filter.ageOrder === "내림차순") {
    filtered = [...filtered].sort((a, b) => b.age - a.age);
  }

  // 정렬 기준
  if (filter.sortOrder === "최신순") {
    filtered = [...filtered]; // 현재 샘플에는 createdAt 없음
  } else if (filter.sortOrder === "오래된순") {
    filtered = [...filtered].reverse();
  } else if (filter.sortOrder === "평점 높은순") {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {filtered.map((guide) => (
        <GuideCard key={guide.username} guide={guide} />
      ))}
    </div>
  );
};

export default GuideList;
