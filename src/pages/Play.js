import React from "react";
import Header from "../components/Header";
import Score from "../components/Score";
import People from "../components/People";
import dummydata from "../api/dummydata";

function Play({ header, setHeader, result, setResult, score, setScore }) {
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
            />
          );
        })}
      </div>
    </>
  );
}

export default Play;
