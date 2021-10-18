import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

function Main({ header, setHeader }) {
  return (
    <section>
      <div>
        <Header header={header} setHeader={setHeader} />
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
