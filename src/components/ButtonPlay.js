import React from "react";
import { Link } from "react-router-dom";

function ButtonPlay() {
  return (
    <Link to="/play">
      <div className="button">Play</div>
    </Link>
  );
}

export default ButtonPlay;
