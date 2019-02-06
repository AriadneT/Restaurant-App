import React from "react";

const Legend = () => {
  return (
    <div>
      <h4>Erklärungen:</h4>
      <p className="row">
        <span className="bad badge-pill badge-warning col-md-6">
          Mehr als 33% der empfohlenen täglichen Einnahme für 1 Person
        </span>
        <span className="bad badge-pill badge-danger col-md-6">
          Mehr als 100% der empfohlenen täglichen Einnahme für 1 Person
        </span>
      </p>
    </div>
  );
};

export default Legend;
