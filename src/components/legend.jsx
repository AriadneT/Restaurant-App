import React, { Component } from "react";

const Legend = () => {
  return (
    <div>
      <h4>Erklärungen:</h4>
      <p>
        <span className="bad badge-pill badge-warning">
          Mehr als 33% der empfohlenen täglichen Einnahme für 1 Person
        </span>
      </p>
      <p>
        <span className="bad badge-pill badge-danger">
          Mehr als 100% der empfohlenen täglichen Einnahme für 1 Person
        </span>
      </p>
    </div>
  );
};

export default Legend;
