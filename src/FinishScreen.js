import React from "react";

function FinishScreen({ totalPoints, points, highscore, dispatch }) {
  const percentage = Math.ceil((points / totalPoints) * 100);
  let emoji;
  if (percentage === 100) emoji = "🎇";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "🙂";
  if (percentage < 50) emoji = "😟";

  return (
    <>
      <p className="result">
        {emoji} Your scored <strong>{points}</strong> out of {totalPoints} (
        {percentage}
        %)
      </p>
      <p className="highscore"> (Highscore {highscore}) </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
