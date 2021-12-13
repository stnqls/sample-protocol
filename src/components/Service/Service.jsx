import React from "react";
import "./Service.scss";
import ServiceItem from "./ServiceItem/ServiceItem";

import img1 from "./icon_service_01.png";
import img2 from "./icon_service_02.png";
import img3 from "./icon_service_03.png";
import img4 from "./icon_service_04.png";
import img5 from "./icon_service_05.png";

function Service() {
  return (
    <div className="service">
      <div className="inner">
        <div className="service__context">
          <div className="service__text">
            <h2 className="service__text__subtitle">LOA SERVICE</h2>
            <h2 className="service__text__title">세계 최초의 금융 서비스</h2>
            <div className="service__text__view">
              <img
                src="/images/btn_viewmore.png"
                alt=""
                className="service__text__view__img"
              />
            </div>
          </div>

          <div className="service__menu">
            <ul className="service__menu__lists">
              <li className="service__menu__lists__item">
                <ServiceItem
                  img={img1}
                  title={"C2C"}
                  subtitle={"투자와 대출 거래 서비스"}
                  text={
                    "암호화폐의 예치(스테이킹 월렛 등) 서비스 개인간의 투자 및 대출 서비스 플랫폼 지원 이자 추가 할인, 추가 수익 제공"
                  }
                />
              </li>
              <li className="service__menu__lists__item">
                <ServiceItem
                  img={img2}
                  title={"P2P"}
                  subtitle={"온라인 부동산 담보 대출 서비스"}
                  text={
                    "기존 P2P 서비스의 제약을 벗어난 맞춤형 서비스 중간 수수료를 없애고 자금의 선순환 구조 형성 이자 추가할인, 추가 수익제공"
                  }
                />
              </li>
              <li className="service__menu__lists__item">
                <ServiceItem
                  img={img3}
                  title={"LDEX"}
                  subtitle={"탈중앙화된 안전한 DEX 거래 환경"}
                  text={
                    "세계 각국의 화폐로 LOA플랫폼 서비스 사용 개인간에 이루어지는 거래 기반 월렛보다 안전 중간 과정을 생략하여, 거리 수수로 저렴"
                  }
                />
              </li>
              <li className="service__menu__lists__item">
                <ServiceItem
                  img={img4}
                  title={"LOA CARD/PAY"}
                  subtitle={"암호화폐 실생활 결제 지원"}
                  text={
                    "  실물카드와 LOA PAY시스템을 구축해 전세계 어디서나 자유롭게 결제할 수 있고, 온라인 사용처를 확보해 암호화폐의 실물화를 적극 추진"
                  }
                />
              </li>
              <li className="service__menu__lists__item">
                <ServiceItem
                  img={img5}
                  title={"STAKING WALLET"}
                  subtitle={"암호화폐 예치 서비스"}
                  text={
                    "정해진 입금 시기의 입금과 정해진 계약 기간의 종료 시에만 출금을 수행하며 그 외의 시간에는 입출금 불가"
                  }
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="service__buttons">
          <div className="service__buttons__btn">금융의 혁신</div>
          <div className="service__buttons__btn">투자의 혁신</div>
          <div className="service__buttons__btn">암호화폐의 혁신</div>
        </div>
        <div className="service__logo">
          <img
            src="/images/font_big_loa.png"
            alt=""
            className="service__logo__img"
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
