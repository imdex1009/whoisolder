import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to="/play">
      <div className="button">Play</div>
    </Link>
  );
}

export default Button;
