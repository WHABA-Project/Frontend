import React from "react";

const FilterSidebar = () => {
  return (
    <aside className="w-60 h-120 bg-white p-5 rounded-lg shadow-md border border-gray-200 text-sm">
      <h2 className="text-xl font-bold text-sky-600 mb-6">필터</h2>

      <div className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">지역</label>
          <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300">
            <option>전체</option>
            <option>서울</option>
            <option>인천</option>
            <option>대전</option>
            <option>대구</option>
            <option>부산</option>
            <option>제주</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">성별</label>
          <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300">
            <option>전체</option>
            <option>남성</option>
            <option>여성</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">나이</label>
          <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300">
            <option>전체</option>
            <option>20대</option>
            <option>30대</option>
            <option>40대</option>
            <option>50대 이상</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">정렬 방식</label>
          <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300">
            <option>전체</option>
            <option>평점순</option>
            <option>최신순</option>
            <option>리뷰 많은순</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;