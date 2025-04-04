import React, { useEffect } from "react";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
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

const Moviedetails = () => {
  const { pathname } = useLocation();
  const Navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  console.log(info);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  document.title = "Details";
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 0 10px rgba(255,255,255,0.5)",
      }}
      className="w-screen h-screen px-[10%] relative"
    >
      <nav className="w-full text-zinc-200 flex items-center justify-between text-xl pt-6">
        <Link
          onClick={() => Navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line mr-5 "
        ></Link>
        <div className="flex items-center gap-5 ">
          <a target="_blank" href={info.detail.homepage}>
            <i className="ri-external-link-line hover:text-[#6556CD] duration-300"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          >
            <i className="ri-earth-fill hover:text-[#6556CD]  duration-300"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          >
            <i className="ri-information-2-fill hover:text-[#6556CD] duration-300"></i>
          </a>
        </div>
      </nav>
      <div
        style={{ boxShadow: "0 0 20px rgba(255,0,0)" }}
        className="backdrop-blur-sm bg-red/20 p-4 rounded-xl flex flex-col absolute bottom-[0%] right-[0%] w-[50%] text-zinc-200 z-[100]"
      >
        <h1 className="text-2xl duration-300 hover:text-[#6556CD] w-fit rounded-md mb-10">
          {info.detail.original_title || info.detail.title}
        </h1>
        <p className="text-xl mb-5">{info.detail.overview}</p>
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-lg">Release Date - {info.detail.release_date}</h1>
          <Link
            to={`${pathname}/trailer`}
            className="rounded-md bg-red-500 px-3 py-2 cursor-pointer hover:bg-[#6556CD] duration-300 hover:scale-120"
          >
            Watch Trailer<i className="ml-1 ri-play-fill"></i>
          </Link>
          <h1>
            Rating - {info.detail.vote_average.toFixed(1)}
            <i className="text-yellow-400 ri-star-fill ml-2"></i>
          </h1>
          <ul className="flex gap-4">
            {info.detail.genres &&
              info.detail.genres.map((g, i) => <li key={i}>{g.name}</li>)}
          </ul>
        </div>
        <h1 className="text-xl mb-3">Available On</h1>
        <div className="flex rounded-full bg-zinc-600 gap-5 w-fit px-4 py-2 ">
          {(info.watchproviders &&
            info.watchproviders.buy &&
            info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="rounded-full w-[8vh] object-cover hover:scale-120 duration-300"
              />
            ))) ||
            "No Available"}
          {info.watchproviders &&
            info.watchproviders.buy &&
            info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="rounded-full object-cover w-[8vh] hover:scale-120 duration-300"
              />
            ))}
          {info.watchproviders &&
            info.watchproviders.rent &&
            info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="object-cover rounded-full w-[8vh] hover:scale-120 duration-300"
              />
            ))}
        </div>
      </div>

      <div className="absolute w-[50%]  left-[0%] bottom-[0%]  overflow-y-hidden">
        <HorizontalCards
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
