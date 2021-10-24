import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import People from "../components/People";
import dummydata from "../api/dummydata";
import getPeople from "../api/randomApi";
import { useHistory } from "react-router-dom";

const original = dummydata.slice();

function Play({ header, setHeader, result, setResult, score, setScore }) {
  // 데이터 보존 상태
  const [people, setPeople] = useState([]);
  const [answer, setAnswer] = useState();

  let history = useHistory();

  //종료 여부 state 생성해서 End 연결

  // 맞췄을 때
  useEffect(() => {
    setTimeout(
      function () {
        const targets = getPeople(original);
        if (targets[0].birth < targets[1].birth) {
          setAnswer(targets[0]);
        } else {
          setAnswer(targets[1]);
        }
        setPeople(targets);
        setHeader(true);
      },
      score === 0 ? 0 : 500
    );
  }, [score]);
  // 틀렸을 때
  useEffect(() => {
    setTimeout(function () {
      if (result === false) {
        setHeader(true);
        history.push("/end");
        setResult(true);
      }
    }, 3000);
  }, [result]);

  const handlePeopleClick = (data) => {
    header ? setHeader(false) : setHeader(true);
    if (answer === data) {
      setScore(score + 1);
    } else setResult(false);
  };

  return (
    <>
      <div className="play-page">
        <div className="header-section">
          <Header
            header={header}
            setHeader={setHeader}
            result={result}
            setResult={setResult}
            score={score}
          />
        </div>
        <div className="people">
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
                answer={answer}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Play;
