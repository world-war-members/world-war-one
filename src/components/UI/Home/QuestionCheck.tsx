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
          textAlign: "center",
        }}
      >
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
                  borderWidth: "3px",
                  borderColor: "#FFD600",
                  backgroundColor: "#FFD600",
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  borderWidth: "3px",
                  fontSize: 18,
                  borderColor: "white",
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
                  borderBottomWidth: "3px",
                  borderTopWidth: "3px",
                  borderColor: "#f68c70",
                  backgroundColor: "#f68c70",
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  borderBottomWidth: "3px",
                  borderTopWidth: "3px",
                  borderColor: "white",
                  fontSize: 18,
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
                  borderWidth: "3px",
                  borderColor: "#f55c7a",
                  backgroundColor: "#f55c7a",
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  borderWidth: "3px",
                  fontSize: 18,
                  borderColor: "white",
                }
          }
          value="advenced"
        >
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
                  borderWidth: "3px",
                  borderColor: "#7BDCB5",
                  backgroundColor: "#7BDCB5",
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  borderWidth: "3px",
                  borderColor: "white",
                  fontSize: 16,
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
                  borderBottomWidth: "3px",
                  borderTopWidth: "3px",
                  borderColor: "#8ed1fc",
                  backgroundColor: "#8ed1fc",
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  borderBottomWidth: "3px",
                  borderTopWidth: "3px",
                  borderColor: "white",
                  fontSize: 16,
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
                  borderWidth: "3px",
                  borderColor: "#0693e3",
                  backgroundColor: "#0693e3",
                  color: "white",
                  fontSize: 20,
                }
              : {
                  height: 50,
                  width: 200,
                  borderWidth: "3px",
                  borderColor: "white",
                  fontSize: 16,
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
