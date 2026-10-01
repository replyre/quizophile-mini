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
        <abbr title="created by replyre" className="shake-console">
          <a href="https://github.com/replyre" target="_blank">
            <img src="more.svg" alt="more" />
          </a>
        </abbr>{" "}
      </p>
    </div>
  );
};

export default Header;
