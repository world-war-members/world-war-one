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
    <div
      style={{
        backgroundColor: "#CAFAC8",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Header />
      <QuestionCheck sendData={sendData} />
      <CheckButton data={question} />
    </div>
  );
};

export default Home;
