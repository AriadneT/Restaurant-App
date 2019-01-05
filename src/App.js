import React, { Component } from "react";
import Summary from "./components/summary";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = item => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(item);
    counters[index] = { ...item };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = item => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(item);
    counters[index] = { ...item };
    if (counters[index].value > 0) {
      counters[index].value--;
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
          totalEnergy={this.state.counters.reduce(
            (total, counters) => total + counters.value,
            0
          )}
          totalOther={this.state.counters.filter(c => c.value).length}
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
