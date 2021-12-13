import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";

import "./Header.scss";

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  function Scroll() {
    if (scrollY > 165) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", Scroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", Scroll);
    };
  });

  const options = useMemo(
    () => [
      { value: "KR", label: "KR" },
      { value: "EN", label: "EN" },
    ],
    []
  );

  const customStyles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        border: "1px solid white",
        color: state.data.color,
        opacity: 1,
      }),
      control: (provided) => ({
        ...provided,
        width: 80,
        background: "transparent",
      }),
      singleValue: (provided, state) => ({
        ...provided,
        width: 80,
        color: state.data.color,
      }),
    }),
    []
  );

  return (
    <div className={scrollActive ? "header fixed" : "header"}>
      <div className="inner">
        <div className="header__logo">
          <img
            src="/images/logo.png"
            alt="logo"
            className="header__logo__img"
          />
        </div>
        <nav className="header__menu">
          <ul className="header__menu__list">
            <li className="header__menu__list__item">SERVICE</li>
            <li className="header__menu__list__item">LOAMODULE</li>
            <li className="header__menu__list__item">PARTNERS/PRESS</li>
            <li className="header__menu__list__item">MATRIX</li>
            <li className="header__menu__list__item">ROADMAP</li>
          </ul>
        </nav>
        <div className="header__options">
          <div className="header__login">
            <img src="/images/btn_kyc.png" alt="logo" />
          </div>
          <div className="header__lang">
            {/* <select name="" id="" className="header__lang__select">
              <option value="header__lang__select__kr">KR</option>
              <option value="header__lang__select__en">EN</option>
            </select> */}
            <Select
              options={options}
              defaultValue={options[0]}
              styles={customStyles}
              width="200px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
