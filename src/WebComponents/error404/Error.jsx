import React from "react";
import Navigation from "../RegisterUserPage/components/Navigation";
import "./Error.css";
function Error() {
  return (
    <>
      <div className="backgroundarea logmessage">
        <Navigation />
        <div className="backdeco" />
        <div className="shades" />
        <div className="message">
          <div className="centralLogOut errorMsg">
            <h1>404</h1>
            <span>Oops! Page not found.</span>
            <p>
              Sorry, but the page you are looking for is not found.Please, make
              sure you have typed the correct URL
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
