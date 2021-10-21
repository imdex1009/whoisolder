import React from "react";
import Button from "../components/Button";

function Main({ header, setHeader }) {
  return (
    <section>
      <div className="header">
        <span>WHO IS OLDER?</span>
      </div>
      <div>
        <img className="img" src="../../main.png" />
      </div>
      <div className="mainbutton">
        <Button />
      </div>
    </section>
  );
}

export default Main;
