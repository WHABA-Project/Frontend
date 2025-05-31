import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profileImg from "../assets/profile.png";

const MyPage = () => {
  const [editField, setEditField] = useState(null);
  const [form, setForm] = useState({
    nickname: "닉네임",
    snsId: "example_sns",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = (field) => {
    setEditField(field);
  };

  const handleSave = () => {
    setEditField(null);
    alert("변경사항이 저장되었습니다.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <div className="mb-10 text-center">
          <img
            src={profileImg}
            alt="프로필"
            className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold">마이페이지</h2>
        </div>

        <div className="w-full max-w-lg space-y-5 text-sm">
          <div className="flex items-center border rounded px-4 py-3 justify-between">
            {editField === "nickname" ? (
              <>
                <input
                  name="nickname"
                  value={form.nickname}
                  onChange={handleChange}
                  className="flex-1 outline-none"
                />
                <button onClick={handleSave} className="text-blue-500 text-sm">
                  저장
                </button>
              </>
            ) : (
              <>
                <span>{form.nickname}</span>
                <button
                  onClick={() => handleEditClick("nickname")}
                  className="text-sm bg-gray-200 px-3 py-1 rounded"
                >
                  수정
                </button>
              </>
            )}
          </div>

          <div className="flex items-center border rounded px-4 py-3 justify-between">
            {editField === "snsId" ? (
              <>
                <input
                  name="snsId"
                  value={form.snsId}
                  onChange={handleChange}
                  className="flex-1 outline-none"
                />
                <button onClick={handleSave} className="text-blue-500 text-sm">
                  저장
                </button>
              </>
            ) : (
              <>
                <span>{form.snsId}</span>
                <button
                  onClick={() => handleEditClick("snsId")}
                  className="text-sm bg-gray-200 px-3 py-1 rounded"
                >
                  수정
                </button>
              </>
            )}
          </div>

          <button className="w-full border px-4 py-3 rounded hover:bg-gray-50 text-left">
            나의 신청 내역
          </button>

          <button className="w-full border px-4 py-3 rounded hover:bg-gray-50 text-left">
            나의 공고 관리
          </button>

          <div className="flex justify-between items-center border rounded px-4 py-3">
            <span>어학 인증서 등록</span>
            <input type="file" className="text-sm" />
          </div>

          <div className="flex justify-between items-center border rounded px-4 py-3">
            <span>범죄 이력 조회서 등록</span>
            <input type="file" className="text-sm" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyPage;
