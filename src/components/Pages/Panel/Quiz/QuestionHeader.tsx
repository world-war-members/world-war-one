import React from "react";

type HeaderType = {
  questionHeader: string;
};

const QuestionHeader = ({ questionHeader }: HeaderType) => {
  return (
    <div>
      <h1>{questionHeader}</h1>
    </div>
  );
};

export default QuestionHeader;
