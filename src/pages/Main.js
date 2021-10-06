import React from "react";
import Header from "../components/Header";
import ButtonPlay from "../components/ButtonPlay";

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
        <ButtonPlay />
      </div>
    </section>
  );
}

export default Main;
