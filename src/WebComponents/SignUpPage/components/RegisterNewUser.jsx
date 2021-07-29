import React from "react";
import { Link } from "react-router-dom";
import "./RegisterNewUser.css";
import ProfileLogos from "./ProfileLogos";
import { useState } from "react";
function RegisterNewUser() {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="AddNewProfileArea">
        <div className="centerContainer">
          <div className="headingArea">
            <span>Add Profile</span>
            <p>Add a profile for another person watching Netflix</p>
          </div>

          <form action="" method="post" className="userAddPlay">
            <div className="userAddArea">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
                alt="profileIconHere"
                width={130}
                height={130}
                className="profileArea"
                onClick={() => {
                  setshow(!show);
                }}
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Profile Name"
                required
                spellcheck="false"
              />
              <button>Kids?</button>
            </div>
            <div className="furtherBtns">
              <button type="submit">Continue</button>
              <Link className="towiw" to="/wiw">
                <button>Cancel</button>
              </Link>
            </div>
          </form>
        </div>
        {show ? <ProfileLogos /> : null}
      </div>
    </>
  );
}

export default RegisterNewUser;
