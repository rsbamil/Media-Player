import React from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.png";
function Cards({ data, title }) {
  return (
    <div className=" flex flex-wrap justify-center gap-[5%] w-full h-full pt-10 px-[3%] py-[1%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="w-[25vh] mb-10"
          key={i}
        >
          <img
            className="shadow-[8px_17px_38px_1px_rgba(0,0,0,10)] h-[40vh] object-cover rounded-md hover:scale-120 duration-300"
            src={
              c.backdrop_path || c.profile_path || c.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.backdrop_path || c.profile_path || c.poster_path
                  })`
                : noImage
            }
            alt=""
          />
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.original_title || c.original_name || c.title}
          </h1>
          {c.vote_average && (
            <div className="flex text-white  items-center gap-2">
              {c.vote_average.toFixed(1)}
              <i className="text-yellow-400 ri-star-fill"></i>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;
