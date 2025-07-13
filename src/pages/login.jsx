import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("로그인 시도:", { email, password });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="w-full max-w-md px-4">
          <form
            onSubmit={handleLogin}
            className="w-full flex flex-col gap-6"
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
              <label htmlFor="password" className="block mb-2 text-sm font-semibold">
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

          <div className="mt-8 text-sm text-center text-black space-x-4">
            <Link to="/FindId" className="hover:underline">
              아이디 찾기
            </Link>
            <span>|</span>
            <Link to="/FindPw" className="hover:underline">
              비밀번호 찾기
            </Link>
            <span>|</span>
            <Link to="/register" className="hover:underline">
              회원가입
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
