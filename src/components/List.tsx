import { render } from "@testing-library/react";
import React from "react";

interface Props {
  people: {
    name: string;
    age: number;
    url: string;
    note: string;
  }[];
}

const List = ({ people }: Props) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt="" />
            <h2>{person.name}</h2>
            <p>{person.age} years old</p>
            <p className="List-note">{person.note}</p>
          </div>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
