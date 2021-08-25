import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NetVideo from "../FrontPage/images/Official Trailer _ Season 1 _ LUCIFER.mp4";
import "./VideoPlayer.css";
import { ClosePlayer } from "../HomePage/actions/index";

function VideoPlayer() {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();
  const MovieInfo = useSelector((state) => state.MovieData);
  const Vidref = useRef(null);
  const StopVideo = () => {
    if (show === true) {
      Vidref.current.pause();
    } else {
      Vidref.current.play();
    }
  };
  const ForwardSec = () => {
    Vidref.current.getCurrentTime += 10;
  };
  return (
    <>
      <div className="mainareaVideoPlayer">
        <div className="playarea">
          <span
            className="goBack"
            onClick={() => {
              dispatch(ClosePlayer());
            }}
          >
            <i class="fas fa-arrow-left" />
          </span>
          <video
            className="netflixVideoPlayer"
            ref={Vidref}
            autoPlay
            loop
            muted
            data-autovideo="true"
            onClick={() => {
              setshow(!show);
              StopVideo();
            }}
          >
            <source src={NetVideo} type="video/mp4" />
          </video>
          <div className="containControls">
            <div className="sliderarea"></div>
            <div className="buttonareahere">
              <div className="firstsetbtns">
                {show ? (
                  <i
                    className="fas fa-pause-circle pausePlay"
                    onClick={() => {
                      setshow(!show);
                      StopVideo();
                    }}
                  />
                ) : (
                  <i
                    className="fas fa-play pausePlay"
                    onClick={() => {
                      setshow(!show);
                      StopVideo();
                    }}
                  />
                )}
                <span className="secDelay">
                  10
                  <i className="fas fa-undo-alt" />
                </span>
                <span className="secForward">
                  <i className="fas fa-redo-alt" onClick={() => ForwardSec()} />
                  10
                </span>
                <i className="fas fa-volume-up" />
                <span>{MovieInfo.name}</span>
              </div>
              <div className="secondsetbtns">
                <i className="far fa-question-circle" />
                <i className="fas fa-step-forward" />
                <i className="fas fa-clone" />
                <i className="fas fa-closed-captioning" />
                <i className="fas fa-expand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
