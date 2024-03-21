import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aiImage from "../../../assets/images/ai.jpg"; // Import your image

const ProductSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider-of",
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "10.5px", // Adjust width of dots
            height: "10.5px", // Adjust height of dots
            backgroundColor: "#FAFAFA", // Adjust dot color and transparency
            borderRadius: "50%",
            marginTop: "13px",
          }}
        ></div>
      );
    },
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {/* Render your images inside the slider */}
        <div className="">
          <img
            src={aiImage}
            className="rounded-xl h-[253px] w-[100%] p-2"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src={aiImage}
            className="rounded-xl h-[253px] w-[100%] p-2"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src={aiImage}
            className="rounded-xl h-[253px] w-[100%] p-2"
            alt="Slide 1"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;
