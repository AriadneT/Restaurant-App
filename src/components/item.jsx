import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div style={{ display: this.props.item.display ? "block" : "none" }}>
        <span id="amount" className={this.getBadgeClasses()}>
          {this.props.item.amount}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.item)}
          className="btn btn-secondary btn-sm"
        >
          Dazugeben
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.item)}
          className="btn btn-danger btn-sm m-2"
        >
          Entfernen
        </button>
        <span className={this.getBackgroundColour()}>
          {this.props.item.name}
        </span>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.amount === 0 ? "secondary" : "primary";
    return classes;
  }

  getBackgroundColour() {
    let backgroundIndicator = "alert m-2 alert-";
    if (
      this.props.item.addedEnergy > 100 ||
      this.props.item.addedFat > 100 ||
      this.props.item.addedSaturatedFat > 100 ||
      this.props.item.addedCarbohydrate > 100 ||
      this.props.item.addedSugar > 100 ||
      this.props.item.addedProtein > 100 ||
      this.props.item.addedSalt > 100
    ) {
      backgroundIndicator += "danger";
    } else if (
      this.props.item.addedEnergy > 33.3 ||
      this.props.item.addedFat > 33.3 ||
      this.props.item.addedSaturatedFat > 33.3 ||
      this.props.item.addedCarbohydrate > 33.3 ||
      this.props.item.addedSugar > 33.3 ||
      this.props.item.addedProtein > 33.3 ||
      this.props.item.addedSalt > 33.3
    ) {
      backgroundIndicator += "warning";
    }
    return backgroundIndicator;
  }
}

export default Item;
