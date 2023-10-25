import React from "react";

function Progress({ question, index, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={question.length} />
      <p>
        Question <strong>{index + 1}</strong> / {question.length}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
