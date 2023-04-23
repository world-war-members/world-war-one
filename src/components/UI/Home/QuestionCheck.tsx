import React, { useEffect, useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Select } from "antd";
import type { SelectCommonPlacement } from "antd/es/_util/motion";
import { IQuestionCheck } from "@/types/system";
interface IQuestionCheckProps {
  sendData: (data: IQuestionCheck) => void;
}
const QuestionCheck: React.FC<IQuestionCheckProps> = ({ sendData }) => {
  const [question, setQuestion] = useState<IQuestionCheck>({
    questionType: "beginner",
    questionNumber: 10,
  });

  const questionTypeCheck = (e: RadioChangeEvent) => {
    setQuestion({ ...question, questionType: e.target.value });
  };
  const questionNumberCheck = (e: RadioChangeEvent) => {
    setQuestion({ ...question, questionNumber: parseInt(e.target.value) });
  };
  useEffect(() => {
    sendData(question);
  }, [question]);
  return (
    <>
      <Radio.Group
        style={{
          width: "100%",
          textAlign: "center",
        }}
        size="large"
        value={question.questionType}
        onChange={questionTypeCheck}
      >
        <Radio.Button
          style={
            question.questionType === "beginner"
              ? {
                  height: 50,
                  width: 200,
                  borderWidth: 3,
                  borderColor: "#FFD600",
                  backgroundColor: "#FFD600",
                  color: "white",
                  fontSize: 25,
                }
              : {
                  height: 50,
                  width: 200,
                  borderWidth: 3,
                  fontSize: 20,
                }
          }
          value="beginner"
        >
          Beginner
        </Radio.Button>
        <Radio.Button
          style={
            question.questionType === "intermediate"
              ? {
                  height: 50,
                  width: 200,
                  borderBottomWidth: 3,
                  borderTopWidth: 3,
                  borderColor: "#FF7C00",
                  backgroundColor: "#FF7C00",
                  color: "white",
                  fontSize: 25,
                }
              : {
                  height: 50,
                  width: 200,
                  borderBottomWidth: 3,
                  borderTopWidth: 3,
                  fontSize: 20,
                }
          }
          value="intermediate"
        >
          Intermediate
        </Radio.Button>
        <Radio.Button
          style={
            question.questionType === "advenced"
              ? {
                  height: 50,
                  width: 200,
                  borderWidth: 3,
                  borderColor: "red",
                  backgroundColor: "#ff0004",
                  color: "white",
                  fontSize: 25,
                }
              : {
                  height: 50,
                  width: 200,
                  borderWidth: 3,
                  fontSize: 20,
                }
          }
          value="advenced"
        >
          Advenced
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Radio.Group
        style={{
          marginTop: 10,
          width: "100%",
          textAlign: "center",
        }}
        size="large"
        value={question.questionNumber}
        onChange={questionNumberCheck}
      >
        <Radio.Button
          style={
            question.questionNumber === 10
              ? {
                  height: 50,
                  width: 200,
                  borderWidth: 3,
                  borderColor: "#7BDCB5",
                  backgroundColor: "#7BDCB5",
                  color: "white",
                }
              : {
                  height: 50,
                  width: 200,
                  borderWidth: 3,
                }
          }
          value="10"
        >
          10
        </Radio.Button>
        <Radio.Button
          style={
            question.questionNumber === 15
              ? {
                  height: 50,
                  width: 200,
                  borderBottomWidth: 3,
                  borderTopWidth: 3,
                  borderColor: "#8ed1fc",
                  backgroundColor: "#8ed1fc",
                  color: "white",
                }
              : {
                  height: 50,
                  width: 200,
                  borderBottomWidth: 3,
                  borderTopWidth: 3,
                }
          }
          value="15"
        >
          15
        </Radio.Button>
        <Radio.Button
          style={
            question.questionNumber === 20
              ? {
                  height: 50,
                  width: 200,
                  borderWidth: 3,
                  borderColor: "#0693e3",
                  backgroundColor: "#0693e3",
                  color: "white",
                }
              : {
                  height: 50,
                  width: 200,
                  borderWidth: 3,
                }
          }
          value="20"
        >
          20
        </Radio.Button>
      </Radio.Group>
    </>
  );
};

export default QuestionCheck;
