import { IQuestionCheck } from "@/types/system";
import React, { useState } from "react";
import QuestionCheck from "@/components/UI/Home/QuestionCheck";
import CheckButton from "@/components/UI/Home/CheckButton";
import Header from "@/components/UI/Home/Header";
import { TimePicker } from "antd";
const Home: React.FC = () => {
  const [question, setQuestion] = useState<IQuestionCheck>({
    questionType: "beginner",
    questionNumber: 10,
  });
  const sendData = (data: IQuestionCheck): void => {
    setQuestion(data);
  };
  return (
    <>
      <Header />
      <QuestionCheck sendData={sendData} />
      <CheckButton data={question} />
    </>
  );
};

export default Home;
