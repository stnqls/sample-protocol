import React from "react";
import "./Module.scss";

import ModuleItem from "./moduleItem/ModuleItem";

function Module() {
  return (
    <div className="module">
      <div className="inner">
        <div className="module__title">
          <h2 className="module__title__h2">LOA - PURE MODULE</h2>
          <h1 className="module__title__h1">
            혁신적인 솔루션으로 안전한 자산관리를 제공합니다.
          </h1>
        </div>
        <ul className="module__lists">
          <li className="module__lists__item">
            <ModuleItem
              img={`/images/icon_module_${"01"}.png`}
              text={"개인 지갑 유지 관리"}
            />
          </li>
          <li className="module__lists__item">
            <ModuleItem
              img={`/images/icon_module_${"02"}.png`}
              text={"실시간 자산 내역 모니터링"}
            />
          </li>
          <li className="module__lists__item">
            <ModuleItem
              img={`/images/icon_module_${"03"}.png`}
              text={"데이터 분석"}
            />
          </li>
          <li className="module__lists__item">
            <ModuleItem
              img={`/images/icon_module_${"04"}.png`}
              text={"투자 자금 분배"}
            />
          </li>
          <li className="module__lists__item">
            <ModuleItem
              img={`/images/icon_module_${"05"}.png`}
              text={"상환 상태 분석"}
            />
          </li>
          <li className="module__lists__item">
            <ModuleItem
              img={`/images/icon_module_${"06"}.png`}
              text={"자동 알람"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Module;
