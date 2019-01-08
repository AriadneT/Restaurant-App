import React, { Component } from "react";
import Summary from "./components/summary";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        energy: 0,
        addedEnergy: 6,
        name: "Adelholzener Apfelschorle 0,5 l"
      },
      { id: 2, energy: 0, addedEnergy: 6, name: "Bio Milch 0,25 l" },
      { id: 3, energy: 0, addedEnergy: 3, name: "Bio Schorle Apfel 0,2 l" },
      { id: 4, energy: 0, addedEnergy: 0, name: "Café small" }
    ]
  };

  handleIncrement = item => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(item);
    counters[index] = { ...item };
    counters[index].energy =
      counters[index].energy + counters[index].addedEnergy;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.energy = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = item => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(item);
    counters[index] = { ...item };
    if (counters[index].energy > 0) {
      counters[index].energy =
        counters[index].energy - counters[index].addedEnergy;
    }
    this.setState({ counters });
  };

  handleEnergyAddition = counters => {
    var totalEnergy = 0;
    for (var i = 0; i < counters.length; i++) {
      totalEnergy += counters[i].value;
    }
    return totalEnergy;
  };

  render() {
    return (
      <React.Fragment>
        <Summary
          totalEnergy={
            this.state.counters.reduce(
              (total, counters) => total + counters.energy,
              0
            ) + "%"
          }
          totalOther={this.state.counters.filter(c => c.energy).length}
        />
        <div>
          <h4>Legend:</h4>
          <p>
            <span className="badge-warning">
              Over 33% of recommended daily intake.
            </span>
          </p>
          <p>
            <span className="badge-danger">
              Over 100% of recommended daily intake.
            </span>
          </p>
        </div>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
