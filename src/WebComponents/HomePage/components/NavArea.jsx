import "./NavArea.css";
import logo from "../../FrontPage/images/dot.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function NavArea() {
  const ProfData = useSelector((state) => state.ProfileLogData);
  const [backGround, setbackGround] = useState(false);
  const BackEffect = () => {
    if (window.scrollY > 100) {
      setbackGround(true);
    } else {
      setbackGround(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", BackEffect);
    return () => {
      window.removeEventListener("scroll", BackEffect);
    };
  }, []);
  return (
    <>
      <div className="containedNavArea">
        <div className={`Navarea ${backGround && "Nav_dark"}`}>
          <div className="logoherehome">
            <img src={logo} alt="logohere" width={120} height={40} />
          </div>
          <div className="navigatehome">
            <Link to="/home" className="head">
              Home
            </Link>
            <Link to="/home/tvshows" className="head">
              Tv Shows
            </Link>
            <Link to="/home/movies" className="head">
              Movies
            </Link>
            <Link to="/home/recentlyadded" className="head">
              Recently Added
            </Link>
            <Link to="/home/mylist" className="head">
              My list
            </Link>
          </div>
          <div className="searchHome">
            <div className="inputarea">
              <input
                type="text"
                className="Inputhere"
                spellcheck="false"
                placeholder="Enter Your search"
              />
            </div>
            <div className="HomeProfile">
              <Link to="/wiw" className="toLogOut">
                <img
                  src={ProfData.profile_user_url}
                  alt="whoiswatching"
                  width={40}
                  height={40}
                />
                <span>{ProfData.assoc_name}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavArea;
