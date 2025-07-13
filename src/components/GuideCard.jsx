import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";

const GuideCard = ({ guide }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsLiked(wishlist.some((item) => item.username === guide.username));
  }, [guide.username]);

  const handleLikeClick = (e) => {
    e.preventDefault(); // Link 이동 막기
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isLiked) {
      const updated = wishlist.filter(
        (item) => item.username !== guide.username
      );
      localStorage.setItem("wishlist", JSON.stringify(updated));
    } else {
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, guide]));
    }

    setIsLiked(!isLiked);
  };

  return (
    <Link
      to={`/guide/${guide.username}`}
      className="bg-white relative rounded-xl shadow hover:shadow-lg transition cursor-pointer p-4 flex flex-col items-center text-center gap-2 border border-gray-200 hover:border-sky-400"
    >
      {/* ❤️ 하트 버튼 */}
      <button
        onClick={handleLikeClick}
        className="absolute top-3 right-3 text-2xl z-10"
      >
        {isLiked ? "❤️" : "🤍"}
      </button>

      <img
        src={profileImg}
        className="w-24 h-24 rounded-full object-cover"
        alt="Guide Profile"
      />
      <div className="font-semibold text-lg">
        {guide.name} ({guide.age})
      </div>
      <div className="text-sm text-gray-600">{guide.region}</div>
      <div className="text-sm text-gray-500">{guide.username}</div>
      <div className="text-yellow-500">⭐ {guide.rating}</div>
      {guide.matched && (
        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
          매칭중
        </span>
      )}
    </Link>
  );
};

export default GuideCard;
