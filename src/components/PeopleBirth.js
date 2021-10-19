import React from "react";
import "../pages/Play.css";

function PeopleBirth({ birth, answer }) {
  return (
    <>
      <div className={answer.birth === birth ? "birth green" : "birth red"}>
        <span>{birth}</span>
      </div>
    </>
  );
}

export default PeopleBirth;
