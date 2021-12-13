import React from "react";
import "./ModuleItem.scss";

function ModuleItem(props) {
  return (
    <div className="moduleitem">
      <div className="moduleitem__img">
        <img src={props.img} alt="" />
      </div>
      <span className="moduleitem__text">{props.text}</span>
    </div>
  );
}

export default ModuleItem;
