const CardContainer = ({
  data,
  setData,
  setscore,
  score,
  setTotalAnswered,
  totalAnswered,
}) => {
  function decodeHTMLEntities(text) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  }
  const handleClick = (index, op) => {
    let questionsData = [...data];
    setTotalAnswered((prev) => prev + 1);
    questionsData[index] = { ...questionsData[index], selected_answer: op };
    setData(questionsData);
    if (questionsData[index].correct_answer === op) setscore(score + 10);
  };
  console.log(data);
  return (
    <div className="question-container">
      {data &&
        data.map((e, index) => {
          return (
            <div
              className={`question-card ${
                e.selected_answer !== ""
                  ? e.selected_answer === e.correct_answer
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
            >
              <p className="question">{decodeHTMLEntities(e.question)}</p>
              <p
                className={`options ${
                  e.selected_answer !== "" ? "disabled" : ""
                }`}
              >
                {e.options.map((op) => (
                  <span
                    className={`option ${
                      e.correct_answer === op && e.selected_answer !== ""
                        ? "correct"
                        : ""
                    } ${
                      e.selected_answer === op && e.correct_answer !== op
                        ? "incorrect"
                        : ""
                    } `}
                    onClick={() => handleClick(index, op)}
                  >
                    {decodeHTMLEntities(op)}
                  </span>
                ))}
              </p>{" "}
            </div>
          );
        })}
    </div>
  );
};

export default CardContainer;
