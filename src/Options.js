import React from "react";

function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className={`options`}>
      {questions.options.map((options, index) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={options}
          disabled={hasAnswered}
        >
          {options}
        </button>
      ))}
    </div>
  );
}

export default Options;
