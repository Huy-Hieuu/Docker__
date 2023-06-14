import axios from "axios";
import React, { useEffect, useState } from "react";

function Banner(props) {
  return (
    <section className="banner h-[400px] page-container mb-20">
      <div className="w-full h-full rounded-lg relative">
        <img
          src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute left-5 bottom-5 w-full text-white">
          <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
          <div className="flex items-center gap-x-3 mb-8">
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
          </div>
          <button className="py-3 px-6 rounded-lg bg-red-600 text-white font-medium">
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
