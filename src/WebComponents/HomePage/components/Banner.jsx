import { useEffect, useState } from "react";
import "./Banner.css";
import NavArea from "./NavArea";
import axios from "./axios";
import requests from "./Requests";
import { DataFromPoster, DataForMyList } from "../actions/index";
import { useDispatch } from "react-redux";

function Banner() {
  const [showCheck, setshowCheck] = useState(false);
  const dispatch = useDispatch();
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchMovieData() {
      const request = await axios.get(requests.fetchNetflixOrignals);
      const ActualData = await request.data.results;
      setmovie(ActualData[Math.floor(Math.random() * ActualData.length - 1)]);
      return request;
    }
    fetchMovieData();
  }, []);
  function truncatehere(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <>
      <div className="bannerarea">
        <NavArea />
        <div className="backbanner">
          <div
            className="containbackground"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
          />
        </div>
        <div className="backshadow" />
        <div className="dispareahere">
          <h1>{movie? movie.name : movie.title}</h1>
          <div className="buttonhere">
            <button
              className="btn_grp"
              onClick={() => dispatch(DataFromPoster(movie))}
            >
              <i className="fas fa-play" style={{ fontSize: "18px" }} />
              <span>Play</span>
            </button>
            <button
              className="btn_grp"
              onClick={() => {
                dispatch(DataForMyList(movie));
                setshowCheck(!showCheck);
              }}
            >
              {showCheck ? (
                <i class="fas fa-check" style={{ fontSize: "18px" }} />
              ) : (
                <i className="fas fa-plus" style={{ fontSize: "18px" }} />
              )}
              My List
            </button>
          </div>
          <p className="desc_area">{truncatehere(`${movie.overview}`, 150)}</p>
        </div>
      </div>
    </>
  );
}

export default Banner;
