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
  const [answer, setAnswer] = useState();

  // useEffect(() => {
  //   const targets = getPeople(original);
  //   if (targets[0].birth < targets[1].birth) {
  //     setAnswer(targets[0]);
  //   } else {
  //     setAnswer(targets[1]);
  //   }
  //   setPeople(targets);
  // }, []);


  useEffect(() => {
    if(score === 0) {
      const targets = getPeople(original);
      if (targets[0].birth < targets[1].birth) {
        setAnswer(targets[0]);
      } else {
        setAnswer(targets[1]);
      }
      setPeople(targets);
    } else {
    setTimeout(function () {
      const targets = getPeople(original);
      if (targets[0].birth < targets[1].birth) {
        setAnswer(targets[0]);
      } else {
        setAnswer(targets[1]);
      }
      setPeople(targets);
    setHeader(true)
    } , 3000)}
  }, [score]);


  const handlePeopleClick = (data) => {
    header ? setHeader(false) : setHeader(true);
    if (answer === data) {setResult(true);
    setScore(score+1)
    }
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
      <div className='people'>
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
