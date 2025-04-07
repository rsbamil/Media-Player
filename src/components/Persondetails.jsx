import React, { useEffect } from "react";
import { asyncloadperson, removeperson } from "../store/actions/PersonActions";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const Navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  console.log(info);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  document.title = "Details";
  return info ? (
    <div className="px-[15%] w-screen bg-[#1F1E24] pb-10  ">
      <nav className="w-full h-[10vh] text-zinc-200 flex items-center gap-10 text-xl pt-6 pb-5">
        <Link
          onClick={() => Navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line mr-5 "
        ></Link>
      </nav>
      <div className="w-full flex gap-30">
        {/* part 2 left poster and details */}
        <div className="w-[20%] ">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] w-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
          {/* media links */}
          <div className="text-xl text-white flex gap-x-5 items-center justify-center">
            <h1 className="text-xl">Social</h1>
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill hover:text-[#6556CD]  duration-300"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i class="ri-facebook-circle-fill hover:text-[#6556CD]  duration-300"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i class="ri-instagram-line hover:text-[#6556CD]  duration-300"></i>
            </a>
            <a
              target="_blank"
              href={`https://x.com/${info.externalid.twitter_id}`}
            >
              <i class="ri-twitter-x-line hover:text-[#6556CD]  duration-300"></i>
            </a>
          </div>
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Personal Info
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold ">Known For</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">
            {info.detail.known_for_department}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">
            {info.detail.birthday}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold mt-3">Deathday</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">
            {info.detail.deathday ? info.detail.deathday : "Still alive"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Also Known as
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>
        {/* part 3  right details and info*/}
        <div className="w-[80%]  bg-red-400">
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Personal Info
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold ">Known For</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">
            {info.detail.known_for_department}
          </h1>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
