import React from "react";
import { FaUserCircle } from "react-icons/fa";

const guides = {
  matched: [
    {
      name: "가이드 1",
      details: ["코스에 대한 정보", "코스에 대한 정보"],
    },
  ],
  requests: [
    {
      name: "가이드 2",
      details: ["코스에 대한 정보", "코스에 대한 정보"],
    },
    {
      name: "가이드 3",
      details: ["코스에 대한 정보", "코스에 대한 정보"],
    },
    {
      name: "가이드 4",
      details: ["코스에 대한 정보", "코스에 대한 정보"],
    },
  ],
};

export default function GuideRequestList() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-sm text-gray-800">
      {/* 매칭 중인 가이드 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">매칭 중인 가이드</h2>
        {guides.matched.map((guide, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition hover:bg-gray-50 p-5 mb-4"
          >
            <div className="flex items-start gap-4">
              <FaUserCircle size={42} className="text-gray-500 mt-1" />
              <div>
                <p className="font-semibold text-base mb-2">{guide.name}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {guide.details.map((info, i) => (
                    <li key={i}>{info}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition text-sm font-medium">
              해제
            </button>
          </div>
        ))}
      </section>

      {/* 요청 온 가이드 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">나에게 온 요청</h2>
        {guides.requests.map((guide, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition hover:bg-gray-50 p-5 mb-4"
          >
            <div className="flex items-start gap-4">
              <FaUserCircle size={42} className="text-gray-500 mt-1" />
              <div>
                <p className="font-semibold text-base mb-2">{guide.name}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {guide.details.map((info, i) => (
                    <li key={i}>{info}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-4 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition text-sm font-medium">
                수락
              </button>
              <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition text-sm font-medium">
                거절
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
