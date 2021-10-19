import React from "react";
import HeaderResult from "./HeaderResult";

function Header({ header, setHeader, result, setResult, score }) {
  return (
    <div className="headerContainer">
      <div className="header-part">
        {header ? (
          <div className="header">WHO IS OLDER?</div>
        ) : (
          <HeaderResult result={result} setResult={setResult} />
        )}
      </div>
      <div className="scorePlay">
        <span>SCORE {score}</span>
      </div>
    </div>
  );
}

export default Header;
