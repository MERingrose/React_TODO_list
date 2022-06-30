import React, { useState, useRef } from "react";
import Item from "./Item";

function App() {
  let [list, addItem] = useState([]);
  const inputElement = useRef();

  function updateListItem() {
    let item = inputElement.current.value;
    console.log(inputElement.current.value);
    addItem((prevList) => {
      return [...prevList, item];
    });
    inputElement.current.value = null;
    inputElement.current.focus();
  }

  function listItemDone(event) {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  }

  let newList = list.map((e) => <Item item={e} onClick={listItemDone} />);

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
