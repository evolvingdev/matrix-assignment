import React, { useState } from "react";
import "./Question.css";

function Question(props) {
  console.log(props);
  return (
    <div className="questionsParent">
      {props && props.currentQuestion && props.currentQuestion[0].Question}
    </div>
  );
}

export default Question;
