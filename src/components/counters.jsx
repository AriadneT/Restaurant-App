import React, { Component } from "react";
import Item from "./item";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onGroup } = this.props;

    return (
      <div className="row">
        <div className="col-md-6">
          <div className="btn-group">
            <button
              onClick={() => onGroup("food")}
              className="btn btn-danger btn-small"
            >
              Mittagessen/Abendessen
            </button>
            <button
              onClick={() => onGroup("breakfast")}
              className="btn btn-light btn-small"
            >
              Frühstück
            </button>
          </div>
          <div className="btn-group">
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
        </div>
        <div className="col-md-6">
          {counters.map(item => (
            <Item
              key={item.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              item={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
