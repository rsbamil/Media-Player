import React from "react";
import noImage from "/noImage.png";
import { Link } from "react-router-dom";

function HorizontalCards({ data }) {
  return (
    <div className="w-full  p-5 overflow-y-hidden  ">
      <div className="w-full flex h-[40vh] ">
        {data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[15%] h-full mr-5 bg-zinc-900 rounded-md p-3 flex flex-col justify-evenly mb-5"
          >
            <img
              className="w-full  rounded-md  object-cover mb-2"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.backdrop_path || d.poster_path
                    }`
                  : noImage
              }
              alt="No Image"
            />
            <div className="overflow-hidden overflow-y-auto">
              <h1 className="text-xl font-semibold mb-5 text-white">
                {d.name || d.original_title || d.original_name || d.title}
              </h1>
              <p className="text-white  tracking-tight leading-none ">
                {d.overview} ...
                <span className="text-zinc-500 cursor-pointer">more</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
