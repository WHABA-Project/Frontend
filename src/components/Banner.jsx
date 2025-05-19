import React from "react";
import bannerImage from "../assets/banner.jpg"; 

const Banner = () => {
  return (
    <div className="w-full h-72 overflow-hidden">
      <img
        src={bannerImage}
        alt="비행기 창 이미지"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;