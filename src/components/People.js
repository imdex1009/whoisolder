import React from "react";
import PeopleBirth from "./PeopleBirth";
import "../pages/Play.css";

function People({ name, image, birth, header, handlePeopleClick, answer }) {
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
