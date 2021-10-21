import React from "react";
import "../pages/Play.css";

function PeopleBirth({ birth, answer }) {
  return (
    <>
      <div className={answer.birth === birth ? "birth green" : "birth red"}>
        <span className={answer.birth === birth ? "green" : "red"}>
          {birth}
        </span>
      </div>
    </>
  );
}

export default PeopleBirth;
