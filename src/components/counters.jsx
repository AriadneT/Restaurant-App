import React, { Component } from "react";
import Item from "./item";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onGroup } = this.props;

    return (
      <div>
        <div className="btn-group">
          <button
            onClick={() => onGroup("food")}
            className="btn btn-danger btn-small"
          >
            Essen
          </button>
          <button
            onClick={() => onGroup("breakfast")}
            className="btn btn-light btn-small"
          >
            Frühstück
          </button>
          <button
            onClick={() => onGroup("extra")}
            className="btn btn-danger btn-small"
          >
            Extras
          </button>
          <button
            onClick={() => onGroup("drink")}
            className="btn btn-light btn-small"
          >
            Getränke
          </button>
          <button
            onClick={() => onGroup("dessert")}
            className="btn btn-danger btn-small"
          >
            Dessert
          </button>
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
