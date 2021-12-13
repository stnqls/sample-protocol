import React from "react";
import "../styles/pages/Matrix.scss";
import MatrixGraph from "./MatrixGraph";

function Matrix() {
  return (
    <div className="matrix">
      <div className="inner">
        <div className="matrix__title">
          <div className="matrix__title__subtitle">TOKEN MATRIX</div>
          <div className="matrix__title__maintitle">
            LOA는 아래와 같은 분배구조를 가지고 있습니다.
          </div>
        </div>
        <div className="matrix__graph">
          <MatrixGraph />
        </div>
      </div>
    </div>
  );
}

export default Matrix;
