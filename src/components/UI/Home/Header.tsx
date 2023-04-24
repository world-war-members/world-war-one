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
        <img src="./assets/logo.png" style={{width: '12rem'}} alt="logo"/>
        <h1
          style={{
            fontSize: 32,
            textAlign: "center",
            fontFamily: "Helvetica",
            color: 'rgb(53 26 12)'
          }}
        >
          Word War One
        </h1>
      </div>
    </>
  );
};

export default Header;
