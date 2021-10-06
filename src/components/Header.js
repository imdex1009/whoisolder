import React from "react";
import HeaderResult from "./HeaderResult";

function Header({ header, setHeader, result, setResult }) {
  return (
    <>
      {header ? (
        <div>WHO IS OLDER?</div>
      ) : (
        <HeaderResult result={result} setResult={setResult} />
      )}
    </>
  );
}

export default Header;
