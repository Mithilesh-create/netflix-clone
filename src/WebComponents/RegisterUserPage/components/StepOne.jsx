import React from "react";
import Navigation from "./Navigation";
import "./stepone.css";
import { Link } from "react-router-dom";
import SignUPFooter from "./SignUPFooter";
function StepOne() {
  return (
    <>
      <Navigation />
      <div className="mainArea">
        <div className="mainCenterArea">
          <div className="imagehere">
            <i className="far fa-check-circle" />
          </div>
          <div className="headhere">
            <small>
              STEP <strong>1</strong> OF <strong>3</strong>
            </small>
            <strong className="headPlan">Choose your plan.</strong>
          </div>
          <div className="checkarea">
            <div className="innerLines">
              <span>
                <i className="fas fa-check" />
              </span>
              <span>
                No commitments, cancel at any <br />
                time.
              </span>
            </div>
            <div className="innerLines">
              <span>
                <i className="fas fa-check" />
              </span>
              <span>
                Everything on Netflix for one low <br />
                price.
              </span>
            </div>
            <div className="innerLines">
              <span>
                <i className="fas fa-check" />
              </span>
              <span>No ads and no extra fees. Ever.</span>
            </div>
          </div>
          <Link to="/RegisCust/steptwo" className="buttonArea">
            Next
          </Link>
        </div>
      </div>
      <SignUPFooter/>
    </>
  );
}

export default StepOne;
