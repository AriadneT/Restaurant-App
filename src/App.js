import React, { Component } from "react";
import Summary from "./components/summary";
import Counters from "./components/counters";
import Legend from "./components/legend";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        amount: 0,
        energy: 0,
        addedEnergy: 6,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 12,
        sugar: 0,
        addedSugar: 32,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 1,
        type: "drink",
        display: true,
        name: "Adelholzener Apfelschorle 0,5 l"
      },
      {
        id: 2,
        amount: 0,
        energy: 0,
        addedEnergy: 6,
        fat: 0,
        addedFat: 7,
        saturatedFat: 0,
        addedSaturatedFat: 13,
        carbohydrate: 0,
        addedCarbohydrate: 5,
        sugar: 0,
        addedSugar: 14,
        protein: 0,
        addedProtein: 18,
        salt: 0,
        addedSalt: 6,
        type: "drink",
        display: true,
        name: "Bio Milch 0,25 l"
      },
      {
        id: 3,
        amount: 0,
        energy: 0,
        addedEnergy: 3,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 5,
        sugar: 0,
        addedSugar: 14,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 0,
        type: "drink",
        display: true,
        name: "Bio Schorle Apfel 0,2 l"
      },
      {
        id: 4,
        amount: 0,
        energy: 0,
        addedEnergy: 0,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 0,
        sugar: 0,
        addedSugar: 0,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 0,
        type: "drink",
        display: true,
        name: "Café small"
      },
      {
        id: 5,
        amount: 0,
        energy: 0,
        addedEnergy: 0,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 0,
        sugar: 0,
        addedSugar: 0,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 0,
        type: "drink",
        display: true,
        name: "Café regular"
      },
      {
        id: 6,
        amount: 0,
        energy: 0,
        addedEnergy: 0,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 0,
        sugar: 0,
        addedSugar: 0,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 0,
        type: "drink",
        display: true,
        name: "Café grande"
      },
      {
        id: 7,
        amount: 0,
        energy: 0,
        addedEnergy: 3,
        fat: 0,
        addedFat: 5,
        saturatedFat: 0,
        addedSaturatedFat: 12,
        carbohydrate: 0,
        addedCarbohydrate: 2,
        sugar: 0,
        addedSugar: 5,
        protein: 0,
        addedProtein: 6,
        salt: 0,
        addedSalt: 2,
        type: "drink",
        display: true,
        name: "Cappuccino small"
      },
      {
        id: 8,
        amount: 0,
        energy: 0,
        addedEnergy: 5,
        fat: 0,
        addedFat: 7,
        saturatedFat: 0,
        addedSaturatedFat: 17,
        carbohydrate: 0,
        addedCarbohydrate: 3,
        sugar: 0,
        addedSugar: 8,
        protein: 0,
        addedProtein: 9,
        salt: 0,
        addedSalt: 3,
        type: "drink",
        display: true,
        name: "Cappuccino regular"
      },
      {
        id: 9,
        amount: 0,
        energy: 0,
        addedEnergy: 6,
        fat: 0,
        addedFat: 10,
        saturatedFat: 0,
        addedSaturatedFat: 24,
        carbohydrate: 0,
        addedCarbohydrate: 4,
        sugar: 0,
        addedSugar: 10,
        protein: 0,
        addedProtein: 13,
        salt: 0,
        addedSalt: 4,
        type: "drink",
        display: true,
        name: "Cappuccino grande"
      },
      {
        id: 10,
        amount: 0,
        energy: 0,
        addedEnergy: 3,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 6,
        sugar: 0,
        addedSugar: 17,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 0,
        type: "drink",
        display: true,
        name: "Capri-Sun Pure Tropical 0,2l"
      },
      {
        id: 11,
        amount: 0,
        energy: 0,
        addedEnergy: 5,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 10,
        sugar: 0,
        addedSugar: 30,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 0,
        type: "drink",
        display: true,
        name: "Coca-Cola Classic 0,25l"
      }
    ]
  };

  handleIncrement = item => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(item);
    counters[index] = { ...item };
    counters[index].energy =
      counters[index].energy + counters[index].addedEnergy;
    counters[index].fat = counters[index].fat + counters[index].addedFat;
    counters[index].saturatedFat =
      counters[index].saturatedFat + counters[index].addedSaturatedFat;
    counters[index].carbohydrate =
      counters[index].carbohydrate + counters[index].addedCarbohydrate;
    counters[index].sugar = counters[index].sugar + counters[index].addedSugar;
    counters[index].protein =
      counters[index].protein + counters[index].addedProtein;
    counters[index].salt = counters[index].salt + counters[index].addedSalt;
    counters[index].amount++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.amount = c.energy = c.fat = c.saturatedFat = c.carbohydrate = c.sugar = c.protein = c.salt = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = item => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(item);
    counters[index] = { ...item };
    if (counters[index].amount > 0) {
      counters[index].energy =
        counters[index].energy - counters[index].addedEnergy;
      counters[index].fat = counters[index].fat - counters[index].addedFat;
      counters[index].saturatedFat =
        counters[index].saturatedFat - counters[index].addedSaturatedFat;
      counters[index].carbohydrate =
        counters[index].carbohydrate - counters[index].addedCarbohydrate;
      counters[index].sugar =
        counters[index].sugar - counters[index].addedSugar;
      counters[index].protein =
        counters[index].protein - counters[index].addedProtein;
      counters[index].salt = counters[index].salt - counters[index].addedSalt;
      counters[index].amount--;
    }
    this.setState({ counters });
  };

  getFood = () => {
    const counters = this.state.counters.map(c => {
      console.log(c.type);
      if (c.type === "food") {
        c.display = true;
      } else {
        c.display = false;
      }
      return c;
    });
    this.setState({ counters });
  };

  getDrinks = () => {
    const counters = this.state.counters.map(c => {
      console.log(c.type);
      if (c.type === "drink") {
        c.display = true;
      } else {
        c.display = false;
      }
      return c;
    });
    this.setState({ counters });
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
          totalFat={
            this.state.counters.reduce(
              (total, counters) => total + counters.fat,
              0
            ) + "%"
          }
          totalSaturatedFat={
            this.state.counters.reduce(
              (total, counters) => total + counters.saturatedFat,
              0
            ) + "%"
          }
          totalCarbohydrate={
            this.state.counters.reduce(
              (total, counters) => total + counters.carbohydrate,
              0
            ) + "%"
          }
          totalSugar={
            this.state.counters.reduce(
              (total, counters) => total + counters.sugar,
              0
            ) + "%"
          }
          totalProtein={
            this.state.counters.reduce(
              (total, counters) => total + counters.protein,
              0
            ) + "%"
          }
          totalSalt={
            this.state.counters.reduce(
              (total, counters) => total + counters.salt,
              0
            ) + "%"
          }
        />
        <main className="container">
          <Legend />
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onFood={this.getFood}
            onDrink={this.getDrinks}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
