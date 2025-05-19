import React from "react";
import { useNavigate } from "react-router-dom";
import travelerImg from "../assets/traveler.png"; 
import guideImg from "../assets/guide.png";
import Header from "../components/Header";

export default function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div>
          <Header />
    <div className="flex justify-center pt-32 pb-12 font-pretendard min-h">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl h-96 w-full bg-white p-3 rounded-lg shadow">
        <div className="text-center border rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">여행자 회원</h2>
          <p className="text-gray-500 mb-4">가이드를 찾고, 동행을 계획하세요</p>
          <img src={travelerImg} alt="여행자" className="w-36 pt-6 mx-auto mb-4" />
          <button
            onClick={() => navigate("/travelerregister")}
            className="w-full bg-blue-400 text-white py-2 rounded-lg font-semibold hover:bg-blue-500"
          >
            여행자 회원가입
          </button>
        </div>

        <div className="text-center border rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">가이드 회원</h2>
          <p className="text-gray-500 mb-4">관광객을 안내하고 수익을 창출하세요</p>
          <img src={guideImg} alt="가이드" className="w-36 pt-6 mx-auto mb-4 " />
          <button
            onClick={() => navigate("/guideregister")}
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800"
          >
            가이드 회원가입
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}