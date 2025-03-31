import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Header from "./templates/Header";
function Home() {
  const [wallpaper, setwallpaper] = useState(null);
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
  useEffect(() => {
    !wallpaper && getheaderwallpeper();
  }, []);
  console.log(wallpaper);
  document.title = "SCSDB | HomePage";
  return (
    <>
      <SideNav />
      <div className="w-[80%] h-full ">
        <TopNav />
        <Header />
      </div>
    </>
  );
}

export default Home;
