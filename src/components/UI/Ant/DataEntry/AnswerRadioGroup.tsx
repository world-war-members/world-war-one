import React, { useEffect } from "react";
import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { QuestionType } from "@/assets/model/quizLevelModel";

type RadioGroupPropType = {
  question: QuestionType;
  emitterFunction: React.Dispatch<React.SetStateAction<string>>;
};

const AnswerRadioGroup = ({
  question,
  emitterFunction,
}: RadioGroupPropType) => {
  const [value, setValue] = React.useState("");
  const getProperRadioItem = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
    emitterFunction(value);
  };

  return (
    <Radio.Group onChange={getProperRadioItem} value={value}>
      <Radio value={question?.optA}>{question?.optA}</Radio>
      <Radio value={question?.optB}>{question?.optB}</Radio>
      <Radio value={question?.optC}>{question?.optC}</Radio>
      <Radio value={question?.optD}>{question?.optD}</Radio>
    </Radio.Group>
  );
};

export default AnswerRadioGroup;
