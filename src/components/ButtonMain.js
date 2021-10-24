import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ handlePlayClick }) {
  return (
    <div className="button-container">
      <Link to="/" className="button-Link">
        <div className="button" onClick={handlePlayClick}>
          <span>Main</span>
        </div>
      </Link>
    </div>
  );
}

export default Button;
