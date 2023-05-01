import React from "react";
import { useLocation } from "react-router-dom";

const Result: React.FC = () => {
  const location = useLocation();
  const { trueAnswer, totalAnswer } = location.state;
  console.log(totalAnswer);
  return (
    <div>
      <h1>Result</h1>
      <h1>Doğru sayısı : {trueAnswer}</h1>
      <h1>Yanlış sayısı : {totalAnswer - trueAnswer}</h1>
    </div>
  );
};

export default Result;
