import React, { useEffect } from "react";
import Banner from "../WebComponents/HomePage/components/Banner";
import axios from "../WebComponents/HomePage/components/axios";
import requests from "../WebComponents/HomePage/components/Requests";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DataFromPoster } from "../WebComponents/HomePage/actions";
import { useCallback } from "react";
import axioslocal from "axios";
import { useHistory } from "react-router-dom";
function TvShows() {
  const history = useHistory();
  const callCookieAuth = useCallback(() => {
    const callCookie = async () => {
      try {
        const res = await axioslocal.get("/cookieVerification", {
          withCredentials: true,
        });
        console.log(res);
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (error) {
        console.log(error);
        history.push("/login");
      }
    };
    callCookie();
  }, [history]);
  useEffect(() => {
    callCookieAuth();
  }, [callCookieAuth]);
  const dispatch = useDispatch();
  const baseLink = "https://image.tmdb.org/t/p/original/";
  const [Movies, setMovies] = useState([]);
  const dataRec = requests.fetchTopRatedMovies;
  useEffect(() => {
    const MovieDataRecive = async () => {
      const MovieData = await axios.get(dataRec);
      setMovies(MovieData.data.results);
      return MovieData;
    };
    MovieDataRecive();
  }, [dataRec]);
  console.log(TvShows);
  return (
    <>
      <Banner />
      <div className="fullTvshowArea">
        <h1 className="mainTitle">Movies</h1>
        {Movies.map((e) => {
          return (
            <>
              <img
                src={`${baseLink}${e.poster_path || e.backdrop_path}`}
                alt={e.name}
                key={e.id}
                className="SeriesArea"
                onClick={() => dispatch(DataFromPoster(e))}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default TvShows;
