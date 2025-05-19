import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 로그인 API 연동
    console.log("로그인 시도:", { email, password });
    navigate("/main"); // 로그인 후 이동 경로
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md flex flex-col gap-6"
      >
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-semibold">
            아이디
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="아이디를 입력하세요"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold"
          >
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
        >
          로그인
        </button>
      </form>

      <div className="mt-12 text-sm text-center text-black space-x-4">
        <button
          className="hover:underline"
          onClick={() => navigate("/find-id")}
        >
          아이디 찾기
        </button>
        <span>|</span>
        <button
          className="hover:underline"
          onClick={() => navigate("/find-password")}
        >
          비밀번호 찾기
        </button>
        <span>|</span>
        <button className="hover:underline" onClick={() => navigate("/signup")}>
          회원가입
        </button>
      </div>
    </div>
  );
}
