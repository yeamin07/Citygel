import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetailsSlider = ({ mainImage, moreImages }) => {
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
              className="relative mt-[20px] h-[380px] w-[100%] rounded-[20px] object-cover sm:h-[400px] md:h-[500px] lg:h-[620px] xl:h-[680px]"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductDetailsSlider;
