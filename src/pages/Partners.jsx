import React from "react";
import "../styles/pages/Partners.scss";

function Partners() {
  return (
    <div className="partners">
      <div className="inner">
        <div className="partners__title">
          <h2 className="partners__title__top">Partners</h2>
          <h1 className="partners__title__bottom">
            LOA와 협력하는 파트너 소개
          </h1>
        </div>
        <ul className="partners__lists">
          <li className="partners__lists__item">
            <img
              src="/images/partners_logo_01.png"
              alt=""
              className="partners__lists__item__img"
            />
          </li>
          <li className="partners__lists__item">
            <img
              src="/images/partners_logo_02.png"
              alt=""
              className="partners__lists__item__img"
            />
          </li>
          <li className="partners__lists__item">
            <img
              src="/images/partners_logo_03.png"
              alt=""
              className="partners__lists__item__img"
            />
          </li>
          <li className="partners__lists__item">
            <img
              src="/images/partners_logo_04.png"
              alt=""
              className="partners__lists__item__img"
            />
          </li>
          <li className="partners__lists__item">
            <img
              src="/images/partners_logo_05.png"
              alt=""
              className="partners__lists__item__img"
            />
          </li>
          <li className="partners__lists__item">
            <img
              src="/images/partners_logo_07.png"
              alt=""
              className="partners__lists__item__img"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Partners;
