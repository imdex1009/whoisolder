import React from "react";
import PeopleBirth from "./PeopleBirth";

function People({ name, image, birth, header, handlePeopleClick }) {
  return (
    <div>
      <img src={image} onClick={handlePeopleClick} />
      {header ? "" : <PeopleBirth birth={birth} />}
      <div className='name'>{name}</div>
    </div>
  );
}

export default People;
