import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  return (
    <div className="flex flex-wrap justify-center gap-[5%] w-full pt-10">
      {data.map((c, i) => (
        <Link className="w-[25vh] mb-10" key={i}>
          <img
            className="shadow-[8px_17px_38px_1px_rgba(0,0,0,10)] h-[40vh] object-cover rounded-md hover:scale-120 duration-300"
            src={`https://image.tmdb.org/t/p/original/${
              c.backdrop_path || c.profile_path
            })`}
            alt=""
          />
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.original_title || c.original_name || c.title}
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
