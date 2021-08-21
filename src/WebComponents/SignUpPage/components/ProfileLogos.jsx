import "./profileLogos.css";
import logo from "../images/dot.png";
import LogoSector from "./LogoSector";
import { profileLogosApi } from "./profileLogosApi";

function ProfileLogos() {
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
      <div className="nextContainer">
        <span>Confirm</span>
        <i className="fas fa-arrow-circle-right"></i>
      </div>
    </>
  );
}

export default ProfileLogos;
