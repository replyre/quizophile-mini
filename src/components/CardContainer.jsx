const CardContainer = ({ data }) => {
  return (
    <div className="question-container">
      {data &&
        data.map((e) => {
          let options = [...e.incorrect_answers, e.correct_answer];
          return (
            <div className="question-card">
              {" "}
              <p className="question">{e.question}</p>
              <p className="options">
                {options.map((op) => (
                  <span className="option">{op}</span>
                ))}
              </p>{" "}
            </div>
          );
        })}
    </div>
  );
};

export default CardContainer;
