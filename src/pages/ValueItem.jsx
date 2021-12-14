import React from "react";
import "../styles/pages/ValueItem.scss";

function ValueItem(props) {
  return (
    <li className="valueitem">
      <span className="valueitem__left">
        <div className="valueitem__left__en">{props.en}</div>
        <div className="valueitem__left__kr">{props.kr}</div>
      </span>
      <span className="valueitem__right">
        <div className="valueitem__right__title">{props.title}</div>
        <div className="valueitem__right__text">{props.text}</div>
      </span>
    </li>
  );
}

export default ValueItem;
