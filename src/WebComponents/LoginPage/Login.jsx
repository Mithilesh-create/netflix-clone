import "./Login.css";
import logo from "../FrontPage/images/dot.png";
import { Link } from "react-router-dom";
import Footer from "../FrontPage/components/Footer";
import { useState } from "react";
import "./serverLogin";
import { sendLoginServer } from "./serverLogin";
function Login() {
  const [emailVal, setemailVal] = useState("");
  const [pass, setpass] = useState("");
  return (
    <>
      <div className="containlogin">
        <div className="logonav">
          <img src={logo} alt="logo here" width={150} height={55} />
        </div>
        <div className="backimage" />
        <div className="shadesback" />
        <div className="formarea">
          <div className="allfrom">
            <div className="mainsigninarea">
              <div className="signINarea">
                <h1>Sign In</h1>
                <form method="post" action="/databasesignIN" id="formSubmisson">
                  <input
                    spellCheck="false"
                    type="email"
                    placeholder="Email Address"
                    required
                    autoComplete="off"
                    value={emailVal}
                    onChange={(e) => {
                      setemailVal(e.target.value);
                    }}
                  />
                  <input
                    spellCheck="false"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    required
                    value={pass}
                    onChange={(e) => {
                      setpass(e.target.value);
                    }}
                  />
                  <button
                    className="btnsignin"
                    type="submit"
                    onClick={() => {
                      sendLoginServer(emailVal, pass);
                    }}
                  >
                    Sign In
                  </button>
                </form>
                <div className="signinbtn">
                  <div className="other">
                    <div className="content">
                      <input type="checkbox" name="true" value="remembered" />{" "}
                      Remember me
                    </div>
                    <p className="linker">Need help?</p>
                  </div>
                </div>
              </div>
              <div className="facebookArea">
                <div className="facebook">
                  <img
                    src="https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200"
                    alt="facebook here"
                    width={15}
                    height={15}
                  />
                  <span>Login with Facebook</span>
                </div>
                <p className="questionsignup">
                  New to Netflix?
                  <span>
                    <Link to="/" id="signuparea">
                      Sign up now
                    </Link>
                  </span>
                </p>
                <span className="protection">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.<p>Learn more.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
