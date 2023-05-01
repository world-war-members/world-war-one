import React, { useEffect } from "react";
import AnswerRadioGroup from "@/components/UI/Ant/DataEntry/AnswerRadioGroup";
import { useAppSelector } from "@/hooks/useStore";
import { QuestionType } from "@/assets/model/quizLevelModel";
import QuestionHeader from "./QuestionHeader";
import { useNavigate } from "react-router-dom";
const Question: React.FC = () => {
  const [gosterilen, setGosterien] = React.useState(0);
  const [userAnswer, setUserAnswer] = React.useState<string>("");
  const [answer, setAnswer] = React.useState<string[]>([]);
  const [sayac, setSayac] = React.useState(0);
  const navigate = useNavigate();
  const questionList = useAppSelector(
    (state: any) => state.questions.questionList
  );

  useEffect(() => {
    setAnswer([...answer, userAnswer]);
    if (userAnswer === questionList.questions?.[gosterilen].optCorrect) {
      setSayac(sayac + 1);
    }
    console.log(sayac);
  }, [userAnswer]);
  console.log(questionList.questions?.length);
  return (
    <div>
      <QuestionHeader
        questionHeader={questionList.questions?.[gosterilen].word}
      />
      <AnswerRadioGroup
        question={questionList.questions?.[gosterilen]}
        emitterFunction={setUserAnswer}
      />
      {/* <h1>{questionList.questions?.[gosterilen].word}</h1> */}
      {gosterilen < questionList.questions?.length - 1 ? (
        <button onClick={() => setGosterien(gosterilen + 1)}>Next</button>
      ) : (
        <button
          onClick={() => {
            navigate(
              "/quiz/result",

              {
                state: {
                  trueAnswer: sayac,
                  totalAnswer: questionList.questions?.length,
                },
              }
            );
          }}
        >
          Finish
        </button>
      )}
    </div>
  );
};

export default Question;
