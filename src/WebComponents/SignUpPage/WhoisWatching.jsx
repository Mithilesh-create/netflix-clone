import "./WhoisWatching.css";
import logo from "./images/dot.png";
import { Link } from "react-router-dom";
import { UserNameApi } from "./usersasApi";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  DataFromProfile,
  DeleteDataProfile,
  imgDataNum,
} from "../HomePage/actions/index";
function WhoisWatching() {
  const dispatch = useDispatch();
  const [profileADD, setprofilesADD] = useState(false);
  const [show, setshow] = useState(false);
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
  useEffect(() => {
    const profileADDorREM = () => {
      if (UserNameApi.length > 4) {
        setprofilesADD(false);
        console.log(UserNameApi.length);
      } else {
        setprofilesADD(true);
      }
    };
    profileADDorREM();
  }, []);
  //
  //
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
          {UserNameApi.map((elm) => {
            return (
              <div className="AccessArea">
                <Link
                  to="/home"
                  className="boxes"
                  onClick={() => {
                    dispatch(DeleteDataProfile());
                    dispatch(DataFromProfile(elm));
                  }}
                  key={elm.Name}
                >
                  <img
                    src={elm.profileUrl}
                    alt={elm.id}
                    width={120}
                    height={120}
                    className="ProfileHere"
                  />
                  <span>{elm.Name}</span>
                </Link>
                <span
                  className="editProfile"
                  onClick={() => {
                    dispatch(DataFromProfile(elm));
                    dispatch(imgDataNum(elm.id));
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
            <Link to="/RegisterNewUser" className="boxesAdded">
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
