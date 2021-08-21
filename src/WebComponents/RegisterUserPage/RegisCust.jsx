import React from "react";
import Navigation from "./components/Navigation";
import SignUPFooter from "./components/SignUPFooter";
import "./register.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { passData } from "../HomePage/actions/index";
import { Link } from "react-router-dom";
import axios from "axios";
function RegisCust() {
  const dispatch = useDispatch();
  const [pass, setpass] = useState("");
  const [visible, setvisible] = useState(false);
  const [show, setshow] = useState(false);
  const emailValue = useSelector((state) => state.EmailData);
  const dispatchReq = () => {
    dispatch(passData(""));
    dispatch(passData(pass));
    const emailValidate = {
      user_mail: emailValue,
    };
    axios
      .post("/mailValidate", emailValidate)
      .then((res) => {
        console.log("sent email");
        if (res.data.message === "UserAbsent") {
          setvisible(false);
          window.location.href = "/RegisCust/payment";
        } else {
          setvisible(true);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      {show ? (
        <div className="whiteScreen">
          <div className="loader"></div>
          <h1 className="heading">Please Wait A Second...</h1>
          <span className="bodypara">
            You will be redirected after confirmation...
          </span>
        </div>
      ) : null}
      <Navigation />
      <div className="positioncontainer">
        {/*  */}
        {visible ? (
          <div className="warning">
            <div className="warningMessage">
              <i className="fas fa-exclamation-triangle" />
              <div className="warningMessageHere">
                <strong>Looks like that account already exists.</strong>{" "}
                <Link to="/login" className="redirectLink">
                  Sign in to that account
                </Link>{" "}
                <span>or try using a different email.</span>
              </div>
            </div>
          </div>
        ) : null}
        {/*  */}
        <div className="centerElement">
          <div className="formHeading">
            <div className="stepone">
              <small>
                STEP <strong>2</strong> of <strong>3</strong>
              </small>
            </div>
            <div className="steptwo">
              <strong>Create a password to start your membership</strong>
            </div>
            <div className="stepthree">
              <span>Just a few more steps and you're finished!</span>
              <span> We hate paperwork, too.</span>
            </div>
          </div>
          <form action="/RegisCust/payment" className="signUPform">
            <small>Email Address</small>
            <input
              type="email"
              value={emailValue}
              autoComplete="off"
              spellCheck="false"
              required
            />
            <small>Create Password</small>
            <input
              type="password"
              autoComplete="off"
              spellCheck="false"
              placeholder="Password"
              required
              onChange={(e) => {
                setpass(e.target.value);
              }}
            />
            <div className="PaymentBTN">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setshow(true);
                  dispatchReq();
                }}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <SignUPFooter />
    </>
  );
}

export default RegisCust;
