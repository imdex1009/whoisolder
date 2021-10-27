import React from "react";
import PeopleBirth from "./PeopleBirth";
import "../pages/Play.css";
import { useSelector } from "react-redux";

function People({ name, image, birth, handlePeopleClick, answer }) {
  const state = useSelector((state) => {
    return state.auxReducer;
  });
  const { header } = state;

  return (
    <div className="people-container">
      {header ? (
        <img className="people_image" src={image} onClick={handlePeopleClick} />
      ) : (
        <img className="people_image" src={image} />
      )}
      {header ? "" : <PeopleBirth birth={birth} answer={answer} />}
      <div className="name">{name}</div>
    </div>
  );
}

export default People;
