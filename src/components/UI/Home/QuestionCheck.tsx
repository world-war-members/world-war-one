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
      <h2
        style={{
          fontSize: 20,
          fontWeight: "bold",
          width: "100%",
          textAlign: "center"
        }}>
        Zorluk seviyesini nasıl istersiniz?
      </h2>
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
                  borderColor: "#8eabb9",
                  backgroundColor: "#fccb00",
                  borderWidth: '3px',
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  fontSize: 20,
                  borderWidth: '3px',
                  color: "white",
                  backgroundColor: "#fccb00",
                  borderColor: "white",
                }
          }
          value="beginner">
          Beginner
        </Radio.Button>
        <Radio.Button
          style={
            question.questionType === "intermediate"
              ? {
                  height: 50,
                  width: 200,
                  borderColor: "#8eabb9",
                  backgroundColor: "#f5a623",
                  borderWidth: '3px',
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  borderColor: "white",
                  backgroundColor: "#f5a623",
                  borderWidth: '3px',
                  color: "white",
                  fontSize: 20,
                }
          }
          value="intermediate">
          Intermediate
        </Radio.Button>
        <Radio.Button
          style={
            question.questionType === "advenced"
              ? {
                  height: 50,
                  width: 200,
                  borderColor: "#8eabb9",
                  backgroundColor: "#db3e00",
                  borderWidth: '3px',
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  fontSize: 20,
                  borderColor: "white",
                  backgroundColor: "#db3e00",
                  color: "white",
                  borderWidth: '3px',
                }
          }
          value="advenced">
          Advenced
        </Radio.Button>
      </Radio.Group>
      <br />
      <h2
        style={{
          fontSize: 20,
          fontWeight: "bold",
          width: "100%",
          textAlign: "center",
        }}
      >
        Kaç soru olsun?
      </h2>
      <Radio.Group
        style={{
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
                  borderColor: "#8eabb9",
                  backgroundColor: "#64b5f6",
                  borderWidth: '3px',
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  fontSize: 20,
                  borderWidth: '3px',
                  color: "white",
                  backgroundColor: "#64b5f6",
                  borderColor: "white",
                }
          }
          value="10">
          10
        </Radio.Button>
        <Radio.Button
          style={
            question.questionNumber === 15
              ? {
                  height: 50,
                  width: 200,
                  borderColor: "#8eabb9",
                  backgroundColor: "#2196f3",
                  borderWidth: '3px',
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  borderColor: "white",
                  backgroundColor: "#2196f3",
                  borderWidth: '3px',
                  color: "white",
                  fontSize: 20,
                }
          }
          value="15">
          15
        </Radio.Button>
        <Radio.Button
          style={
            question.questionNumber === 20
              ? {
                  height: 50,
                  width: 200,
                  borderColor: "#8eabb9",
                  backgroundColor: "#1976d2",
                  borderWidth: '3px',
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  fontSize: 20,
                  borderColor: "white",
                  backgroundColor: "#1976d2",
                  color: "white",
                  borderWidth: '3px',
                }
          }
          value="20">
          20
        </Radio.Button>
      </Radio.Group>
    </>
  );
};

export default QuestionCheck;
