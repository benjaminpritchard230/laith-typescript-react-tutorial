import { imageListClasses } from "@mui/material";
import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}
const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };

  return (
    <div className="Add">
      <input
        type="text"
        value={input.name}
        placeholder="Name"
        className="AddToList-input"
        onChange={handleChange}
        name="name"
      />
      <input
        type="string"
        value={input.age}
        placeholder="Age"
        className="AddToList-input"
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        value={input.img}
        placeholder="Image Url"
        className="AddToList-input"
        onChange={handleChange}
        name="img"
      />
      <textarea
        value={input.note}
        placeholder="Notes"
        className="AddToList-input"
        name="note"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={() => handleClick()}></button>
    </div>
  );
};

export default AddToList;
