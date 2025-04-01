import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
function Home() {
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const getheaderwallpeper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomData);
    } catch (error) {
      console.error(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setTrending(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    !wallpaper && getheaderwallpeper();
    !trending && getTrending();
  }, []);
  console.log(trending);
  document.title = "SCSDB | HomePage";
  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading....</h1>
  );
}

export default Home;
