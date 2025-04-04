import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Trailer = () => {
  const Navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return (
    <div className="absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.9)] ">
      <Link
        onClick={() => Navigate(-1)}
        className="hover:text-[#6556CD] ri-close-large-line absolute text-3xl text-white left-[5%] top-[5%]"
      ></Link>
      <ReactPlayer
        height={620}
        width={1280}
        style={{ boxShadow: "0 0 20px rgba(125, 254, 227,0.8" }}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />
    </div>
  );
};

export default Trailer;
