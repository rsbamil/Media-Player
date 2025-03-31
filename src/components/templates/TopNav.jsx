import React, { useState } from "react";
import { Link, Links } from "react-router-dom";

function TopNav() {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full h-[10vh]  relative flex justify-start ml-[15%] items-center">
      <i class="text-3xl text-zinc-200 ri-search-line"></i>
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
          class="text-3xl text-zinc-200 ri-close-fill"
        ></i>
      )}
      <div className="absolute w-[50%] h-[50vh] bg-zinc-200 top-[90%] overflow-auto">
        <Link className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-700 duration-300 flex items-center justify-start border-b-2 border-zinc-100 p-10  w-full">
          <img src="" alt="" />
          <span>Hello EveryOne</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-700 duration-300 flex items-center justify-start border-b-2 border-zinc-100 p-10  w-full">
          <img src="" alt="" />
          <span>Hello EveryOne</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-700 duration-300 flex items-center justify-start border-b-2 border-zinc-100 p-10  w-full">
          <img src="" alt="" />
          <span>Hello EveryOne</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-700 duration-300 flex items-center justify-start border-b-2 border-zinc-100 p-10  w-full">
          <img src="" alt="" />
          <span>Hello EveryOne</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-700 duration-300 flex items-center justify-start border-b-2 border-zinc-100 p-10  w-full">
          <img src="" alt="" />
          <span>Hello EveryOne</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-700 duration-300 flex items-center justify-start border-b-2 border-zinc-100 p-10  w-full">
          <img src="" alt="" />
          <span>Hello EveryOne</span>
        </Link>
      </div>
    </div>
  );
}

export default TopNav;
