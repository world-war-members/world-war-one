import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
type StartButtonType = {
  questionNumber: string;
  levelInfo: string;
  endpoint: string;
};
const StartButton = (props: StartButtonType) => {
  const { questionNumber, levelInfo, endpoint } = props;
  const navigate = useNavigate();
  const startQuiz = () => {
    console.log(endpoint);
    //@ts-ignore
    navigate("/quiz", { state: { endpoint } });
  };

  return (
    <Button className="start-button" size="large" onClick={startQuiz}>
      Start
    </Button>
  );
};

export default StartButton;
