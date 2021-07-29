import React from "react";
import "./signupfooter.css";
function SignUPFooter() {
  return (
    <>
      <footer class="footcontainer SignUPFooter">
        <div class="footitems signupitems">
          <div className="areaone">
            Questions? Call <span className="linker">000-800-040-1843</span>
          </div>
          <div className="areatwo">
            <div className="areatwonew">
              <span className="linker">FAQ</span>
              <br />
              <span className="linker">Cookie Preferences</span>
            </div>
            <div className="areatwonew">
              <span className="linker">Help Centre</span>
              <br />
              <span className="linker">Corporate Information</span>
              <br />
            </div>
            <div className="areatwonew">
              <span className="linker">Terms of Use</span>
            </div>
            <div className="areatwonew">
              <span className="linker">Privacy</span>
            </div>
          </div>
          <div className="areathree">
            <div className="dropdown">
              <select className="drop signDROP">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
          <div className="areafour">Netflix India</div>
        </div>
      </footer>
    </>
  );
}

export default SignUPFooter;
