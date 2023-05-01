import React from "react";
import RadioGroup from "@/components/UI/Ant/DataEntry/RadioGroup";
import HomePageLogo from "@/components/Pages/Panel/Home/Logo";
import StartButton from "@/components/Pages/Panel/Home/StartButton";
import QuizInformationDrawer from "@/components/Pages/Panel/Home/Mobile/QuizInformationDrawer";

import {
  quizLevelOptions,
  quizQuestionNumberOptions,
} from "@/assets/model/quizLevelModel";
import {
  questionDrawerSwitcher,
  selectQuestionInfoDrawerStatus,
} from "@/features/questions/questionSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { Grid, Button } from "antd";
const { useBreakpoint } = Grid;

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const questionInfoDrawerStatus = useAppSelector(
    selectQuestionInfoDrawerStatus
  );

  const [levelInfo, setLevelInfo] = React.useState("");
  const [questionNumber, setQuestionNumber] = React.useState("");
  const screens = useBreakpoint();

  const toggleQuestionInfoDrawer = () => {
    dispatch(questionDrawerSwitcher(!questionInfoDrawerStatus));
  };

  React.useEffect(() => {
    if (!screens.xs) {
      dispatch(questionDrawerSwitcher(false));
    }
  }, [screens.xs]);

  return (
    <div className="home-page">
      <HomePageLogo />
      {!screens.xs ? (
        <>
          <RadioGroup
            options={quizLevelOptions}
            emitterFunction={setLevelInfo}
          />
          <RadioGroup
            options={quizQuestionNumberOptions}
            emitterFunction={setQuestionNumber}
          />
          <StartButton
            questionNumber={questionNumber}
            levelInfo={levelInfo}
            endpoint={
              "/api/start-quiz?level=" +
              levelInfo.toLowerCase() +
              "&questionCount=" +
              questionNumber
            }
          />
        </>
      ) : (
        <>
          <Button size="large" onClick={toggleQuestionInfoDrawer}>
            Enter Quiz Information
          </Button>
          <QuizInformationDrawer
            closeDrawer={toggleQuestionInfoDrawer}
            emitterFunction={setQuestionNumber}
            levelInfo={levelInfo}
            questionNumber={questionNumber}
          />
        </>
      )}
    </div>
  );
};

export default Home;
