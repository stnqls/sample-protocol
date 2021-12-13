import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "2019",
    cardTitle: "2019.06 ~ 2020.03",
    cardSubtitle: "",
    cardDetailedText: "Pre-sale 및 Main-Sale 진행 완료",
  },
  {
    title: "2020",
    cardTitle: "2020. 04",
    cardSubtitle: "",
    cardDetailedText: "빗썸 글로벌 상장 및 TOKEN 배분",
  },
  {
    title: "",
    cardTitle: "2020. 08",
    cardSubtitle: "",
    cardDetailedText: "BSC SWAP 파트너십 LOA Defi 'LFI' 개발",
  },
  {
    title: "",
    cardTitle: "2020. 10",
    cardSubtitle: "",
    cardDetailedText: "FirmaChain 전자계약 기술 협약",
  },
  {
    title: "2021",
    cardTitle: "2021. 03",
    cardSubtitle: "",
    cardDetailedText: "LOA Lending Release",
  },
  {
    title: "",
    cardTitle: "2022 ~",
    cardSubtitle: "",
    cardDetailedText: "LOA, LFI 사업 확장",
  },
];

function MapGraph() {
  return (
    <div className="mapgraph" style={{ width: "100%" }}>
      <Chrono
        items={items}
        mode="HORIZONTAL"
        slideShow
        slideItemDuration={3000}
      >
        <div className="chrono-icons">
          <img
            src="/images/slide_icon.png"
            alt="slide_icon"
            style={{ width: "37px", height: "45px" }}
          />
          <img
            src="/images/slide_icon.png"
            alt="slide_icon"
            style={{ width: "55px" }}
          />
          <img src="/images/slide_icon.png" alt="slide_icon" />
          <img src="/images/slide_icon.png" alt="slide_icon" />
          <img src="/images/slide_icon.png" alt="slide_icon" />
          <img src="/images/slide_icon.png" alt="slide_icon" />
        </div>
      </Chrono>
    </div>
  );
}

export default MapGraph;
