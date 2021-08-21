import React from "react";
import { useDispatch } from "react-redux";
import { profileLogosApi } from "./profileLogosApi";
import { imgData } from "../../HomePage/actions/index";
function LogoSector({ profileLogoTitle }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="containMainHead">
        <img src={profileLogoTitle} alt="imageHead" className="imageHead" />
        <div className="imageItems">
          {profileLogosApi.map((elm) => {
            return (
              <img
                src={elm.profileUrl}
                alt="imageHere"
                className="itemshereImages"
                width={130}
                height={130}
                tabIndex="-1"
                onClick={() => {
                  dispatch(imgData(elm));
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LogoSector;
