import React from "react";
import PeopleBirth from "./PeopleBirth";

function People({ name, image, birth, header, handlePeopleClick }) {
  return (
    <div>
      {header ? <img src={image} onClick={handlePeopleClick} /> : <img src={image} /> }
      {header ? "" : <PeopleBirth birth={birth} />}
      <div className='name'>{name}</div>
    </div>
  );
}

export default People;
