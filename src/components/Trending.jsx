import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";

function Trending() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      console.log(data.results);
      setTrending(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTrending();
  }, [category, duration]);
  return trending ? (
    <div className="px-[3%] py-[1%] w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="w-full   flex items-center ">
        <h1
          style={{ fontFamily: "open sans" }}
          className="text-2xl text-zinc-400 font-semibold "
        >
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line mr-5"
          ></i>
          Trending
        </h1>
        <TopNav />
        <Dropdown
          title="Category"
          options={["movie", "tv", "all"]}
          funct={(e) => setCategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        <Dropdown
          title="Duration"
          options={["week", "day"]}
          funct={(e) => setDuration(e.target.value)}
        />
      </div>
      <Cards data={trending} title={category} />
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;
