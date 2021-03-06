import "./profileLogos.css";
import logo from "../../FrontPage/images/dot.png";
import LogoSector from "./LogoSector";
import { MoneyHeist, Disenchantment, BJ ,LIS} from "./profileHeaderApi";
import {
  MoneyHeistIconApi,
  DisenchantmentIconApi,
  ClassicIconApi,
  BJIconApi,
  LISIconApi
} from "./profileLogosApi";
import { CloseProfTab } from "../../HomePage/actions/index";
import { useDispatch, useSelector } from "react-redux";
function ProfileLogos() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.OpenAndCloseProfile);
  return (
    <>
      <div className="LogoContainer">
        <span className="LogoHereNet">
          <img src={logo} alt="logoHere" width={135} height={60} />
        </span>
        <div className="LogoContainerHere">
          <LogoSector profileIcon={ClassicIconApi} isClassic />
          <LogoSector
            profileLogoTitle={MoneyHeist.profileUrl}
            profileIcon={MoneyHeistIconApi}
          />
          <LogoSector
            profileLogoTitle={LIS.profileUrl}
            profileIcon={LISIconApi}
          />
          <LogoSector
            profileLogoTitle={Disenchantment.profileUrl}
            profileIcon={DisenchantmentIconApi}
          />
          <LogoSector
            profileLogoTitle={BJ.profileUrl}
            profileIcon={BJIconApi}
          />
        </div>
      </div>
      <div
        className="nextContainer"
        onClick={() => {
          dispatch(CloseProfTab(!show));
        }}
      >
        <span>Confirm</span>
        <i className="fas fa-arrow-circle-right"></i>
      </div>
    </>
  );
}

export default ProfileLogos;
