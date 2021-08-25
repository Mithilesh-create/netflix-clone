import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./RegisterNewUser.css";
import ProfileLogos from "./ProfileLogos";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imgData, OpenProfTab } from "../../HomePage/actions/index";
import { useCallback } from "react";
import axioslocal from "axios";
import { useHistory } from "react-router-dom";
import { regisUser } from "./registerProfile";
function RegisterNewUser() {
  const ImgUrl = useSelector((state) => state.ImgData);
  const show = useSelector((state) => state.OpenAndCloseProfile);
  const [profileName, setprofileName] = useState("");
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
  const elm = {
    id: 1,
    profileUrl: "https://i.imgur.com/p19PL8P.png",
  };

  return (
    <>
      <div className="AddNewProfileArea">
        <div className="centerContainer">
          <div className="headingArea">
            <span>Add Profile</span>
            <p>Add a profile for another person watching Netflix</p>
          </div>
          <form
            method="POST"
            action="#"
            id="profileSubmisson"
            className="userAddPlay"
          >
            <div className="userAddArea">
              <img
                src={
                  ImgUrl
                    ? ImgUrl.profileUrl
                    : "https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
                }
                alt="profileIconHere"
                width={130}
                height={130}
                className="profileArea"
                onClick={() => {
                  dispatch(OpenProfTab(!show));
                }}
              />
              <input
                type="text"
                placeholder="Profile Name"
                required
                spellcheck="false"
                onChange={(e) => {
                  setprofileName(e.target.value);
                }}
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
              <button
                type="submit"
                onClick={() => {
                  regisUser(profileName, ImgUrl.profileUrl);
                  const nullProfile = null;
                  dispatch(imgData(nullProfile));
                }}
              >
                Continue
              </button>
              <Link className="towiw" to="/wiw">
                <button
                  onClick={() => {
                    const nullProfile = null;
                    dispatch(imgData(nullProfile));
                  }}
                >
                  Cancel
                </button>
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
