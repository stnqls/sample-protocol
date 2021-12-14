import React from "react";
import ValueItem from "./ValueItem";
import "../styles/pages/Page.scss";

function Page() {
  return (
    <React.Fragment>
      <div className="value page-value">
        <div className="inner">
          <ul className="value__lists">
            <ValueItem
              en={"VALUE"}
              kr={"가치창출"}
              title={"원칙과 기준에 따른 투명한 경영"}
              text={
                "자산의 가치를 창출하고 유지하여, 고객의 이익을 극대화 하겠습니다."
              }
            />
            <ValueItem
              en={"CLIENT"}
              kr={"고객지향"}
              title={"고객의 입장에서 생각하고 고객의 만족을 실현"}
              text={
                "모든 업무 수행 시 고객을 최우선으로 두고, 고객으로부터 신뢰받는 기업이 되겠습니다."
              }
            />
            <ValueItem
              en={"TALENT"}
              kr={"인재중심"}
              title={"회사의 미래를 선도할 핵심인력 양성"}
              text={
                "전문성을 갖춘 우수한 인재들을 발굴, 육성하고 함께 성장할 수 있는 회사가 되겠습니다."
              }
            />
          </ul>
        </div>
      </div>
      <div className="partners page-partners">
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
    </React.Fragment>
  );
}

export default Page;
