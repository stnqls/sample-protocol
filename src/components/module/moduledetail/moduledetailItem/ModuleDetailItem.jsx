import React from "react";
import "./ModuleDetailItem.scss";

function ModuleDetailItem(props) {
  return (
    <div className="moduledetailitem">
      <img src={props.img} alt="" className="moduledetailitem__img" />
      <h1 className="moduledetailitem__title">{props.title}</h1>
      <span className="moduledetailitem__text">
        {props.text}
        {props.list.length === 0 ? (
          <div className="moduledetailitem__text__none"></div>
        ) : (
          <ul className="moduledetailitem__text__list">
            <li className="moduledetailitem__text__list__item">
              {props.list[0]}
            </li>
            <li className="moduledetailitem__text__list__item">
              {props.list[1]}
            </li>
          </ul>
        )}
      </span>
    </div>
  );
}

export default ModuleDetailItem;
