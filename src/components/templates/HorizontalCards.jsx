import React from "react";
function HorizontalCards({ data }) {
  return (
    <div className="w-full  p-5 overflow-y-hidden  ">
      <div className="mb-5">
        <h1 className="text-3xl  text-zinc-400 font-semibold">Trending</h1>
      </div>
      <div className="w-full flex h-[40vh] ">
        {data.map((d, i) => (
          <div
            key={i}
            className="min-w-[15%] h-full mr-5 bg-zinc-900 rounded-md p-3 flex flex-col justify-end mb-5"
          >
            <img
              className="w-full  rounded-md  object-cover mb-2"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt="No Image"
            />
            <div>
              <h1 className="text-xl font-semibold mb-5 text-white">
                {d.name || d.original_title || d.original_name || d.title}
              </h1>
              <p className="text-white  tracking-tight leading-none ">
                {d.overview.slice(0, 100)} ...
                <span className="text-zinc-500 cursor-pointer">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
