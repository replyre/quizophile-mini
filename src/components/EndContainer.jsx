import React from "react";
import endings from "../Data/endings.js";
import EndCard from "./EndCard.jsx";

const EndContainer = ({
  totalscore,
  score,
  setOpen,
  setscore,
  setTotalAnswered,
  setData,
  name,
}) => {
  let displayData = {};
  let percentage = (score / (totalscore * 10)) * 100;
  console.log(percentage);
  switch (true) {
    case percentage >= 80:
      displayData = endings[4];
      break;
    case percentage >= 60:
      displayData = endings[3];
      break;
    case percentage >= 50:
      displayData = endings[2];
      break;
    case percentage >= 30:
      displayData = endings[1];
      break;
    default:
      displayData = endings[0];
  }
  return (
    <div className="end">
      <EndCard
        displayData={displayData}
        percentage={percentage}
        setOpen={setOpen}
        setscore={setscore}
        setTotalAnswered={setTotalAnswered}
        setData={setData}
        name={name}
      />
    </div>
  );
};

export default EndContainer;
