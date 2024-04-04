import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aiImage from "../../../assets/images/ai.jpg"; // Import your image

const ProductSlider = ({ mainImage, moreImages }) => {
  // Combine mainImage and moreImages into a single array
  const images = [mainImage, ...moreImages];
  console.log(mainImage, moreImages);
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
        {/* Render images from the combined array */}
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              className="rounded-xl lg:h-[253px] md:h-[185px] w-[100%] p-2 h-[150px] mq350:p-[0.8px]"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
