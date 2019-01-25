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
      onDrink,
      onExtras
    } = this.props;

    return (
      <div>
        <div className="btn-group">
          <button onClick={onFood} className="btn btn-danger btn-small">
            Essen
          </button>
          <button className="btn btn-light btn-small">Frühstück</button>
          <button onClick={onExtras} className="btn btn-danger btn-small">
            Extras
          </button>
          <button onClick={onDrink} className="btn btn-light btn-small">
            Getränke
          </button>
          <button className="btn btn-danger btn-small">Dessert</button>
        </div>
        <p />
        <p>
          <button onClick={onReset} className="btn btn-primary btn-small m2">
            Zurücksetzen
          </button>
        </p>
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
