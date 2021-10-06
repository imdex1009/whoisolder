import React from "react";
import PeopleBirth from "./PeopleBirth";

function People({ name, image, birth, header }) {
  return (
    <>
      <img src={image} />
      {header ? "" : <PeopleBirth birth={birth} />}
      <div>{name}</div>
    </>
  );
}

export default People;
