import React from "react";
import { Link } from "react-router-dom";

function Button({ handlePlayClick }) {
  return (
    <Link to="/play">
      <div className="button" onClick={handlePlayClick}>
        Play
      </div>
    </Link>
  );
}

export default Button;
