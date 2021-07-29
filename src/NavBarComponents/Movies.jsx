import React, { useEffect } from "react";
import Banner from "../WebComponents/HomePage/components/Banner";
import axios from "../WebComponents/HomePage/components/axios";
import requests from "../WebComponents/HomePage/components/Requests";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DataFromPoster } from "../WebComponents/HomePage/actions";
function TvShows() {
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
