import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.item)}
          className="btn btn-secondary btn-sm"
        >
          Add
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.item)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <span>{this.props.item.name}</span>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.amount === 0 ? "secondary" : "primary";
    return classes;
  }

  formatCount() {
    const { amount } = this.props.item;
    return amount === 0 ? "Zero" : amount;
  }
}

export default Item;
