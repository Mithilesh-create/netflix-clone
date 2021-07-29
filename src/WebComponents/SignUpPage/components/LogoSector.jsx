import React from "react";
// import { useState } from "react";
import { profileLogosApi } from "./profileLogosApi";
function LogoSector({ profileLogoTitle }) {
  // const [profileIcon, setprofileIcon] = useState(profileLogosApi);
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
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LogoSector;
