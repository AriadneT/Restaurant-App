import React, { Component } from "react";

class Summary extends Component {
  render() {
    const {
      totalEnergy,
      totalFat,
      totalSaturatedFat,
      totalCarbohydrate,
      totalSugar,
      totalProtein,
      totalSalt
    } = this.props;

    return (
      <div className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Energy <span className={this.getEnergyClasses()}>{totalEnergy}</span>
        </span>
        <span className="navbar-brand">
          Fat <span className="bad badge-pill badge-secondary">{totalFat}</span>
        </span>
        <span className="navbar-brand">
          Saturated fat{" "}
          <span className="bad badge-pill badge-secondary">
            {totalSaturatedFat}
          </span>
        </span>
        <span className="navbar-brand">
          Carbohydrates{" "}
          <span className="bad badge-pill badge-secondary">
            {totalCarbohydrate}
          </span>
        </span>
        <span className="navbar-brand">
          Sugar{" "}
          <span className="bad badge-pill badge-secondary">{totalSugar}</span>
        </span>
        <span className="navbar-brand">
          Protein{" "}
          <span className="bad badge-pill badge-secondary">{totalProtein}</span>
        </span>
        <span className="navbar-brand">
          Salt{" "}
          <span className="bad badge-pill badge-secondary">{totalSalt}</span>
        </span>
      </div>
    );
  }

  getEnergyClasses() {
    let classes = "bad badge-pill badge-";
    let totalEnergy = this.props.totalEnergy.substring(
      0,
      this.props.totalEnergy.indexOf("%")
    );
    if (totalEnergy < 34) {
      classes += "secondary";
    } else if (totalEnergy < 100) {
      classes += "warning";
    } else {
      classes += "danger";
    }
    return classes;
  }
}

export default Summary;
