import React from "react";

const DisplayOperation = ({ operation, values }) => {
  return (
    <>
      <div className="firstValue">{values.first}</div>
      <div className="operation">{operation}</div>
      <div className="secondValue">{values.second}</div>
    </>
  );
};

export default DisplayOperation;
