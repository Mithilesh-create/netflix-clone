import "./WhoisWatching.css";
import logo from "./images/dot.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  DataFromProfile,
  DeleteDataProfile,
  imgDataNum,
  imgData,
} from "../HomePage/actions/index";
function WhoisWatching() {
  const ProfileData = useSelector((state) => state.ProfileLogData);
  const dispatch = useDispatch();
  const [profileADD, setprofilesADD] = useState(false);
  const [show, setshow] = useState(false);
  const [Profiles, setProfiles] = useState([]);
  const history = useHistory();

  const callCookieAuth = useCallback(() => {
    const callCookie = async () => {
      try {
        const res = await axios.get("/cookieVerification", {
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
  //
  //
  //
  //
  useEffect(() => {
    const ProfileDataReceive = async () => {
      const ProfileDataArr = await axios.get("/profileData");
      await setProfiles(ProfileDataArr.data.user_profiles);
      dispatch(DataFromProfile(ProfileDataArr.data.user_profiles[0]));
      return ProfileDataArr;
    };
    ProfileDataReceive();
  }, [dispatch]);
  //
  //
  //
  const callProfilePush = useCallback(() => {
    const ProfileDataPush = async () => {
      if(ProfileData===undefined){
        console.log("yes");
      }
      if (ProfileData._id === null || ProfileData._id === undefined) {
        dispatch(DataFromProfile(Profiles[0]));
      }
    };
    ProfileDataPush();
  }, [dispatch, ProfileData, Profiles]);
  useEffect(() => {
    callProfilePush();
  }, [callProfilePush]);
  //
  useEffect(() => {
    const profileADDorREM = () => {
      if (Profiles.length > 4) {
        setprofilesADD(false);
      } else {
        setprofilesADD(true);
      }
    };
    profileADDorREM();
  }, [Profiles.length]);
  //
  return (
    <>
      {show ? (
        <div className="logoutScreen">
          <div className="logContainer">
            <h1 className="headMsg">
              Do you want to Logout from all Devices ?
            </h1>
            <div className="logBtnArea">
              <Link to="/logout" className="logBtnAreaOne" id="logBtnOne">
                Logout
              </Link>
              <Link to="/logoutall" className="logBtnAreaTwo" id="logBtnTwo">
                Logout from all devices
              </Link>
            </div>
          </div>
        </div>
      ) : null}
      <div className="whoiswatching">
        <div className="navarea">
          <img src={logo} alt="logohere" width={150} height={60} />
        </div>
        <div className="containTwoElems">
          <Link to="/home" className="chevronhere">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1 className="ProfileTitle">Who's watching?</h1>
        </div>
        <div className="whoisuser">
          {Profiles.map((elm) => {
            return (
              <div className="AccessArea">
                <Link
                  to="/home"
                  className="boxes"
                  onClick={() => {
                    dispatch(DeleteDataProfile());
                    dispatch(DataFromProfile(elm));
                  }}
                  key={elm.assoc_name}
                >
                  <img
                    src={elm.profile_user_url}
                    alt={elm.id}
                    width={120}
                    height={120}
                    className="ProfileHere"
                  />
                  <span>{elm.assoc_name}</span>
                </Link>
                <span
                  className="editProfile"
                  onClick={() => {
                    dispatch(DataFromProfile(elm));
                    dispatch(imgData(elm.profile_user_url));
                    dispatch(imgDataNum(elm._id));
                  }}
                >
                  <Link to="updateProfile" className="toProfileEdit">
                    <i className="far fa-edit" />
                  </Link>
                </span>
              </div>
            );
          })}
          {profileADD ? (
            <Link
              to="/RegisterNewUser"
              className="boxesAdded"
              onClick={() => {
                const nullProfile = null;
                dispatch(imgData(nullProfile));
              }}
            >
              <div className="adduser">
                <i className="fas fa-plus-circle" />
              </div>
              <span>AddUser</span>
            </Link>
          ) : null}
        </div>
        <div className="manageProfiles">
          <Link
            className="ManageProfileBtn"
            onClick={() => {
              setshow(true);
            }}
          >
            LOG OUT
          </Link>
        </div>
      </div>
    </>
  );
}

export default WhoisWatching;
