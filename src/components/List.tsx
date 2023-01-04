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
  return <div>List</div>;
};

export default List;
