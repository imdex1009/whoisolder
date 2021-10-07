import React from "react";
import PeopleBirth from "./PeopleBirth";

function People({ name, image, birth, header, handlePeopleClick }) {
  return (
    <>
      <img src={image} onClick={handlePeopleClick} />
      {header ? "" : <PeopleBirth birth={birth} />}
      <div>{name}</div>
    </>
  );
}

export default People;
