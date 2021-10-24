import React from "react";
import ButtonMain from "../components/ButtonMain";
import Score from "../components/Score";
import "./End.css";

function End({ score, setScore }) {
  const handlePlayClick = () => {
    setScore(0);
  };

  return (
    <>
      <div className="score-text">YOUR SCORE IS</div>
      <Score score={score} />
      <div>
        <ButtonMain handlePlayClick={() => handlePlayClick()} />
      </div>
    </>
  );
}

export default End;
