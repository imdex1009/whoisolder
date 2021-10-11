import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Score from "../components/Score";
import People from "../components/People";
import dummydata from "../api/dummydata";
import getPeople from "../api/randomApi";

const original = dummydata;

function Play({ header, setHeader, result, setResult, score, setScore }) {
  // 데이터 보존 상태
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(getPeople(original));
  }, []);

  const handlePeopleClick = (data) => {
    header ? setHeader(false) : setHeader(true);
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
        {people.map((data) => {
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
