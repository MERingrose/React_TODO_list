import React, { useState, useRef } from "react";
import Item from "./Item";

function App() {
  let [list, addItem] = useState([]);
  const inputElement = useRef();

  //add item to the list, reset input and focus on input
  function updateListItem() {
    let item = inputElement.current.value;
    addItem((prevList) => {
      return [...prevList, item];
    });
    inputElement.current.value = null;
    inputElement.current.focus();
  }

  //strike through when clicked
  function listItemDone(event) {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  }

  let newList = list.map((e) => <Item item={e} click={listItemDone} />);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          ref={inputElement}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateListItem();
            }
          }}
          type="text"
        />
        <button onClick={updateListItem} type="submit">
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{newList}</ul>
      </div>
    </div>
  );
}

export default App;
