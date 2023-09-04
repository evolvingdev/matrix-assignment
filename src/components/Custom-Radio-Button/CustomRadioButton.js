import React, { useState } from "react";
import "./CustomRadioButton.css";
function CustomRadioButton(props) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  
  return (
    <div className="radioContainer" onClick={handleToggle}>
      <div className={toggle ? "selected" : "notSelected"}></div>
    </div>
  );
}

export default CustomRadioButton;
