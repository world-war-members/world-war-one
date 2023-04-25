import React, { useEffect, useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Select } from "antd";
import type { SelectCommonPlacement } from "antd/es/_util/motion";
import { IQuestionCheck } from "@/types/system";
interface IQuestionCheckProps {
  sendData: (data: IQuestionCheck) => void;
}
const QuestionCheck: React.FC<IQuestionCheckProps> = ({ sendData }) => {
  const borderColor: string = '#ffffff';
  const borderColorSelected: string = '#000000';
  const borderWidth: string = '2px';
  const borderBottomWidth: string = '5px';
  const bgColors: string[] = ['#ffc107', '#ff9800', '#ff5722'];

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
                borderColor: borderColor,
                borderBottomColor: borderColorSelected,
                backgroundColor: bgColors[0],
                borderWidth: borderWidth,
                borderBottomWidth: borderBottomWidth,
                color: "white",
                fontSize: 20,
              }
              : {
                height: 50,
                width: 200,
                fontSize: 20,
                borderWidth: borderWidth,
                color: "white",
                borderColor: borderColor,
                backgroundColor: bgColors[0],
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
                borderColor: borderColor,
                borderBottomColor: borderColorSelected,
                backgroundColor: bgColors[1],
                borderWidth: borderWidth,
                borderBottomWidth: borderBottomWidth,
                color: "white",
                fontSize: 20,
              }
              : {
                height: 50,
                width: 200,
                fontSize: 20,
                borderWidth: borderWidth,
                color: "white",
                borderColor: borderColor,
                backgroundColor: bgColors[1],
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
                borderColor: borderColor,
                borderBottomColor: borderColorSelected,
                backgroundColor: bgColors[2],
                borderWidth: borderWidth,
                borderBottomWidth: borderBottomWidth,
                color: "white",
                fontSize: 20,
              }
              : {
                height: 50,
                width: 200,
                fontSize: 20,
                borderWidth: borderWidth,
                color: "white",
                borderColor: borderColor,
                backgroundColor: bgColors[2],
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
                borderColor: borderColor,
                borderBottomColor: borderColorSelected,
                backgroundColor: bgColors[0],
                borderWidth: borderWidth,
                borderBottomWidth: borderBottomWidth,
                color: "white",
                fontSize: 20,
              }
              : {
                height: 50,
                width: 200,
                fontSize: 20,
                borderWidth: borderWidth,
                color: "white",
                borderColor: borderColor,
                backgroundColor: bgColors[0],
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
                borderColor: borderColor,
                borderBottomColor: borderColorSelected,
                backgroundColor: bgColors[1],
                borderWidth: borderWidth,
                borderBottomWidth: borderBottomWidth,
                color: "white",
                fontSize: 20,
              }
              : {
                height: 50,
                width: 200,
                fontSize: 20,
                borderWidth: borderWidth,
                color: "white",
                borderColor: borderColor,
                backgroundColor: bgColors[1],
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
                borderColor: borderColor,
                borderBottomColor: borderColorSelected,
                backgroundColor: bgColors[2],
                borderWidth: borderWidth,
                borderBottomWidth: borderBottomWidth,
                color: "white",
                fontSize: 20,
              }
              : {
                height: 50,
                width: 200,
                fontSize: 20,
                borderWidth: borderWidth,
                color: "white",
                borderColor: borderColor,
                backgroundColor: bgColors[2],
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
