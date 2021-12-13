import React from "react";
import Card from "../components/card";
// import { useLocation } from "react-router-dom";

const Success = () => {
  const userDatas = JSON.parse(localStorage.getItem("userData"));
  console.log(userDatas);

  return (
    <div>
      <h1>Registered Student:</h1>
      <Card userDatas={userDatas} />
    </div>
  );
};

export default Success;
