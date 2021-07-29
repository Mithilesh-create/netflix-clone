import Navbar from "./Navbar";
import "./Background.css";
import { useDispatch } from "react-redux";
import { emailData } from "../../HomePage/actions/index";
import { useState } from "react";
function Background() {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const dispatchReq = () => {
    dispatch(emailData(""));
    dispatch(emailData(email));
  };
  return (
    <>
      <div className="backgroundarea">
        <Navbar />
        <div className="backdeco" />
        <div className="shades" />
        <div className="message">
          <div className="partone">
            <div className="headMain">
              <span>
                Unlimited movies, TV <br /> shows and more.
              </span>
              <p>Watch anywhere. Cancel anytime.</p>
            </div>
          </div>
          <div className="parttwo">
            <div className="para">
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>

            <form action="/RegisCust/stepone" className="emailsignup">
              <div className="emailinparea">
                <input
                  spellCheck="false"
                  type="email"
                  className="inputText"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>
              <div className="getstarted">
                <button
                  type="submit"
                  className="gettingstarted"
                  onClick={() => {
                    dispatchReq();
                  }}
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
