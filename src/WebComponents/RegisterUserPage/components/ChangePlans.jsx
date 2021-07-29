import React, { useState } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import SignUPFooter from "./SignUPFooter";
import { PriceDataSend } from "../../HomePage/actions";
import "./steptwo.css";
import { useDispatch } from "react-redux";
function ChangePlans() {
  const dispatch = useDispatch();
  const [showM, setshowM] = useState(false);
  const [showB, setshowB] = useState(true);
  const [showS, setshowS] = useState(false);
  const [showP, setshowP] = useState(false);
  const Mobile = () => {
    setshowM(!showM);
    setshowB(false);
    setshowS(false);
    setshowP(false);
  };
  const Basic = () => {
    setshowM(false);
    setshowB(!showB);
    setshowS(false);
    setshowP(false);
  };
  const Standard = () => {
    setshowM(false);
    setshowB(false);
    setshowS(!showS);
    setshowP(false);
  };
  const Premium = () => {
    setshowM(false);
    setshowB(false);
    setshowS(false);
    setshowP(!showP);
  };
  const DispatchPrice = () => {
    if (showM === true) {
      dispatch(PriceDataSend("Mobile"));
    } else if (showB === true) {
      dispatch(PriceDataSend("Basic"));
    } else if (showS === true) {
      dispatch(PriceDataSend("Standard"));
    } else if (showP === true) {
      dispatch(PriceDataSend("Premium"));
    } else {
      dispatch(PriceDataSend("Basic"));
    }
  };
  return (
    <>
      <Navigation />
      <div className="mainAreaTwo">
        <div className="mainCenterAreaTwo">
          <div className="firstMainDiv">
            <div className="headhereTwo">
              <small>
                STEP <strong>1</strong> OF <strong>3</strong>
              </small>
              <strong className="headPlan">
                Choose the plan that’s right for you.
              </strong>
            </div>
            <div className="checkareaTwo">
              <div className="innerLines">
                <span>
                  <i className="fas fa-check check" />
                </span>
                <span>Watch all you want. Advert-free.</span>
              </div>
              <div className="innerLines">
                <span>
                  <i className="fas fa-check check" />
                </span>
                <span>Recommendations just for you.</span>
              </div>
              <div className="innerLines">
                <span>
                  <i className="fas fa-check check" />
                </span>
                <span>Change or cancel your plan anytime.</span>
              </div>
            </div>
          </div>

          <div className="secondMainDiv">
            <div className="subscriptionBoxes">
              <div className="maincontainerBoxes">
                <div
                  className={`MobilePlanDiv ${showM && "MobilePlanDivACTIVE"}`}
                  onClick={Mobile}
                >
                  <strong>Mobile</strong>
                  <i className={`fas fa-sort-down ${showM && "arrowACTIVE"}`} />
                </div>
                <div
                  className={`BasicPlanDiv ${showB && "BasicPlanDivACTIVE"}`}
                  onClick={Basic}
                >
                  <strong>Basic</strong>
                  <i className={`fas fa-sort-down ${showB && "arrowACTIVE"}`} />
                </div>
                <div
                  className={`StandardPlanDiv ${
                    showS && "StandardPlanDivACTIVE"
                  }`}
                  onClick={Standard}
                >
                  <strong>Standard</strong>
                  <i className={`fas fa-sort-down ${showS && "arrowACTIVE"}`} />
                </div>
                <div
                  className={`PremiumPlanDiv ${
                    showP && "PremiumPlanDivACTIVE"
                  }`}
                  onClick={Premium}
                >
                  <strong>Premium</strong>
                  <i className={`fas fa-sort-down ${showP && "arrowACTIVE"}`} />
                </div>
              </div>
            </div>
            <div className="tableshere">
              <table className="tableDime">
                <tr className="tableshereTwo">
                  <th>Monthly price</th>
                  <td
                    className={`MobilePlan ${showM && "MobilePlanACTIVE"}`}
                    onClick={Mobile}
                  >
                    ₹199
                  </td>
                  <td
                    className={`BasicPlan ${showB && "BasicPlanACTIVE"}`}
                    onClick={Basic}
                  >
                    ₹499
                  </td>
                  <td
                    className={`StandardPlan ${showS && "StandardPlanACTIVE"}`}
                    onClick={Standard}
                  >
                    ₹649
                  </td>
                  <td
                    className={`PremiumPlan ${showP && "PremiumPlanACTIVE"}`}
                    onClick={Premium}
                  >
                    ₹799
                  </td>
                </tr>
                <tr className="tableshereTwo">
                  <th>Video quality</th>
                  <td
                    className={`MobilePlan ${showM && "MobilePlanACTIVE"}`}
                    onClick={Mobile}
                  >
                    Good
                  </td>
                  <td
                    className={`BasicPlan ${showB && "BasicPlanACTIVE"}`}
                    onClick={Basic}
                  >
                    Good
                  </td>
                  <td
                    className={`StandardPlan ${showS && "StandardPlanACTIVE"}`}
                    onClick={Standard}
                  >
                    Better
                  </td>
                  <td
                    className={`PremiumPlan ${showP && "PremiumPlanACTIVE"}`}
                    onClick={Premium}
                  >
                    Best
                  </td>
                </tr>
                <tr className="tableshereTwo">
                  <th>Resolution</th>
                  <td
                    className={`MobilePlan ${showM && "MobilePlanACTIVE"}`}
                    onClick={Mobile}
                  >
                    480p
                  </td>
                  <td
                    className={`BasicPlan ${showB && "BasicPlanACTIVE"}`}
                    onClick={Basic}
                  >
                    480p
                  </td>
                  <td
                    className={`StandardPlan ${showS && "StandardPlanACTIVE"}`}
                    onClick={Standard}
                  >
                    1080p
                  </td>
                  <td
                    className={`PremiumPlan ${showP && "PremiumPlanACTIVE"}`}
                    onClick={Premium}
                  >
                    4K+HDR
                  </td>
                </tr>
                <tr className="tableshereTwo">
                  <th className="headingTBL">Devices you can use to watch</th>
                  <tr
                    className={`MobilePlan ${showM && "MobilePlanACTIVE"}`}
                    onClick={Mobile}
                  >
                    <td>
                      <table>
                        <td>
                          <td>
                            <div className="pics">
                              <i className="fas fa-mobile" />
                              <small>Phone</small>
                            </div>
                          </td>
                        </td>
                        <tr>
                          <td>
                            <div className="pics">
                              <i className="fas fa-tablet" />
                              <small>Tablet</small>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <td
                    className={`BasicPlan ${showB && "BasicPlanACTIVE"}`}
                    onClick={Basic}
                  >
                    <table>
                      <td>
                        <td>
                          <div className="pics">
                            <i className="fas fa-mobile" />
                            <small>Phone</small>
                          </div>
                        </td>
                      </td>
                      <tr>
                        <td>
                          <div className="pics">
                            <i className="fas fa-tablet" />
                            <small>Tablet</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pics">
                            <i className="fas fa-laptop" />
                            <small>Computer</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pics">
                            <i className="fas fa-tv" />
                            <small>TV</small>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td
                    className={`StandardPlan ${showS && "StandardPlanACTIVE"}`}
                    onClick={Standard}
                  >
                    <table>
                      <td>
                        <td>
                          <div className="pics">
                            <i className="fas fa-mobile" />
                            <small>Phone</small>
                          </div>
                        </td>
                      </td>
                      <tr>
                        <td>
                          <div className="pics">
                            <i className="fas fa-tablet" />
                            <small>Tablet</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pics">
                            <i className="fas fa-laptop" />
                            <small>Computer</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pics">
                            <i className="fas fa-tv" />
                            <small>TV</small>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td
                    className={`PremiumPlan ${showP && "PremiumPlanACTIVE"}`}
                    onClick={Premium}
                  >
                    <table>
                      <td>
                        <td>
                          <div className="pics">
                            <i className="fas fa-mobile" />
                            <small>Phone</small>
                          </div>
                        </td>
                      </td>
                      <tr>
                        <td>
                          <div className="pics">
                            <i className="fas fa-tablet" />
                            <small>Tablet</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pics">
                            <i className="fas fa-laptop" />
                            <small>Computer</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pics">
                            <i className="fas fa-tv" />
                            <small>TV</small>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          {/*  */}
          <div className="thirdMainDiv">
            <div className="wrotearea">
              <small>
                HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
                subject to your internet service and device capabilities. Not
                all content is available in all resolutions. See our{" "}
                <a href="https://help.netflix.com/legal/termsofuse">
                  Terms of Use{" "}
                </a>
                for more details.
              </small>
              <br />
              <small>
                Only people who live with you may use your account. Watch on 4
                different devices at the same time with Premium, 2 with
                Standard, and 1 with Basic and Mobile.
              </small>
            </div>
          </div>
          <br />
          {/*  */}
          <div className="fourthMainDiv">
            <Link
              to="/paymentGateway"
              className="buttonArea"
              onClick={DispatchPrice}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <SignUPFooter />
    </>
  );
}

export default ChangePlans;
