import React from "react";
import { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    rating: "",
    posterUrl: "",
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(inputValues);
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        margin: "auto",
        marginTop: "140px",
        marginRight: "30px",
        marginLeft: "50px",
        border: "5px solid grey",
        borderBlockStyle: "dotted",
        borderRadius: "10px",
        padding: "10px",
        justifyContent: "space-between",
        backgroundColor: "black",
        color: "white",
        fontFamily: "QwitcherByke",
      }}
      onSubmit={handleSubmit}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <label>Title</label>
        <input
          type="text"
          value={inputValues.title}
          onChange={(e) => {
            setInputValues({ ...inputValues, title: e.target.value });
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
        <label>Rating</label>
        <input
          type="number"
          min="1"
          max="5"
          value={inputValues.rating}
          onChange={(e) => {
            setInputValues({ ...inputValues, rating: e.target.value });
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
        <label>Poster URL</label>
        <input
          type="text"
          value={inputValues.posterUrl}
          onChange={(e) => {
            setInputValues({ ...inputValues, posterUrl: e.target.value });
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
        <label>Description</label>
        <textarea
          value={inputValues.description}
          onChange={(e) => {
            setInputValues({ ...inputValues, description: e.target.value });
          }}
        />
      </div>
      <button
        style={{
          border: "rounded",
          backgroundColor: "azure",
          borderRadius: "20px",
          color: "black",
        }}
        type="submit"
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovie;
