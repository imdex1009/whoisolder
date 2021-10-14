import React from "react";
import Button from "../components/Button";

function End({ score, setScore }) {
  const handlePlayClick = () => {
    setScore(0);
  };

  return (
    <>
      <div>YOUR SCORE IS</div>
      <div>{score}</div>
      <div>
        <Button handlePlayClick={() => handlePlayClick()} />
      </div>
    </>
  );
}

export default End;
