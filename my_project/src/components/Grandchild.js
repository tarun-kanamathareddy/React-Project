import React from "react";
import { useContext } from "react";
import { Data } from "../App";

const Grandchild = () => {
  const EmpData = useContext(Data);

  return (
    <>
      <h1>Ŧ₳ʁųň₷</h1>
      {EmpData.map((item) => {
        return (
          <>
            <h2>{item.name}</h2>
            <h3>{item.age}</h3>
          </>
        );
      })}
    </>
  );
};

export default Grandchild;
