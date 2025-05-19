import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FilterSidebar from "../components/FilterSidebar";
import GuideList from "../components/GuideList";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Banner />

      <div className="flex flex-1 justify-center bg-gray-50">
        <div className="max-w-7xl w-full flex gap-6 px-6 py-10 items-start">
          <div className="h-[480px]">
            <FilterSidebar />
          </div>

          <GuideList />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
