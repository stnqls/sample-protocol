import React from "react";
import "./ModuleDetail.scss";
import ModuleDetailItem from "./moduledetailItem/ModuleDetailItem";

function ModuleDetail() {
  return (
    <div className="modulebt">
      <div className="inner">
        <ul className="modulebt__lists">
          <li className="modulebt__lists__item">
            <ModuleDetailItem
              img={`/images/icon_sec4_${"01"}.png`}
              title={"개인 지갑 유지 & 관리"}
              text={
                "  비시 실시간 거래와 마이너 선매매의 취약성을 차단하고 탈중앙화 기록 조작과 탈취가 불가능하며 KYC 로그인 인증 없이 누구나 계정 생성 및 거래가 가능합니다."
              }
              list={[]}
            />
          </li>
          <li className="modulebt__lists__item">
            <ModuleDetailItem
              img={`/images/icon_sec4_${"02"}.png`}
              title={"데이터 분석"}
              text={
                "데이터 안에 있는 숨겨진 가치를 분석, 발굴하여 보여줌으로써 누구나 쉽게 이해하고 빠른 의사 결정을 진행할 수 있습니다."
              }
              list={[
                "빅데이터 기술, 암호화폐, 부동산 실시간 정보 취합",
                "데이터 마이닝 분석 자료 및 예측 모델링 통합",
              ]}
            />
          </li>
          <li className="modulebt__lists__item">
            <ModuleDetailItem
              img={`/images/icon_sec4_${"03"}.png`}
              title={"상환 상태 분석"}
              text={
                "실시간 상환 상태 데이터를 손쉽게 수집,처리 및 분석하여 새로운 정보에 신속하게 댕으할 수 있습니다."
              }
              list={[
                "위험도 분석 자금 & 회수",
                "실시간 상태분석 담보자산 가치 비교",
              ]}
            />
          </li>
          <li className="modulebt__lists__item">
            <ModuleDetailItem
              img={`/images/icon_sec4_${"04"}.png`}
              title={"실시간 자산 내역 모니터링"}
              text={
                "실시간 자산현황을 그래픽, 차트, 인디케이트 등을 통해 직관적으로 파악하고 분석할 수 있습니다."
              }
              list={[
                "자산 내역에 대한 실시간 모니터링으로 투명한 확인 가능",
                "현황 파악 용이, 사용자 편의 UI제공",
              ]}
            />
          </li>
          <li className="modulebt__lists__item">
            <ModuleDetailItem
              img={`/images/icon_sec4_${"05"}.png`}
              title={"투자 자금 분배"}
              text={
                "변화에 대한 대응/사례, 세부적 기준 등을 제공하여 고객의 편의성을 높여 경쟁력을 확보 할 수 있습니다."
              }
              list={[
                "투자 여부 판단에 도움이 될 가이드라인을 제공",
                "기업은 투자의 질을 높이고, 투자자는 투자 위험을 보다 명확하게 파악",
              ]}
            />
          </li>
          <li className="modulebt__lists__item">
            <ModuleDetailItem
              img={`/images/icon_sec4_${"06"}.png`}
              title={"자동 알람"}
              text={
                "최고의 투자 환경 및 고객의 보안을 위해 자동 알람 기능을 제공함으로써 빠른 대응이 가능합니다."
              }
              list={[
                "자산가치 및 대출한도의 변화와 현금의 유입/유출경고",
                "암호화폐 자산 최소한도 도달 시 관리 및 재조정 경고",
              ]}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModuleDetail;
