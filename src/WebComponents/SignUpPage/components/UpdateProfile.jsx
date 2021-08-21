import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./RegisterNewUser.css";
import ProfileLogos from "./ProfileLogos";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteDataProfile } from "../../HomePage/actions/index";
import { imgData } from "../../HomePage/actions/index";
import { useCallback } from "react";
import axioslocal from "axios";
import { useHistory } from "react-router-dom";
function UpdateProfile() {
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
  const profileUpdateData = useSelector((state) => state.ProfileLogData);
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const elm = {
    id: 2,
    profileUrl: "https://bit.ly/2XuEH0V",
  };
  return (
    <>
      <div className="AddNewProfileArea">
        <div className="centerContainer">
          <div className="headingArea">
            <span>Update Profile</span>
            <p>Update Profile for your customization on Netflix</p>
          </div>

          <form action="" method="post" className="userAddPlay">
            <div className="userAddArea">
              <img
                src={profileUpdateData.profileUrl}
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
                placeholder={profileUpdateData.Name}
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
              <button type="submit">Update</button>
              <Link
                onClick={() => {
                  dispatch(DeleteDataProfile());
                }}
                className="towiw"
                to="/wiw"
              >
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

export default UpdateProfile;
