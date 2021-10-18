import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ handlePlayClick }) {
  return (
    <Link to="/play" className="button-Link">
      <div className="button-container">
        <div className="button" onClick={handlePlayClick}>
          <span>Play</span>
        </div>
      </div>
    </Link>
  );
}

export default Button;
