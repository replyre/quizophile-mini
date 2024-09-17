import React from "react";

const EndCard = ({
  displayData,
  percentage,
  setOpen,
  setscore,
  setTotalAnswered,
  setData,
  name,
}) => {
  function reset() {
    document.querySelector(".question-container").style.display = "flex";
    setOpen(true);
    setscore(0);
    setTotalAnswered(0);
    setData([]);
  }
  return (
    <div className="end-container">
      <p className="grade">
        <span className="outer-cicle">
          <span>{displayData.status}</span>
        </span>
        <div>
          <span style={{ fontSize: "22px" }}>
            {displayData.designation} {name}
          </span>
          <p style={{ textAlign: "center" }}>
            Score: {Math.round(percentage)}%
          </p>
        </div>
      </p>
      <div>
        <p className="quote">"{displayData.statement}"</p>
        <p className="speaker">-{displayData.sayer}</p>
      </div>
      <button class="btn-class-name" onClick={() => reset()}>
        <span>Restart</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
        </svg>
      </button>
    </div>
  );
};

export default EndCard;
