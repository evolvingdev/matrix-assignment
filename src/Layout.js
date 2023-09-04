import React, { useState, useEffect } from "react";
import "./Layout.css";
import Question from "./components/Question/Question";
import { AllQuestions } from "./AllQuestions";
import Options from "./components/Options/Options";
import Countdown from "react-countdown";
import renderer from "./components/Timer/Renderer";

function Layout() {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const currQues = AllQuestions.slice(currentPage, currentPage + 1);
    setCurrentQuestion(currQues);
    localStorage.setItem("currQues", JSON.stringify(currQues));
    localStorage.setItem("currPage", JSON.stringify(currentPage));
  }, [currentPage]);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="parent">
      <div className="header">
        Correct Answer Score : {localStorage.getItem("corrAnsCount")}
        <Countdown date={Date.now() + 120000} renderer={renderer} />
        {/* <Timer expiryTimestamp={time} /> */}
        <div className="changeQuestion">
          <div
            className={currentPage === 0 ? "disabled" : "prevButton"}
            onClick={() =>
              currentPage > 0 ? setCurrentPage(currentPage - 1) : null
            }
          >
            Prev
          </div>{" "}
          <div
            className={
              currentPage === AllQuestions.length - 1
                ? "disabled"
                : "nextButton"
            }
            onClick={() =>
              currentPage < AllQuestions.length - 1
                ? setCurrentPage(currentPage + 1)
                : null
            }
          >
            Next
          </div>
        </div>
      </div>
      <div className="mainScreen">
        {" "}
        <div className="question">
          <Question currentQuestion={currentQuestion} />
        </div>
        <div className="options">
          <Options currentQuestion={currentQuestion} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
