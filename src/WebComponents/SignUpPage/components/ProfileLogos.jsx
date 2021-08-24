import "./profileLogos.css";
import logo from "../images/dot.png";
import LogoSector from "./LogoSector";
import { profileLogosApi } from "./profileLogosApi";
import {CloseProfTab} from "../../HomePage/actions/index";
import { useDispatch, useSelector } from "react-redux";
function ProfileLogos() {
  const dispatch = useDispatch()
  const show = useSelector(state => state.OpenAndCloseProfile)
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
      <div className="nextContainer" onClick={() =>{
        dispatch(CloseProfTab(!show))
      }}>
        <span>Confirm</span>
        <i className="fas fa-arrow-circle-right"></i>
      </div>
    </>
  );
}

export default ProfileLogos;
