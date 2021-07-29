import "./WhoisWatching.css";
import logo from "./images/dot.png";
import { Link } from "react-router-dom";
import { UserNameApi } from "./usersasApi";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DataFromProfile, DeleteDataProfile } from "../HomePage/actions/index";
function WhoisWatching() {
  const dispatch = useDispatch();
  // const [profiles, setprofiles] = useState(UserNameApi);
  const [profileADD, setprofilesADD] = useState(false);

  useEffect(() => {
    const profileADDorREM = () => {
      if (UserNameApi.length > 4) {
        setprofilesADD(false);
      } else {
        setprofilesADD(true);
      }
    };
    profileADDorREM();
  }, []);
  return (
    <>
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
          <Link className="ManageProfileBtn">LOG OUT</Link>
        </div>
      </div>
    </>
  );
}

export default WhoisWatching;
