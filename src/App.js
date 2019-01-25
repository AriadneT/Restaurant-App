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
      },
      {
        id: 12,
        amount: 0,
        energy: 0,
        addedEnergy: 8,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 16,
        sugar: 0,
        addedSugar: 42,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 0,
        type: "drink",
        display: true,
        name: "Coca-Cola Classic 0,4l"
      },
      {
        id: 13,
        amount: 0,
        energy: 0,
        addedEnergy: 11,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 20,
        sugar: 0,
        addedSugar: 59,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 0,
        type: "drink",
        display: true,
        name: "Coca-Cola Classic 0,5l"
      },
      {
        id: 14,
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
        addedSalt: 1,
        type: "drink",
        display: true,
        name: "Coca-Cola Zero Sugar 0,25l"
      },
      {
        id: 15,
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
        addedSalt: 2,
        type: "drink",
        display: true,
        name: "Coca-Cola Zero Sugar 0,4l"
      },
      {
        id: 16,
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
        addedSalt: 3,
        type: "drink",
        display: true,
        name: "Coca-Cola Zero Sugar 0,5l"
      },
      {
        id: 17,
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
        addedSugar: 25,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 0,
        type: "drink",
        display: true,
        name: "Fanta 0,25l"
      },
      {
        id: 18,
        amount: 0,
        energy: 0,
        addedEnergy: 8,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 15,
        sugar: 0,
        addedSugar: 40,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 1,
        type: "drink",
        display: true,
        name: "Fanta 0,4l"
      },
      {
        id: 19,
        amount: 0,
        energy: 0,
        addedEnergy: 10,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 19,
        sugar: 0,
        addedSugar: 50,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 1,
        type: "drink",
        display: true,
        name: "Fanta 0,5l"
      },
      {
        id: 20,
        amount: 0,
        energy: 0,
        addedEnergy: 8,
        fat: 0,
        addedFat: 8,
        saturatedFat: 0,
        addedSaturatedFat: 18,
        carbohydrate: 0,
        addedCarbohydrate: 8,
        sugar: 0,
        addedSugar: 23,
        protein: 0,
        addedProtein: 10,
        salt: 0,
        addedSalt: 3,
        type: "drink",
        display: true,
        name: "Heißes Kakaogetränk small"
      },
      {
        id: 21,
        amount: 0,
        energy: 0,
        addedEnergy: 16,
        fat: 0,
        addedFat: 16,
        saturatedFat: 0,
        addedSaturatedFat: 35,
        carbohydrate: 0,
        addedCarbohydrate: 17,
        sugar: 0,
        addedSugar: 47,
        protein: 0,
        addedProtein: 20,
        salt: 0,
        addedSalt: 7,
        type: "drink",
        display: true,
        name: "Heißes Kakaogetränk grande"
      },
      {
        id: 22,
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
        addedSalt: 5,
        type: "drink",
        display: true,
        name: "Latte Macchiato regular"
      },
      {
        id: 23,
        amount: 0,
        energy: 0,
        addedEnergy: 8,
        fat: 0,
        addedFat: 12,
        saturatedFat: 0,
        addedSaturatedFat: 30,
        carbohydrate: 0,
        addedCarbohydrate: 5,
        sugar: 0,
        addedSugar: 13,
        protein: 0,
        addedProtein: 16,
        salt: 0,
        addedSalt: 5,
        type: "drink",
        display: true,
        name: "Latte Macchiato grande"
      },
      {
        id: 24,
        amount: 0,
        energy: 0,
        addedEnergy: 0,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 1,
        sugar: 0,
        addedSugar: 2,
        protein: 0,
        addedProtein: 0.1,
        salt: 0,
        addedSalt: 1,
        type: "drink",
        display: true,
        name: "Lipton Ice Tea Peach 0,25l"
      },
      {
        id: 25,
        amount: 0,
        energy: 0,
        addedEnergy: 0,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 1,
        sugar: 0,
        addedSugar: 3,
        protein: 0,
        addedProtein: 0.1,
        salt: 0,
        addedSalt: 0.82,
        type: "drink",
        display: true,
        name: "Lipton Ice Tea Peach 0,4l"
      },
      {
        id: 26,
        amount: 0,
        energy: 0,
        addedEnergy: 1,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 1,
        sugar: 0,
        addedSugar: 3,
        protein: 0,
        addedProtein: 0.1,
        salt: 0,
        addedSalt: 1.02,
        type: "drink",
        display: true,
        name: "Lipton Ice Tea Peach 0,5l"
      },
      {
        id: 27,
        amount: 0,
        energy: 0,
        addedEnergy: 6,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 9,
        sugar: 0,
        addedSugar: 27,
        protein: 0,
        addedProtein: 4,
        salt: 0,
        addedSalt: 0,
        type: "drink",
        display: true,
        name: "Orangensaft 0,25l"
      },
      {
        id: 28,
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
        addedSugar: 29,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 4,
        type: "drink",
        display: true,
        name: "Red Bull 0,25l"
      },
      {
        id: 29,
        amount: 0,
        energy: 0,
        addedEnergy: 5,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 9,
        sugar: 0,
        addedSugar: 25,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 1,
        type: "drink",
        display: true,
        name: "Sprite 0,25l"
      },
      {
        id: 30,
        amount: 0,
        energy: 0,
        addedEnergy: 8,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 14,
        sugar: 0,
        addedSugar: 40,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 1,
        type: "drink",
        display: true,
        name: "Sprite 0,4l"
      },
      {
        id: 31,
        amount: 0,
        energy: 0,
        addedEnergy: 9,
        fat: 0,
        addedFat: 0,
        saturatedFat: 0,
        addedSaturatedFat: 0,
        carbohydrate: 0,
        addedCarbohydrate: 18,
        sugar: 0,
        addedSugar: 51,
        protein: 0,
        addedProtein: 0,
        salt: 0,
        addedSalt: 2,
        type: "drink",
        display: true,
        name: "Sprite 0,5l"
      },
      {
        id: 32,
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
        name: "Tee"
      },
      {
        id: 33,
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
        name: "Vio Mineralwasser Still/Medium"
      },
      {
        id: 34,
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
        name: "Vio Mineralwasser Still/Medium"
      },
      {
        id: 35,
        amount: 0,
        energy: 0,
        addedEnergy: 25,
        fat: 0,
        addedFat: 36,
        saturatedFat: 0,
        addedSaturatedFat: 49,
        carbohydrate: 0,
        addedCarbohydrate: 16,
        sugar: 0,
        addedSugar: 9,
        protein: 0,
        addedProtein: 52,
        salt: 0,
        addedSalt: 37,
        type: "food",
        display: true,
        name: "Big Mac"
      },
      {
        id: 36,
        amount: 0,
        energy: 0,
        addedEnergy: 44,
        fat: 0,
        addedFat: 78,
        saturatedFat: 0,
        addedSaturatedFat: 111,
        carbohydrate: 0,
        addedCarbohydrate: 19,
        sugar: 0,
        addedSugar: 12,
        protein: 0,
        addedProtein: 96,
        salt: 0,
        addedSalt: 66,
        type: "food",
        display: true,
        name: "Big Tasty Bacon"
      },
      {
        id: 37,
        amount: 0,
        energy: 0,
        addedEnergy: 15,
        fat: 0,
        addedFat: 18,
        saturatedFat: 0,
        addedSaturatedFat: 30,
        carbohydrate: 0,
        addedCarbohydrate: 12,
        sugar: 0,
        addedSugar: 8,
        protein: 0,
        addedProtein: 31,
        salt: 0,
        addedSalt: 27,
        type: "food",
        display: true,
        name: "Cheeseburger"
      },
      {
        id: 38,
        amount: 0,
        energy: 0,
        addedEnergy: 42,
        fat: 0,
        addedFat: 68,
        saturatedFat: 0,
        addedSaturatedFat: 42,
        carbohydrate: 0,
        addedCarbohydrate: 15,
        sugar: 0,
        addedSugar: 1,
        protein: 0,
        addedProtein: 124,
        salt: 0,
        addedSalt: 83,
        type: "food",
        display: true,
        name: "Chicken Box"
      },
      {
        id: 39,
        amount: 0,
        energy: 0,
        addedEnergy: 9,
        fat: 0,
        addedFat: 13,
        saturatedFat: 0,
        addedSaturatedFat: 6,
        carbohydrate: 0,
        addedCarbohydrate: 5,
        sugar: 0,
        addedSugar: 0,
        protein: 0,
        addedProtein: 22,
        salt: 0,
        addedSalt: 14,
        type: "food",
        display: true,
        name: "Chicken McNuggets 4 Stück"
      },
      {
        id: 40,
        amount: 0,
        energy: 0,
        addedEnergy: 13,
        fat: 0,
        addedFat: 20,
        saturatedFat: 0,
        addedSaturatedFat: 8,
        carbohydrate: 0,
        addedCarbohydrate: 7,
        sugar: 0,
        addedSugar: 0,
        protein: 0,
        addedProtein: 34,
        salt: 0,
        addedSalt: 21,
        type: "food",
        display: true,
        name: "Chicken McNuggets 6 Stück"
      },
      {
        id: 100,
        amount: 0,
        energy: 0,
        addedEnergy: 1,
        fat: 0,
        addedFat: 1,
        saturatedFat: 0,
        addedSaturatedFat: 3,
        carbohydrate: 0,
        addedCarbohydrate: 0,
        sugar: 0,
        addedSugar: 0,
        protein: 0,
        addedProtein: 1,
        salt: 0,
        addedSalt: 0,
        type: "extra",
        display: true,
        name: "Kaffeesahne"
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

  getExtras = () => {
    const counters = this.state.counters.map(c => {
      console.log(c.type);
      if (c.type === "extra") {
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
            onExtras={this.getExtras}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
