import React from "react";
import "../styles/pages/Value.scss";

function Value() {
  return (
    <div className="value">
      <div className="inner">
        <ul className="value__lists">
          <li className="value__lists__item">
            <span className="value__lists__item__left">
              <div className="value__lists__item__left__en">VALUE</div>
              <div className="value__lists__item__left__kr">가치창출</div>
            </span>
            <span className="value__lists__item__right">
              <div className="value__lists__item__right__title">
                원칙과 기준에 따른 투명한 경영
              </div>
              <div className="value__lists__item__right__text">
                자산의 가치를 창출하고 유지하여, 고객의 이익을 극대화
                하겠습니다.
              </div>
            </span>
          </li>
          <li className="value__lists__item">
            <span className="value__lists__item__left">
              <div className="value__lists__item__left__en">CLIENT</div>
              <div className="value__lists__item__left__kr">고객지향</div>
            </span>
            <span className="value__lists__item__right">
              <div className="value__lists__item__right__title">
                고객의 입장에서 생각하고 고객의 만족을 실현
              </div>
              <div className="value__lists__item__right__text">
                모든 업무 수행 시 고객을 최우선으로 두고, 고객으로부터 신뢰받는
                기업이 되겠습니다.
              </div>
            </span>
          </li>
          <li className="value__lists__item">
            <span className="value__lists__item__left">
              <div className="value__lists__item__left__en">TALENT</div>
              <div className="value__lists__item__left__kr">인재중심</div>
            </span>
            <span className="value__lists__item__right">
              <div className="value__lists__item__right__title">
                회사의 미래를 선도할 핵심인력 양성
              </div>
              <div className="value__lists__item__right__text">
                전문성을 갖춘 우수한 인재들을 발굴, 육성하고 함께 성장할 수 있는
                회사가 되겠습니다.
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Value;
