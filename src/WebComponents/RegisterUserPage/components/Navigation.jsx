import React from "react";
import "./Navi.css";
import { Link } from "react-router-dom";
import logo from "../../FrontPage/images/dot.png";
function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className="logoArea">
          <img src={logo} alt="logohere" width={160} height={70} />
        </div>
        <div className="signInArea">
          <Link className="signInAreaLink" to="/login">
            Sign In
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navigation;
