import React, { Component } from "react";
import Item from "./item";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onFood,
      onDrink
    } = this.props;

    return (
      <div>
        <p>
          <button onClick={onDrink}>Getränke</button>
          <button onClick={onFood}>Essen</button>
        </p>
        <button onClick={onReset} className="btn btn-primary btn-small m2">
          Zurücksetzen
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
