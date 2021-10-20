import React from "react";

function HeaderResult({ result, setResult }) {
  return (
    <>
      {result ? (
        <div className="header great">GREAT! ^^</div>
      ) : (
        <div className="header cheer">CHEER UP T.T</div>
      )}
    </>
  );
}

export default HeaderResult;
