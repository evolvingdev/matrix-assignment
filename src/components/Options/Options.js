import React, { useState, useEffect } from "react";
import "./Options.css";
const optionsStyle = {
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    height: "35%",
    justifyContent: "space-evenly",
  },
  optionsParent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  optionInput: {
    width: "500px",
  },
  radioStyle: {
    fontSize: "121px",
  },
  submitButton: {
    width: "150px",
    height: "35px",
    padding: "10px",
    backgroundColor: "#334155",
    borderRadius: "5px",
    color: "white",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  buttonContiner: {
    width: "200px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
function Options(props) {
  const [value, setValue] = useState(
    props &&
      props.currentQuestion[0] &&
      props.currentQuestion[0].Options[0] &&
      props.currentQuestion[0].Options[0].a
  );
  const [checked, setChecked] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const checkSol = () => {
    const correctAnswer =
      props &&
      props.currentQuestion[0] &&
      props.currentQuestion[0].CorrectAnswer;
    if (value === correctAnswer) {
      setCorrectAnswerCount(correctAnswerCount + 1);
      setShowCorrectAnswer(false);
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
      setShowCorrectAnswer(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("corrAnsCount", correctAnswerCount);
  }, [correctAnswerCount]);

  return (
    <>
      <div style={optionsStyle.optionsParent}>
        <div style={optionsStyle.optionsContainer}>
          <div style={optionsStyle.optionInput}>
            {" "}
            <input
              type="radio"
              value="a"
              onClick={() => (checked ? setChecked(false) : setChecked(true))}
              onChange={(e) => setValue(e.target.value)}
              style={optionsStyle.radioStyle}
              checked={checked}
            />
            <label htmlFor="">
              {props &&
                props.currentQuestion[0] &&
                props.currentQuestion[0].Options[0] &&
                props.currentQuestion[0].Options[0].a}
            </label>
          </div>
          <div style={optionsStyle.optionInput}>
            {" "}
            <input
              type="radio"
              value="b"
              onChange={(e) => setValue(e.target.value)}
              style={optionsStyle.radioStyle}
            />
            <label htmlFor="">
              {props &&
                props.currentQuestion[0] &&
                props.currentQuestion[0].Options[1] &&
                props.currentQuestion[0].Options[1].b}
            </label>
          </div>
          <div style={optionsStyle.optionInput}>
            {" "}
            <input
              type="radio"
              value="c"
              onChange={(e) => setValue(e.target.value)}
              style={optionsStyle.radioStyle}
            />
            <label htmlFor="">
              {props &&
                props.currentQuestion[0] &&
                props.currentQuestion[0].Options[2] &&
                props.currentQuestion[0].Options[2].c}
            </label>
          </div>
          <div style={optionsStyle.optionInput}>
            {" "}
            <input
              type="radio"
              value="d"
              onChange={(e) => setValue(e.target.value)}
              style={optionsStyle.radioStyle}
            />
            <label htmlFor="">
              {props &&
                props.currentQuestion[0] &&
                props.currentQuestion[0].Options[3] &&
                props.currentQuestion[0].Options[3].d}
            </label>
          </div>
        </div>
        <div>
          {isAnswerCorrect ? "Your answer is correct" : null}
          {showCorrectAnswer
            ? `Correct Answer is ${
                props &&
                props.currentQuestion[0] &&
                props.currentQuestion[0].CorrectAnswer
              }`
            : null}
        </div>

        <div style={optionsStyle.buttonContiner}>
          <div
            style={optionsStyle.submitButton}
            onClick={() => checkSol()}
            disabled={true}
          >
            Submit Solution
          </div>
        </div>
      </div>
    </>
  );
}

export default Options;
