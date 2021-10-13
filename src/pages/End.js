import React from "react";
import Button from "../components/Button";

function End({ score }) {
  return (
    <>
      <div>YOUR SCORE IS</div>
      <div>{ score }</div>
      <div>
        <Button />
      </div>
    </>
  );
}

export default End;
