import React, { useState } from "react";
import "./Accordian.css";
function Accordian({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="accordion" onClick={() => setShow(!show)}>
        <span>{question}</span>
        {show ? (
          <span>
            <i className="fas fa-times" />
          </span>
        ) : (
          <span>
            <i className="fas fa-plus" />
          </span>
        )}
      </div>
      <div className="panel">
        {show && <p className="answers"> {answer} </p>}
      </div>
    </>
  );
}

export default Accordian;
