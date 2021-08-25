import Navigation from "./Navigation";
import SignUPFooter from "./SignUPFooter";
import paymentLOGO from "../../FrontPage/images/paymentLOGO.png";
import { Link } from "react-router-dom";
import "./Payment.css";
function Payment() {
  return (
    <>
      <Navigation />
      <div className="positioncontainer">
        <div className="centerElementPayment">
          <div className="iconLock">
            <span className="circleAroundLock">
              <i className="fas fa-lock" />
            </span>
          </div>
          <div className="textMessage">
            <div className="paymentStep">
              <small>
                STEP <strong>3</strong> of <strong>3</strong>
              </small>
            </div>
            <div className="paymentHead">
              <strong>Set up your Payment</strong>
            </div>
            <div className="paymentMessage">
              <span>
                Your membership starts <br /> as soon as you set up <br />
                payment.
              </span>
              <br />
              <strong>
                No commitments. <br /> Cancel online at any <br />
                time.
              </strong>
            </div>
          </div>
          <div className="securelock">
            <small>
              Secure Server <i className="fas fa-lock goldenLock" />
            </small>
          </div>
          <div className="paymentGateWayButton">
            <Link
              to="/paymentGateway"
              className="paymentBtn"
              // onClick={() => {
              //   window.location.href = "/paymentGateway";
              // }}
            >
              <div className="btnRight">
                <span>Credit or Debit Card</span>
                <img
                  src={paymentLOGO}
                  alt="paymentLogos"
                  srcset=""
                  className="paymentLogos"
                />
              </div>
              <div className="btnLeft">
                <i className="fas fa-chevron-right" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <SignUPFooter />
    </>
  );
}

export default Payment;
