import React from "react";
import logo from "./images/logo.png";
import "./style/style.css";
import { useState } from "react";

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  // delete the items
  const deleleItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };

  // remove all
  const removeAll = () => {
    setItems([]);
  };
  return (
    <div className="main-div">
      <h1 className="headingName">Simple To-Do</h1>
      <div className="child-div">
        <figure>
          <img src={logo} alt="logo" />
          <figcaption>Add your list here 👍</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="✍️ Add items.."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i
            className=" fas fa-plus add-btn"
            title="add-item"
            onClick={addItem}
          ></i>
        </div>

        <div className="showItem">
          {items.map((elem, ind) => {
            return (
              <div className="eachItem" key={ind}>
                <h4>{elem}</h4>
                <i
                  className=" far fa-trash-alt add-btn"
                  title="delete-item"
                  onClick={() => deleleItem(ind)}
                ></i>
              </div>
            );
          })}
        </div>

        <div className="showItem">
          <button className="btn" onClick={removeAll}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};
