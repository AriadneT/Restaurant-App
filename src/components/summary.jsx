import React, { Component } from "react";

class Summary extends Component {
  render() {
    const { totalEnergy } = this.props;

    return (
      <div className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Energy{" "}
          <span className="bad badge-pill badge-secondary">{totalEnergy}</span>
        </span>
        <span className="navbar-brand">
          Fat <span className="bad badge-pill badge-secondary">0</span>
        </span>
        <span className="navbar-brand">
          Saturated fat{" "}
          <span className="bad badge-pill badge-secondary">0</span>
        </span>
        <span className="navbar-brand">
          Carbohydrates{" "}
          <span className="bad badge-pill badge-secondary">0</span>
        </span>
        <span className="navbar-brand">
          Sugar <span className="bad badge-pill badge-secondary">0</span>
        </span>
        <span className="navbar-brand">
          Protein <span className="bad badge-pill badge-secondary">0</span>
        </span>
        <span className="navbar-brand">
          Salt <span className="bad badge-pill badge-secondary">0</span>
        </span>
      </div>
    );
  }
}

export default Summary;
