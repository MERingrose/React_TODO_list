import React from "react";

export default function Item(props) {
  // let [itemDone, setItemDone] = useState(false);

  return <li onClick={props.onClick}>{props.item}</li>;
}
