import SignUPFooter from "../RegisterUserPage/components/SignUPFooter";
import Navigation from "../RegisterUserPage/components/Navigation";
import "./PaymentGateway.css";
import paymentLOGO from "../FrontPage/images/paymentLOGO.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import "./stripe";
import { stripeFunction, sendDataServer } from "./stripe";
import { emailData, passData } from "../HomePage/actions/index.js";
function PaymentGateway() {
  const [monthlyamount, setmonthlyamount] = useState(0);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [checkBox, setcheckBox] = useState(false);
  const [showWarning, setshowWarning] = useState(false);
  const [show, setshow] = useState(false);
  const PriceDataInfo = useSelector((state) => state.PriceData);
  const emailValue = useSelector((state) => state.EmailData);
  const passValue = useSelector((state) => state.PassData);
  const dispatch = useDispatch();

  useEffect(() => {
    const PriceINFO = () => {
      if (PriceDataInfo === "Mobile") {
        setmonthlyamount(199);
      } else if (PriceDataInfo === "Basic") {
        setmonthlyamount(499);
      } else if (PriceDataInfo === "Standard") {
        setmonthlyamount(649);
      } else if (PriceDataInfo === "Premium") {
        setmonthlyamount(799);
      }
    };
    PriceINFO();
    stripeFunction();
  }, [PriceDataInfo]);
  const SendData = (e) => {
    if (checkBox === true) {
      setshowWarning(false);
      sendDataServer(
        emailValue,
        passValue,
        firstName,
        lastName,
        monthlyamount,
        PriceDataInfo
      );
      dispatch(emailData(""));
      dispatch(passData(""));
    } else {
      setshowWarning(true);
      e.preventDefault();
    }
  };
  return (
    <>
      {show ? (
        <div className="whiteScreen">
          <div className="loader"></div>
          <h1 className="heading">Please Wait...</h1>
          <span className="bodypara">
            You will be redirected after confirmation...
          </span>
        </div>
      ) : null}

      <Navigation />
      <div className="positioncontainerPayment">
        <form
          action="/Gate"
          method="POST"
          className="paymentGatewayArea"
          id="formSubmisson"
        >
          <div className="headerDIV">
            <small>
              STEP <strong>3</strong> OF <strong>3</strong>
            </small>
            <span>Set up your credit or debit card</span>
            <img src={paymentLOGO} alt="" className="paymentLogoGateWay" />
          </div>
          {/*  */}
          <div className="paymentDIV">
            <div className="center_elements">
              <input
                type="text"
                className="first_name_card"
                placeholder="First Name"
                required
                autoComplete="off"
                spellCheck="false"
                value={firstName}
                onChange={(e) => {
                  setfirstName(e.target.value);
                }}
              />
            </div>
            <div className="center_elements">
              <input
                type="text"
                className="last_name_card"
                placeholder="Last Name"
                required
                autoComplete="off"
                spellCheck="false"
                value={lastName}
                onChange={(e) => {
                  setlastName(e.target.value);
                }}
              />
            </div>
            <div className="center_elements">
              <div id="payment_card"></div>
            </div>
            <div className="center_elements">
              <div id="payment_card_expiration"></div>
            </div>
            <div className="center_elements">
              <div id="payment_card_cvv"></div>
            </div>
          </div>
          {/*  */}
          <div className="subscriptionPlanDiv">
            <div className="centerDIVplan">
              <div className="subcriptInfo">
                <strong>₹ {monthlyamount}/month</strong>
                <span>{PriceDataInfo} Plan</span>
              </div>
              <div className="changeSubscript">
                <Link to="/changeplans" className="changePlans">
                  Change
                </Link>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="termsandconditionDiv">
            <small>
              Any payment above ₹ 2000 will need additional authentication.
            </small>

            <small>
              By ticking the tickbox below, you agree to our{" "}
              <a href="https://help.netflix.com/legal/termsofuse">
                Terms of Use
              </a>
              ,{" "}
              <a href="https://help.netflix.com/legal/privacy">
                Privacy Statement
              </a>
              , and that you are over 18. Netflix will automatically continue
              your membership and charge the monthly membership fee (currently ₹{" "}
              {monthlyamount}) to your payment method until you cancel. You may
              cancel at any time to avoid future charges.
            </small>

            <small
              className={`warningTerms ${showWarning && "warningTermsActive"}`}
            >
              Please agree to our terms and conditions.
            </small>
            <div className="agreeBox">
              <input
                type="checkbox"
                name="IAgree"
                id=""
                value={checkBox}
                onClick={() => {
                  setcheckBox(!checkBox);
                }}
              />
              <span>I agree</span>
            </div>
          </div>
          {/*  */}
          <button
            type="submit"
            className="startMemberShipBTN"
            onClick={(e) => {
              setshow(true);
              SendData(e);
            }}
          >
            <span>Start Membership</span>
          </button>
          {/*  */}
        </form>
      </div>
      <SignUPFooter />
    </>
  );
}

export default PaymentGateway;
