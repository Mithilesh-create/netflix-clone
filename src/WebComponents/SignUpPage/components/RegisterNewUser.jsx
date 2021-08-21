import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./RegisterNewUser.css";
import ProfileLogos from "./ProfileLogos";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { imgData } from "../../HomePage/actions/index";
import { useCallback } from "react";
import axioslocal from "axios";
import { useHistory } from "react-router-dom";

function RegisterNewUser() {
  const history = useHistory();
  const callCookieAuth = useCallback(() => {
    const callCookie = async () => {
      try {
        const res = await axioslocal.get("/cookieVerification", {
          withCredentials: true,
        });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (error) {
        console.log(error);
        history.push("/login");
      }
    };
    callCookie();
  }, [history]);
  useEffect(() => {
    callCookieAuth();
  }, [callCookieAuth]);
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);
  const elm = {
    id: 2,
    profileUrl: "https://bit.ly/2XuEH0V",
  };
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
              <button
                onClick={() => {
                  dispatch(imgData(elm));
                }}
                type="button"
              >
                Kids?
              </button>
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
