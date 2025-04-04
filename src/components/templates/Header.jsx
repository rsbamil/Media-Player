import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 0 10px rgba(255,255,255,0.5)",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start pl-10 pb-5 "
    >
      <h1 className="text-5xl font-black mb-5 text-white">
        {data.name || data.original_title || data.original_name || data.title}
      </h1>
      <p className="text-white w-[70%] tracking-tight leading-none mb-3">
        {data.overview.slice(0, 200)} ...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p className="text-white mb-3">
        <i className="text-yellow-500 ri-megaphone-fill"></i>
        {data.release_date || "No Information"}
        <i className="ml-5 text-yellow-500 ri-movie-2-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#6556CD] w-fit rounded-md px-3 py-1 text-white hover:scale-120  duration-300">
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
