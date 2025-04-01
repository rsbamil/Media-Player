import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link, Links } from "react-router-dom";
import noImage from "/noImage.png";
function TopNav() {
  const [query, setQuery] = useState("");
  const [searches, setsearches] = useState([]);
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className="w-full h-[10vh]  relative flex justify-start pl-[15%] items-center">
      <i className="text-3xl text-zinc-200 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        style={{ boxShadow: "0 0 5px rgba(255,255,255)" }}
        className="w-[50%] mx-10 outline-none border-none bg-transparent text-xl px-3 py-1 rounded-md text-zinc-200"
        type="text "
        placeholder="search anything ..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-3xl text-zinc-200 ri-close-fill"
        ></i>
      )}
      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded-lg left-[17%]">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-700 duration-300 flex items-center justify-start border-b-2 border-zinc-100 p-10 w-full"
          >
            <img
              style={{ boxShadow: "0 0 10px rgba(0,0,0)" }}
              className="w-[20vh] h-[20vh] object-cover mr-5 rounded-md "
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noImage
              }
              alt=""
            />
            <span>
              {s.name || s.original_title || s.original_name || s.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNav;
