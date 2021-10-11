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
        <img src="../../main.png" />
      </div>
      <div>
        <Button />
      </div>
    </section>
  );
}

export default Main;
