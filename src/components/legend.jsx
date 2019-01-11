import React, { Component } from "react";

const Legend = () => {
  return (
    <div>
      <h4>Legend:</h4>
      <p>
        <span className="badge-warning">
          Over 33% of recommended daily intake.
        </span>
      </p>
      <p>
        <span className="badge-danger">
          Over 100% of recommended daily intake.
        </span>
      </p>
    </div>
  );
};

export default Legend;
