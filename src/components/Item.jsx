import React from "react";

export default function Item(props) {
  return <li onClick={props.click}>{props.item} </li>;
}
