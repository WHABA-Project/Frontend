import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import GuideCard from "../components/GuideCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // 로컬스토리지에서 찜 목록 불러오기
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">💖 내가 찜한 목록</h2>

        {wishlist.length === 0 ? (
          <div className="text-gray-500 text-center py-20">
            No saved guides yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((guide) => (
              <GuideCard key={guide.username} guide={guide} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
