import { useEffect, useRef, useState } from "react";
import "./VideoListArea.css";
import axios from "./axios";
import NewModal from "./NewModal";
import { useSelector, useDispatch } from "react-redux";
import { OpenModal, DataFromPoster } from "../actions/index";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";
function VideoListArea({ title, fetchUrl, isLargeRow = false }) {
  //
  //
  //
  //
  const stateModal = useSelector((state) => state.OpenAndCloseModal);

  const dispatch = useDispatch();
  const [Movies, setMovies] = useState([]);
  //
  const [visible, setvisible] = useState(false);
  //
  const statePlayer = useSelector((state) => state.OpenPlayer);
  //
  const ref = useRef(null);
  //
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const MovieDataReceive = async () => {
      const MovieData = await axios.get(fetchUrl);
      setMovies(MovieData.data.results);
      return MovieData;
    };
    MovieDataReceive();
  }, [fetchUrl]);
  //
  //
  const scrollToward = (scrollOffset) => {
    if (ref.current.scrollLeft > 0) {
      setvisible(true);
    } else {
      setvisible(false);
    }
    ref.current.scrollLeft += scrollOffset;
  };
  //
  //
  return (
    <>
      <div className="cardsArea">
        <h2 className="titlehere">{title}</h2>
        <div className={`container ${isLargeRow && "bigMovieArea"}`}>
          <div
            className={`left ${visible && "leftbtn"}`}
            onClick={() => scrollToward(-200)}
          >
            <i className="fas fa-chevron-left" />
          </div>
          <div className="moviearea" ref={ref}>
            {Movies.map((movies) => {
              if (isLargeRow) {
                return (
                  <>
                    <img
                      src={`${base_url}${
                        isLargeRow ? movies.poster_path : movies.backdrop_path
                      }`}
                      className={`row_poster ${
                        isLargeRow && "row_posterLarge"
                      }`}
                      overview={movies.overview}
                      key={movies.id}
                      alt={movies.id}
                      onClick={() => {
                        dispatch(OpenModal());
                        dispatch(DataFromPoster(movies));
                      }}
                    />
                  </>
                );
              } else {
                return (
                  (isLargeRow && movies.poster_path) ||
                  (!isLargeRow && movies.backdrop_path && (
                    <>
                      <img
                        src={`${base_url}${
                          isLargeRow ? movies.poster_path : movies.backdrop_path
                        }`}
                        className={`row_poster ${
                          isLargeRow && "row_posterLarge"
                        }`}
                        overview={movies.overview}
                        key={movies.id}
                        alt={movies.id}
                        onClick={() => {
                          dispatch(OpenModal());
                          dispatch(DataFromPoster(movies));
                        }}
                      />
                    </>
                  ))
                );
              }
            })}
          </div>
          <div className="right" onClick={() => scrollToward(200)}>
            <i className="fas fa-chevron-right" />
          </div>
        </div>
      </div>
      {stateModal ? <NewModal /> : null}
      {statePlayer ? <VideoPlayer /> : null}
    </>
  );
}

export default VideoListArea;
