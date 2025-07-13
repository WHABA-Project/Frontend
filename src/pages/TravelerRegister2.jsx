import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from "../components/Header";

const travelStyleOptions = ['편안한', '알뜰한', '특별한', '고급진', '체험적인'];
const guideStyleOptions = ['활발한', '계획적인', '재밌는', '잔잔한', '즉흥적인'];

export default function TravelerRegister2() {
  const [selectedTravel, setSelectedTravel] = useState([]);
  const [selectedGuide, setSelectedGuide] = useState([]);
  const [koreanSkills, setKoreanSkills] = useState({
    speech: 2,
    listening: 3,
    writing: 2,
  });

  const navigate = useNavigate(); 

  const toggle = (list, setList, item) => {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  };

  const handleComplete = () => {
    alert("회원가입이 완료되었습니다.");
    navigate("/login"); 
  };

  return (
    <div>
      <Header />
      <div className="max-w-xl mx-auto px-6 py-12 pt-12 space-y-10 text-center text-sm">
        <Section title="원하는 여행 스타일 (복수 선택 가능)">
          <OptionGrid options={travelStyleOptions} selected={selectedTravel} toggle={item => toggle(selectedTravel, setSelectedTravel, item)} />
        </Section>

        <Section title="원하는 가이드 스타일 (복수 선택 가능)">
          <OptionGrid options={guideStyleOptions} selected={selectedGuide} toggle={item => toggle(selectedGuide, setSelectedGuide, item)} />
        </Section>

        <Section title="한국어 실력">
          {['speech', 'listening', 'writing'].map(skill => (
            <div key={skill} className="text-left">
              <label className="capitalize block mb-1">{skill}</label>
              <input
                type="range"
                min="0"
                max="5"
                value={koreanSkills[skill]}
                onChange={e => setKoreanSkills({ ...koreanSkills, [skill]: parseInt(e.target.value) })}
                className="w-full accent-green-300"
              />
            </div>
          ))}
        </Section>

        <button
          onClick={handleComplete}
          className="w-20 bg-gray-300 px-6 py-2 rounded-full hover:bg-gray-400 font-medium"
        >
          확인
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border rounded-xl p-4">
      <p className="font-medium mb-4">{title}</p>
      {children}
    </div>
  );
}

function OptionGrid({ options, selected, toggle }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          onClick={() => toggle(opt)}
          className={`px-4 py-1 rounded-full border transition ${
            selected.includes(opt)
              ? 'bg-green-400 text-white border-green-400'
              : 'bg-gray-100 text-gray-700 hover:bg-green-100'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
