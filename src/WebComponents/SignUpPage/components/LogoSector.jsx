import React from "react";
import { useDispatch } from "react-redux";
import { imgData } from "../../HomePage/actions/index";
function LogoSector({ profileLogoTitle, profileIcon, isClassic }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="containMainHead">
        {isClassic ? (
          <h1 className="TextTitle">The Classic</h1>
        ) : (
          <img src={profileLogoTitle} alt="imageHead" className="imageHead" />
        )}
        <div className="imageItems">
          {profileIcon.map((elm) => {
            return (
              <img
                src={elm.profileUrl}
                alt="imageHere"
                className="itemshereImages"
                width={110}
                height={110}
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
