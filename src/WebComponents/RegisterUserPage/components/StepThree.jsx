import React from "react";
import Navigation from "./Navigation";
import "./stepthree.css";
import { Link } from "react-router-dom";
import SignUPFooter from "./SignUPFooter";

function StepThree() {
  return (
    <>
      <Navigation />
      <div className="mainArea">
        <div className="mainCenterAreaThree">
          <div className="imagehereThree">
            <i className="fas fa-laptop deviceLaptop" />
            <i className="fas fa-tv deviceTV" />
            <i className="fas fa-tablet deviceTablet" />
            <i className="fas fa-mobile deviceMobile" />
          </div>
          <div className="headingThree">
            <small>
              STEP <strong>2</strong> OF <strong>3</strong>
            </small>
            <strong className="headPlanThree">
              Finish setting up your account
            </strong>
          </div>
          <div className="paraContent">
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </div>
          <Link to="/RegisCust/" className="buttonAreaThree">
            Next
          </Link>
        </div>
      </div>
      <SignUPFooter />
    </>
  );
}

export default StepThree;
