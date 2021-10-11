import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Score from "../components/Score";
import People from "../components/People";
import dummydata from "../api/dummydata";

function Play({ header, setHeader, result, setResult, score, setScore }) {
  const [people, setPeople] = useState();

  useEffect(() => {
    const random = dummydata.slice(0, 2);
    if (random[0].birth < random[1].birth) {
      setPeople(random[0]);
    } else {
      setPeople(random[1]);
    }
  }, []);

  const handlePeopleClick = (data) => {
    setHeader(false);
    if (people === data) setResult(true);
    else setResult(false);
  };

  return (
    <>
      <div>
        <Header
          header={header}
          setHeader={setHeader}
          result={result}
          setResult={setResult}
        />
      </div>
      <div>
        <Score score={score} />
      </div>
      <div>
        {/* 여기서 2개 반복문 */}
        {dummydata.slice(0, 2).map((data) => {
          return (
            <People
              key={data.id}
              name={data.name}
              image={data.image}
              birth={data.birth}
              header={header}
              handlePeopleClick={() => {
                handlePeopleClick(data);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default Play;
