import React from "react";
import "./ModuleDetailItem.scss";

function ModuleDetailItem(props) {
  console.log(props.list);
  return (
    <div className="moduledetailitem">
      <img src={props.img} alt="" className="modulebt__lists__item__img" />
      <h1 className="modulebt__lists__item__title">{props.title}</h1>
      <span className="modulebt__lists__item__text">
        {props.text}
        <ul className="modulebt__lists__item__text__list">
          <li className="modulebt__lists__item__text__list__item">
            {/* {props.list[0]} */}
          </li>
          <li className="modulebt__lists__item__text__list__item">
            {/* {props.list[1]} */}
          </li>
        </ul>
      </span>
    </div>
  );
}

export default ModuleDetailItem;
