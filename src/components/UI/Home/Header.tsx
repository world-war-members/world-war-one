import React from "react";
import { DatePicker } from "antd";

const Header: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            borderWidth: 3,
            borderColor: "#673ab7",
            borderStyle: "solid",
            borderRadius: 150,
          }}
        >
          {" "}
        </div>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: 40,
            textAlign: "center",
            fontFamily: "Helvetica",
          }}
        >
          WORLD WAR ONE
        </h1>
      </div>
    </>
  );
};

export default Header;
