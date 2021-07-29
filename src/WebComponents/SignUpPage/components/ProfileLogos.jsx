import "./profileLogos.css";
import logo from "../images/dot.png";
// import { useState } from "react";
import LogoSector from "./LogoSector";
import { profileLogosApi } from "./profileLogosApi";

function ProfileLogos() {
  // const [profileIcon, setprofileIcon] = useState(profileLogosApi);

  return (
    <>
      <div className="LogoContainer">
        <span className="LogoHereNet">
          <img src={logo} alt="logoHere" width={135} height={60} />
        </span>
        <div className="LogoContainerHere">
          {profileLogosApi.map((elm) => {
            return <LogoSector profileLogoTitle={elm.profileUrl} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProfileLogos;
