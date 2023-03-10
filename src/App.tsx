import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      img: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQVl1muj07W9miwgXG7APQflVip1y6q1o9H12NbHyCIAcEnl0SBn5Fk9_zrxPLY7y_P8WG5p9ld17MTU0s",
      age: 36,
      note: "tall",
    },
    {
      name: "Kobe",
      img: "https://www.biography.com/.image/t_share/MTgwMzQyOTk2OTY3ODkyODQ0/gettyimages-490703338.jpg",
      age: 36,
      note: "",
    },
  ]);

  return (
    <div className="AddToList">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
