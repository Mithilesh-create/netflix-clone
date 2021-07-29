import React from "react";
import "./Navbar.css";
import logo from "../images/dot.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="mainarea">
        <div className="logohere">
          <img
            src={logo}
            width={150}
            height={55}
            alt="logo"
            className="logoactive"
          />
        </div>
        <div className="navigatehere">
          <div className="correctarea">
            <div className="dropdownhere">
              <select className="drop">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
            <div className="signuphere">
              <button className="buttonBeauty">
                <Link to="/login" className="linke">
                  Sign In
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
