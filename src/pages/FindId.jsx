import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FindId() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleVerifyPhone = () => {
    // TODO: 휴대폰 인증 로직 추가
    alert("인증번호가 전송되었습니다.");
  };

  const handleFindId = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("아이디 찾기 시도:", { name, phone });
    alert("회원님의 아이디는 example123입니다.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <form
        onSubmit={handleFindId}
        className="w-full max-w-md flex flex-col gap-6"
      >
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-semibold">
            사용자 이름
          </label>
          <input
            id="name"
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-semibold">
            전화번호
          </label>
          <div className="flex">
            <input
              id="phone"
              type="text"
              placeholder="휴대폰번호"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={handleVerifyPhone}
              className="px-10 py-2 bg-white border border-gray-300 border-l-0 rounded-r-md text-sm"
            >
              인증하기
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
        >
          아이디 찾기
        </button>
      </form>

      <div className="mt-12 text-sm text-center text-black space-x-4">
        <button className="hover:underline" onClick={() => navigate("/login")}>
          로그인
        </button>
        <span>|</span>
        <button className="hover:underline" onClick={() => navigate("/signup")}>
          회원가입
        </button>
      </div>
    </div>
  );
}
