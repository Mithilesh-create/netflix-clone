import React, { useRef, useState } from "react";
import "./NewModal.css";
import sourceFile from "../images/Official Trailer _ Season 1 _ LUCIFER.mp4";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseModal,
  DeleteDataModal,
  DataForMyList,
  OpenPlayer,
} from "../actions/index";
function NewModal() {
  const MovieInfo = useSelector((state) => state.MovieData);
  const [show, setshow] = useState(false);
  const [volume, setvolume] = useState(false);
  const [showCheck, setshowCheck] = useState(false);
  const vidref = useRef(null);
  const dispatch = useDispatch();
  const PauseOrPlay = () => {
    if (show === true) {
      setshow(false);
      vidref.current.play();
    } else {
      setshow(true);
      vidref.current.pause();
    }
  };
  const MuteOrUnMute = () => {
    if (volume === true) {
      setvolume(false);
      vidref.current.muted = true;
    } else {
      setvolume(true);
      vidref.current.muted = false;
    }
  };
  return (
    <>
      <div className="ContainerOFModal">
        <div className="maincontainer">
          <video className="videoHere" ref={vidref} autoPlay loop muted>
            <source src={sourceFile} type="video/mp4" />
          </video>
          <div className="buttonareaOne">
            <div className="playBtn">
              <button
                onClick={() => {
                  dispatch(OpenPlayer());
                  dispatch(CloseModal());
                }}
              >
                <i className="fas fa-play" />
                Play
              </button>
              <button
                onClick={() => {
                  dispatch(DataForMyList(MovieInfo));
                  setshowCheck(!showCheck);
                }}
              >
                {showCheck ? (
                  <i class="fas fa-check" />
                ) : (
                  <i className="fas fa-plus" />
                )}
                My List
              </button>
            </div>
            <div className="clickSpeaker">
              <button onClick={PauseOrPlay}>
                {show ? (
                  <i className="fas fa-play player" />
                ) : (
                  <i className="fas fa-pause-circle" />
                )}
              </button>
              <button onClick={MuteOrUnMute}>
                {volume ? (
                  <i class="fas fa-volume-up" />
                ) : (
                  <i className="fas fa-volume-mute" />
                )}
              </button>
            </div>
          </div>
          <div className="descAreaOne">
            <h1>{MovieInfo.name}</h1>
            <p>{MovieInfo.overview}</p>
          </div>
        </div>
        <button
          className="endModal"
          onClick={() => {
            dispatch(CloseModal());
            dispatch(DeleteDataModal());
          }}
        >
          X
        </button>
      </div>
    </>
  );
}

export default NewModal;
