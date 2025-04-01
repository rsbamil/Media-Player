import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-[20%] h-screen  border-r-2 border-zinc-400 p-10 ">
      <h1 className="text-2xl font-bold ">
        <i className=" ri-tv-fill text-[#6556CD] mr-2"></i>
        <span className="text-white">SCSDB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-lg gap-2 mb-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD]  hover:text-white  rounded-md duration-300 p-3"
        >
          <i className="ri-fire-fill mr-3"></i>Trending
        </Link>
        <Link className="hover:bg-[#6556CD]  hover:text-white  rounded-md duration-300 p-3">
          <i className="ri-movie-fill mr-3"></i>Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white  rounded-md   p-3">
          <i className="ri-tv-2-fill mr-3"></i>Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD]  hover:text-white  rounded-md duration-300 p-3">
          <i className="ri-funds-fill mr-3"></i>Popular
        </Link>
        <Link className="hover:bg-[#6556CD]  hover:text-white  rounded-md duration-300 p-3">
          <i className="ri-user-2-fill mr-3"></i>People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-white font-semibold text-xl mt-8 mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD]  hover:text-white  rounded-md duration-300 p-3">
          <i className="ri-information-fill mr-3"></i>About Us
        </Link>
        <Link className="hover:bg-[#6556CD]  hover:text-white  rounded-md duration-300 p-3 ">
          <i className="ri-phone-fill mr-3"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
