import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <span>{this.props.item.name}</span>
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
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.energy === 0 ? "warning" : "primary"; // or this.state.count?
    return classes;
  }

  formatCount() {
    const { energy } = this.props.item;
    return energy === 0 ? "Zero" : energy + "%";
  }
}

export default Item;
