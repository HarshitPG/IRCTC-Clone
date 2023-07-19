import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const Testimonial = () => {
  const slider = useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return <div onClick={onClick} />;
  }

  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonialwrapper">
      <div className="testimonialcontainer">
        <Slider ref={slider} {...settings}>
          <div className="testimonialcards">
            <img src="./image/gov1.jpg" alt=""></img>
          </div>
          <div className="testimonialcards">
            <img src="./image/gov2.jpg" alt=""></img>
          </div>
          <div className="testimonialcards">
            <img src="./image/gov3.jpg" alt=""></img>
          </div>
          <div className="testimonialcards">
            <img src="./image/gov4.jpg" alt=""></img>
          </div>
          <div className="testimonialcards">
            <img src="./image/gov5.jpg" alt=""></img>
          </div>
          <div className="testimonialcards">
            <img src="./image/gov6.jpg" alt=""></img>
          </div>
          <div className="testimonialcards">
            <img src="./image/gov7.jpg" alt=""></img>
          </div>
          <div className="testimonialcards">
            <img src="./image/gov8.jpg" alt=""></img>
          </div>
        </Slider>
        <div className="buttons">
          <div className="btn1">
            <button
              className="btn"
              onClick={() => slider?.current?.slickNext()}
            >
              <i class="fa-solid fa-angle-left"></i>
            </button>
          </div>
          <div className="btn2">
            <button
              className="btn"
              onClick={() => slider?.current?.slickPrev()}
            >
              <i class="fa-solid fa-angle-right "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
