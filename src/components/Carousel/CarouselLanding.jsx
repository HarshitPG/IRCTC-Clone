import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselLanding.css";

const CarouselLanding = () => {
  const slider = useRef(null);

  var settings = {
    className: "",
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="slider-container">
      <Slider ref={slider} {...settings}>
        <div>
          <img
            src="./image/1.jpg"
            alt=""
            style={{ width: "100vw", height: "100%" }}
          ></img>
        </div>
        <div>
          <img
            src="./image/3.jpg"
            alt=""
            style={{ width: "100vw", height: "100%" }}
          ></img>
        </div>
        <div>
          <img
            src="./image/2.jpg"
            alt=""
            style={{ width: "100vw", height: "100%" }}
          ></img>
        </div>
        <div>
          <img
            src="./image/4.jpg"
            alt=""
            style={{ width: "100vw", height: "100%" }}
          ></img>
        </div>
        <div>
          <img
            src="./image/5.jpg"
            alt=""
            style={{ width: "100vw", height: "100%" }}
          ></img>
        </div>
      </Slider>
      <div className="buttons2">
        <button
          className="btnA btn4"
          onClick={() => slider?.current?.slickPrev()}
        >
          <i className="fa fa-angle-left"></i>
        </button>
        <button
          className="btnA btn3"
          onClick={() => slider?.current?.slickNext()}
        >
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default CarouselLanding;
