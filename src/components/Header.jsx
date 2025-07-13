import React from "react";
import { Link } from "react-router-dom";
import bellIcon from "../assets/bell.png";
import heartIcon from "../assets/heart.png";
import userIcon from "../assets/mypage.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b h-24">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
        <Link
          to="/"
          className="flex-shrink-0 text-2xl font-bold text-blue-700 font-pretendard"
        >
          WHABA
        </Link>

        <div className="flex-1 px-8">
          <input
            type="text"
            placeholder="검색창"
            className="w-full px-4 py-1 border rounded-full text-sm"
          />
        </div>

        <div className="pr-6 flex items-center space-x-4 text-sm font-medium text-gray-600">
          {/* ✅ 수정된 로그인 버튼 */}
          <Link to="/login" className="hover:text-blue-600">
            로그인
          </Link>
          <span>|</span>
          <Link to="/register" className="hover:text-blue-600">
            회원가입
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/RequestList">
            <img src={bellIcon} alt="벨" className="w-5 h-5 hover:opacity-70" />
          </Link>
          <img
            src={heartIcon}
            alt="하트"
            className="w-5 h-5 hover:opacity-70"
          />
          <Link to="/mypage">
            <img
              src={userIcon}
              alt="사람"
              className="w-5 h-5 hover:opacity-70"
            />
          </Link>
        </div>
      </div>

      <nav className="border-t">
        <ul className="flex justify-start pl-6 max-w-7xl mx-auto space-x-12 text-sm font-medium py-2">
          <li className="cursor-pointer">
            <Link to="/" className="hover:text-blue-600">
              여행지 소개
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/guides" className="hover:text-blue-600">
              가이드 리스트
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/travelers" className="hover:text-blue-600">
              관광객 리스트
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}