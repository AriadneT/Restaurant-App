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
          Energie{" "}
          <span className={this.getClasses("energy")}>{totalEnergy}</span>
        </span>
        <span className="navbar-brand">
          Fett <span className={this.getClasses("fat")}>{totalFat}</span>
        </span>
        <span className="navbar-brand">
          Gesättige Fettsäuren{" "}
          <span className={this.getClasses("saturated fat")}>
            {totalSaturatedFat}
          </span>
        </span>
        <span className="navbar-brand">
          Kohlenhydrate{" "}
          <span className={this.getClasses("carbohydrates")}>
            {totalCarbohydrate}
          </span>
        </span>
        <span className="navbar-brand">
          Zucker <span className={this.getClasses("sugar")}>{totalSugar}</span>
        </span>
        <span className="navbar-brand">
          Eiweiss{" "}
          <span className={this.getClasses("protein")}>{totalProtein}</span>
        </span>
        <span className="navbar-brand">
          Salz <span className={this.getClasses("salt")}>{totalSalt}</span>
        </span>
      </div>
    );
  }

  getClasses(label) {
    let classes = "bad badge-pill badge-";
    let total = 0;
    switch (label) {
      case "energy":
        total = this.props.totalEnergy.substring(
          0,
          this.props.totalEnergy.indexOf("%")
        );
        break;
      case "fat":
        total = this.props.totalFat.substring(
          0,
          this.props.totalFat.indexOf("%")
        );
        break;
      case "saturated fat":
        total = this.props.totalSaturatedFat.substring(
          0,
          this.props.totalSaturatedFat.indexOf("%")
        );
        break;
      case "carbohydrates":
        total = this.props.totalCarbohydrate.substring(
          0,
          this.props.totalCarbohydrate.indexOf("%")
        );
        break;
      case "sugar":
        total = this.props.totalSugar.substring(
          0,
          this.props.totalSugar.indexOf("%")
        );
        break;
      case "protein":
        total = this.props.totalProtein.substring(
          0,
          this.props.totalProtein.indexOf("%")
        );
        break;
      default:
        total = this.props.totalSalt.substring(
          0,
          this.props.totalSalt.indexOf("%")
        );
    }

    if (total < 34) {
      classes += "secondary";
    } else if (total < 100) {
      classes += "warning";
    } else {
      classes += "danger";
    }

    return classes;
  }
}

export default Summary;
