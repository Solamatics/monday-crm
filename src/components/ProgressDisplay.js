import React from "react";

const ProgressDisplay = ({ progress }) => {
  return (
    <div className="progress__display">
      <div className="progress__bar">
        <div
          style={{ width: progress + "%" }}
          className="progress__indicator"
        ></div>
      </div>
    </div>
  );
};

export default ProgressDisplay;
