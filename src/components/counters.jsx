import React, { Component } from "react";
import Item from "./item";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-small m2">
          Reset
        </button>
        {counters.map(item => (
          <Item
            key={item.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
