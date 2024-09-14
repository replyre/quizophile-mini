import React from "react";

const Header = () => {
  return (
    <div className="header">
      <p>
        <img src="logo.svg" alt="logo" /> <span>Quiz</span>ophile
      </p>
      <p>
        <span> score 10/100</span> <img src="more.svg" alt="more" />{" "}
      </p>
    </div>
  );
};

export default Header;
