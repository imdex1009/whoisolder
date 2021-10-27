import React from "react";
import { useSelector } from "react-redux";
import "./Score.css";

function Score() {
  const state = useSelector(state => state.auxReducer)
  const {score} = state;

  return (
    <>
      <div className="score">
        <span>{score}</span>
      </div>
    </>
  );
}

export default Score;
