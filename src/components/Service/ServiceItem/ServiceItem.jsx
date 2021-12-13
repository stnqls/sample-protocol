import React from "react";
import "./ServiceItem.scss";

function ServiceItem(props) {
  return (
    <div className="service__menu">
      <img src={props.img} alt="" className="service__menu__img" />
      <h1 className="service__menu__title">{props.title}</h1>
      <h2 className="service__menu__subtitle">{props.subtitle}</h2>
      <span className="service__menu__p">{props.text}</span>
    </div>
  );
}

export default ServiceItem;
