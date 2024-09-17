import React from "react";

const Header = ({ totalscore, score }) => {
  return (
    <div className="header">
      <p>
        <img src="logo.svg" alt="logo" /> <span>Quiz</span>ophile
        <sup>mini</sup>
      </p>
      <p>
        <span>
          {" "}
          score {score}/{totalscore * 10}
        </span>{" "}
        <img src="more.svg" alt="more" />{" "}
      </p>
    </div>
  );
};

export default Header;
