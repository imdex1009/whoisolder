import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonMain from "../components/ButtonMain";
import Score from "../components/Score";
import "./End.css";

function End({ score, setScore }) {
  // const handlePlayClick = () => {
  //   setScore(0);
  // };

  const state = useSelector(state => state.auxReducer);
  const {score} = state;
  const dispatch = useDispatch()
  const handlePlayClick = (score) => {
    dispatch(무언가(score))
  }

  return (
    <>
      <div className="score-text">YOUR SCORE IS</div>
      <Score 
      // score={score} 
      />
      <div>
        <ButtonMain handlePlayClick={() => handlePlayClick()} />
      </div>
    </>
  );
}

export default End;
