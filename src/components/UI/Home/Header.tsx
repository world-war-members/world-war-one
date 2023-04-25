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
        <img src="./assets/logo-dark.svg" style={{width: '12rem', marginTop: '3rem'}} alt="logo"/>
        <h1
          style={{
            fontSize: 32,
            textAlign: "center",
            fontFamily: "Helvetica",
            color: 'white'
          }}
        >
          Word War One
        </h1>
      </div>
    </>
  );
};

export default Header;
