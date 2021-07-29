import "./Blocks.css";
import imgone from "../images/tv.png";
import imgtwo from "../images/mobile.jpg";
import imgthree from "../images/sa.png";
import imgfour from "../images/child.png";

function Blocks() {
  return (
    <>
      <div className="contained">
        <div className="centerdivarea">
          <div className="textarea">
            <span className="title">Enjoy on your TV.</span>
            <p className="paragraph">
              Watch on smart TVs, PlayStation, <br />
              Xbox, Chromecast, Apple TV, Blu-ray <br />
              players and more.
            </p>
          </div>
          <div className="imagearea">
            <img src={imgone} alt="TvPage" id="DisplayAreaOne" width={400} height={300} />
          </div>
        </div>
      </div>
      <div className="contained">
        <div className="centerdivarea">
          <div className="imagearea">
            <img src={imgtwo} alt="TvPage" width={400} height={300} />
          </div>
          <div className="textarea">
            <span className="title">Download your shows to watch offline.</span>
            <p className="paragraph">
              Save your favourites easily and always <br /> have something to
              watch.
            </p>
          </div>
        </div>
      </div>
      <div className="contained">
        <div className="centerdivarea">
          <div className="textarea">
            <span className="title">Watch everywhere.</span>
            <p className="paragraph">
              Stream unlimited movies and TV <br /> shows on your phone, tablet,
              laptop,
              <br />
              and TV.
            </p>
          </div>
          <div className="imagearea">
            <img src={imgthree} alt="TvPage" id="DisplayAreaTwo" width={400} height={300} />
          </div>
        </div>
      </div>
      <div className="contained">
        <div className="centerdivarea">
          <div className="imagearea">
            <img src={imgfour} alt="TvPage" width={400} height={300} />
          </div>
          <div className="textarea">
            <span className="title">Create profiles for children.</span>
            <p className="paragraph">
              Send children on adventures with <br /> their favourite characters
              in a space <br /> made just for them—free with your <br />{" "}
              membership.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blocks;
