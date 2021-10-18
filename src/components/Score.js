import React from "react";
import "./Score.css";

function Score({ score }) {
  return (
    <>
      <div className="score">
        <span>{score}</span>
      </div>
    </>
  );
}

export default Score;
