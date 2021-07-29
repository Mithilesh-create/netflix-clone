import React from "react";
import { Link } from "react-router-dom";
import "./RegisterNewUser.css";
import ProfileLogos from "./ProfileLogos";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteDataProfile } from "../../HomePage/actions/index";
function UpdateProfile() {
  const profileUpdateData = useSelector((state) => state.ProfileLogData);
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
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
              <button>Kids?</button>
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
