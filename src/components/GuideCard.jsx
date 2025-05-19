import React from "react";
import profileImg from "../assets/profile.png"; 

const GuideCard = ({ guide, onClick }) => {
  const { name, age, region, username, rating, imageUrl, matched } = guide;

  return (
    <div
      className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer p-4 flex flex-col items-center text-center gap-2 border border-gray-200 hover:border-sky-400"
      onClick={onClick}
    >
      <img
        src={profileImg}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="font-semibold text-lg">{name} ({age})</div>
      <div className="text-sm text-gray-600">{region}</div>
      <div className="text-sm text-gray-500">{username}</div>
      <div className="text-yellow-500">⭐ {rating}</div>
      {matched && (
        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">매칭중</span>
      )}
    </div>
  );
};

export default GuideCard;