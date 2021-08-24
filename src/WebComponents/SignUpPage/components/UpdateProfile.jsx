import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./RegisterNewUser.css";
import ProfileLogos from "./ProfileLogos";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteDataProfile } from "../../HomePage/actions/index";
import { imgData, OpenProfTab } from "../../HomePage/actions/index";
import { useCallback } from "react";
import axioslocal from "axios";
import { useHistory } from "react-router-dom";
import { updateProfiledata } from "./updateProfiledata";
function UpdateProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const show = useSelector((state) => state.OpenAndCloseProfile);
  const [profileName, setprofileName] = useState("");
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
  useEffect(() => {
    const valueNull = null;
    dispatch(imgData(valueNull));
  }, [dispatch]);
  const elm = {
    id: 1,
    profileUrl: "https://bit.ly/2XuEH0V",
  };
  const profileUpdateData = useSelector((state) => state.ProfileLogData);
  const ImgUrl = useSelector((state) => state.ImgData);

  return (
    <>
      <div className="AddNewProfileArea">
        <div className="centerContainer">
          <div className="headingArea">
            <span>Update Profile</span>
            <p>Update Profile for your customization on Netflix</p>
          </div>

          <form method="POST" className="userAddPlay" id="profileSubmisson">
            <div className="userAddArea">
              <img
                src={
                  ImgUrl
                    ? ImgUrl.profileUrl
                    : profileUpdateData.profile_user_url
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
                placeholder={
                  profileUpdateData.assoc_name
                }
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
                  updateProfiledata(
                    profileName,
                    ImgUrl.profileUrl,
                    profileUpdateData._id
                  );
                }}
              >
                Update
              </button>
              <Link
                onClick={() => {
                  dispatch(DeleteDataProfile());
                }}
                className="towiw"
                to="/wiw"
              >
                <button
                  onClick={() => {
                    const PrevElme = {
                      profileUrl:
                        profileUpdateData
                          .profile_user_url,
                    };
                    dispatch(imgData(PrevElme));
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

export default UpdateProfile;
