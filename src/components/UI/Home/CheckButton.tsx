import React, { useState } from "react";
import { Button, DatePicker } from "antd";
import { IQuestionCheck } from "@/types/system";

interface ICheckButtonProps {
  data: IQuestionCheck;
}
const CheckButton: React.FC<ICheckButtonProps> = ({ data }) => {
  const handleClick = () => {
    console.log("başla", data);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
      }}
    >
      <Button
        style={{
          width: 180,
          height: 60,
          backgroundColor: "#4a148c",
          color: "white",
          fontSize: 23,
          fontWeight: "bold",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleClick}
      >
        Başla
      </Button>
    </div>
  );
};

export default CheckButton;
