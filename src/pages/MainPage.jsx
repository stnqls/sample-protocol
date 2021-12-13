import React from "react";
import "../styles/pages/MainPage.scss";

function MainPage() {
  return (
    <div className="mainpage">
      <div className="inner">
        <h1 className="mainpage__title">LOA-PROTOCOL</h1>
        <h2 className="mainpage__subtitle">
          To meet customer needs <br /> Offering a new concept of financial
          transactions
        </h2>
        <p className="mainpage__p">
          신개념 암호화폐 멀티 금융 플랫폼 로아프로토콜
        </p>
        <div type="button" className="mainpage__button">
          <img src="/images/btn_whitepaper.png" alt="button" />
        </div>
        <div className="mainpage__down">
          <div className="mainpage__down__arrow">
            <img src="/images/arrow_btm.png" alt="arrow" />
            <img src="/images/arrow_btm.png" alt="arrow" />
          </div>
          <div className="mainpage__down__line"></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
