import React, { useState, Fragment } from "react";

function PrimaryButton() {
  const [text, setText] = useState("On");

  function handleClick() {
    setText(text === "On" ? "Off" : "On");
  }

  return (
    <Fragment>
      <h2 data-testid="primary-button">{text}</h2>
      <button onClick={handleClick} test_id="primary">
        Primary Button
      </button>
    </Fragment>
  );
}

export default PrimaryButton;
