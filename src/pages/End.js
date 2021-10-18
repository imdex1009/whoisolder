import React from "react";
import Button from "../components/Button";
import Score from "../components/Score";

function End({ score, setScore }) {
  const handlePlayClick = () => {
    setScore(0);
  };

  return (
    <>
      <div>YOUR SCORE IS</div>
      <Score score={score} />
      <div>
        <Button handlePlayClick={() => handlePlayClick()} />
      </div>
    </>
  );
}

export default End;
