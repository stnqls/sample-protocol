// eslint-disable-next-line
import react from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/pages/MapSlide.scss";

function MapSlide() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 0.01,
    cssEase: "linear",
  };
  return (
    <div className="mapslide">
      <hr className="mapslide__line" />
      <Slider {...settings}>
        <div className="mapslide__box">
          <h1 className="mapslide__box__year">2019</h1>
          <div className="mapslide__box__img"></div>
          <h2 className="mapslide__box__date">2019. 06 ~ 2020. 03</h2>
          <span className="mapslide__box__text">
            Pre-Sale 및 Main-Sale 진행완료
          </span>
        </div>
        <div className="mapslide__box">
          <h1 className="mapslide__box__year">2020</h1>
          <div className="mapslide__box__img"></div>
          <h2 className="mapslide__box__date">2020. 04</h2>
          <span className="mapslide__box__text">
            빗썸 글로벌 상장 및 TOKEN 배분
          </span>
        </div>
        <div className="mapslide__box">
          <h1 className="mapslide__box__year">&nbsp;</h1>
          <div className="mapslide__box__img"></div>
          <h2 className="mapslide__box__date">2020. 08</h2>
          <span className="mapslide__box__text">
            BSC SWQP 파트너십 <br />
            LOA Defi "LFI"개발
          </span>
        </div>
        <div className="mapslide__box">
          <h1 className="mapslide__box__year">&nbsp;</h1>
          <div className="mapslide__box__img"></div>
          <h2 className="mapslide__box__date">2020. 10</h2>
          <span className="mapslide__box__text">
            FirmaChain 전자계약 기술 협약
          </span>
        </div>
        <div className="mapslide__box">
          <h1 className="mapslide__box__year">2021</h1>
          <div className="mapslide__box__img"></div>
          <h2 className="mapslide__box__date">2021. 03</h2>
          <span className="mapslide__box__text">LOA Lending Release</span>
        </div>
        <div className="mapslide__box">
          <h1 className="mapslide__box__year">&nbsp;</h1>
          <div className="mapslide__box__img"></div>
          <h2 className="mapslide__box__date">2022 ~ </h2>
          <span className="mapslide__box__text">LOA, LFI 사업 확장</span>
        </div>
      </Slider>
    </div>
  );
}

export default MapSlide;
