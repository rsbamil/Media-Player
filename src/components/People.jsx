import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";
function People() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPeople((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshHandler = () => {
    if (people.length === 0) {
      getPeople();
    } else {
      setPage(1);
      setPeople([]);
      getPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  document.title = "SCSDB | Tv Shows";
  return people.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="w-full px-[5%]  flex items-center ">
        <h1
          style={{ fontFamily: "open sans" }}
          className="text-2xl text-zinc-400 font-semibold "
        >
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line mr-5"
          ></i>
          Protagonist
        </h1>
        <TopNav />

        <div className="w-[2%]"></div>
      </div>
      <InfiniteScroll
        dataLength={people.length}
        loader={<h1>Loading...</h1>}
        next={getPeople}
        hasMore={hasMore}
      >
        <Cards data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People;
