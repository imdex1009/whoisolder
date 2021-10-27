import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";


function Main() {
  const state = useSelector(state => state.auxReducer);
  const {header} = state;
  console.log(state)
  
  return (
    <section>
      <div className="header">
        <span>WHO IS OLDER?{header}</span>
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
