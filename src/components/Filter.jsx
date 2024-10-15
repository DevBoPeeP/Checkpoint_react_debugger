import React from "react";
import { useState } from "react";

const Filter = ({ onFilterChange }) => {
  // Intialize the State for the input values
  const [inputValues, setInputValues] = useState({
    title: "",
    rating: "",
  });
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        border: "5px solid grey",
        borderBlockStyle: "dotted",
        borderRadius: "10px",
        padding: "10px",
        justifyContent: "space-between",
        backgroundColor: "black",
        color: "white",
        fontFamily: "QwitcherByke",
      }}
    >
      <h1>Movies Filter</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <label>Title:</label>
        <input
          type="text"
          value={inputValues.title}
          onChange={(e) => {
            setInputValues({ ...inputValues, title: e.target.value });
            onFilterChange(e.target.value, inputValues.rating);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <label>Rating:</label>
        <input
          type="number"
          min={1}
          max={5}
          value={inputValues.rating}
          onChange={(e) => {
            setInputValues({ ...inputValues, rating: e.target.value });
            onFilterChange(inputValues.title, e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
