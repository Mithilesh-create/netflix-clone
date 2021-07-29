import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Accordian from "./Accordian";
import "./Faq.css";
import { emailData } from "../../HomePage/actions/index";
import { questions } from "./faqQNA";
function Faq() {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const dispatchReq = () => {
    dispatch(emailData(""));
    dispatch(emailData(email));
  };
  return (
    <div className="FaqSection">
      <div className="faqareahere">
        <div className="area">
          <div className="headinghere">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="accordianhere">
            {/*  */}
            {questions.map((elm) => {
              return <Accordian key={elm.id} {...elm} />;
            })}

            {/*  */}
          </div>
        </div>
        <div className="signUPhere">
          <div className="paragraph">
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
                onClick={() => {
                  dispatchReq();
                }}
                className="gettingstarted"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Faq;
