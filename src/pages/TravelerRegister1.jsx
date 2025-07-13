import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function TravelerRegister() {
  const [form, setForm] = useState({
    nickname: "",
    id: "",
    password: "",
    passwordConfirm: "",
    email: "",
    birth: "",
    country: "",
    gender: "",
    agreeAll: false,
    agreeAge: false,
    agreePrivacy: false,
    agreeMarketing: false, 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    const updatedForm = {
      ...form,
      [name]: newValue,
    };

    if (name === "agreeAll") {
      updatedForm.agreeAge = checked;
      updatedForm.agreePrivacy = checked;
      updatedForm.agreeMarketing = checked;
    }

    if (
      name === "agreeAge" ||
      name === "agreePrivacy" ||
      name === "agreeMarketing"
    ) {
      updatedForm.agreeAll =
        updatedForm.agreeAge &&
        updatedForm.agreePrivacy &&
        updatedForm.agreeMarketing;
    }

    setForm(updatedForm);
  };

  const checkDuplicate = (field) => {
    if (!form[field]) return alert(`${field} 값을 입력해주세요.`);
    alert(`${form[field]} 은(는) 사용 가능합니다.`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      nickname,
      id,
      password,
      passwordConfirm,
      email,
      birth,
      country,
      gender,
      agreeAge,
      agreePrivacy,
    } = form;

    if (
      !nickname ||
      !id ||
      !password ||
      !passwordConfirm ||
      !email ||
      !birth ||
      !country ||
      !gender
    ) {
      return alert("모든 필수 항목을 입력해주세요.");
    }

    if (!agreeAge || !agreePrivacy) {
      return alert("필수 약관에 동의해주세요.");
    }

    if (password !== passwordConfirm) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    navigate("/travelerregister2");
  };

  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-12 pt-12 text-sm">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-center w-full mb-8">회원가입</h1>
        </div>
        <div className="mb-2 text-xs font-medium text-right">* 필수입력사항</div>
        <hr className="mb-8 border-t border-gray-700" />

        <h2 className="text-lg font-bold mb-4">약관동의*</h2>
        <div className="bg-gray-100 p-6 rounded-lg space-y-3 mb-10 border border-gray-300">
          <label className="block">
            <input
              type="checkbox"
              name="agreeAll"
              checked={form.agreeAll}
              onChange={handleChange}
            />{" "}
            전체동의{" "}
            <span className="text-gray-600 ml-2">
              선택항목 포함 모든 약관에 동의합니다
            </span>
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="agreeAge"
              checked={form.agreeAge}
              onChange={handleChange}
            />{" "}
            (필수) 만 15세 이상입니다.
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="agreePrivacy"
              checked={form.agreePrivacy}
              onChange={handleChange}
            />{" "}
            (필수) 개인정보 수집과 이용에 대한 동의
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="agreeMarketing"
              checked={form.agreeMarketing}
              onChange={handleChange}
            />{" "}
            (선택) 마케팅 광고 알림 수신 동의
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-2">
            <label className="w-24">닉네임*</label>
            <input
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
              className="border rounded px-4 py-2 flex-1"
              placeholder="입력해주세요"
            />
            <button
              type="button"
              onClick={() => checkDuplicate("nickname")}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              중복 확인
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24">아이디*</label>
            <input
              name="id"
              value={form.id}
              onChange={handleChange}
              className="border rounded px-4 py-2 flex-1"
              placeholder="입력해주세요"
            />
            <button
              type="button"
              onClick={() => checkDuplicate("id")}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              중복 확인
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24">비밀번호*</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="border rounded px-4 py-2 flex-1"
              placeholder="8자리 이상 문자, 숫자, 특수문자 포함"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24">비밀번호 확인*</label>
            <input
              type="password"
              name="passwordConfirm"
              value={form.passwordConfirm}
              onChange={handleChange}
              className="border rounded px-4 py-2 flex-1"
              placeholder="입력해주세요"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24">이메일*</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border rounded px-4 py-2 flex-1"
              placeholder="입력해주세요"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24">생년월일*</label>
            <input
              type="date"
              name="birth"
              value={form.birth}
              onChange={handleChange}
              className="border rounded px-4 py-2 flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24">국적*</label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="border rounded px-4 py-2 flex-1"
            >
              <option value="">클릭하여 선택</option>
              <option value="대한민국">대한민국</option>
              <option value="일본">일본</option>
              <option value="중국">중국</option>
              <option value="홍콩">홍콩</option>
              <option value="미국">미국</option>
              <option value="독일">독일</option>
              <option value="프랑스">프랑스</option>
              <option value="이탈리아">이탈리아</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24">성별*</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="border rounded px-4 py-2 flex-1"
            >
              <option value="">클릭하여 선택</option>
              <option value="남자">남자</option>
              <option value="여자">여자</option>
            </select>
          </div>

          <div className="pt-6">
            <button
              className="w-full bg-blue-500 text-white py-2 rounded font-bold hover:bg-blue-600"
              type="submit"
            >
              다음
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
