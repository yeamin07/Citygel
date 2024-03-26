import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "./ProductSlider";
import { useNavigate } from "react-router-dom";
const ProductCart = ({ item }) => {
  console.log(item);
  const navigate = useNavigate();
  const handleTittle = (tittle) => {
    var words = tittle.split(/\s+/);

    // Check if the number of words is more than 30
    if (words.length > 6) {
      // Join the first 30 words and append "..."
      return words.slice(0, 6).join(" ") + "...";
    } else {
      return tittle;
    }
  };
  const handleDes = (des) => {
    var words = des.split(/\s+/);

    // Check if the number of words is more than 30
    if (words.length > 8) {
      // Join the first 30 words and append "..."
      return words.slice(0, 8).join(" ") + "...";
    } else {
      return des;
    }
  };
  return (
    <div className="product-border bg-white text-white box-border flex w-full max-w-full flex-col rounded-xl  border-[1px]  border-solid   border-gray-100 p-3 py-2.5 px-[10px] text-left font-poppins text-lg shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)]">
      <div>
        <ProductSlider
          mainImage={item.mainImage}
          moreImages={item.moreImages}
        />
      </div>
      <div className="flex max-w-full flex-col items-center justify-center gap-[10px] self-stretch">
        <div className="flex flex-col items-center justify-center gap-[10px] self-stretch">
          <div className="flex w-full flex-row items-center justify-center gap-[10px] self-stretch mq450:flex-wrap">
            <div className="z-[1] flex w-[31%] flex-row items-start justify-start rounded-3xs py-0.5 px-2 [background:linear-gradient(90deg,_#fcb100,_#ed893e)] mq750:w-[30%]">
              <div className="relative inline-block min-w-[15%] text-center text-[14px] text-whitesmoke-100 mq750:text-[7.22px]">
                Premium
              </div>
            </div>
            <div className="z-[1] flex w-[31%] flex-row items-start justify-start rounded-3xs py-0.5 px-2 [background:linear-gradient(90deg,_#fcb100,_#ed893e)] mq750:w-[30%]">
              <div className="relative inline-block min-w-[15%] text-center text-[14px] text-whitesmoke-100 mq750:text-[7.22px]">
                Premium
              </div>
            </div>
            <div className="z-[1] flex w-[31%] flex-row items-start justify-start rounded-3xs py-0.5 px-2 [background:linear-gradient(90deg,_#fcb100,_#ed893e)] mq750:w-[30%]">
              <div className="relative inline-block min-w-[15%] text-center text-[14px] text-whitesmoke-100 mq750:text-[7.22px]">
                Premium
              </div>
            </div>
          </div>
          <h3 className="font-inherit text-black relative z-[1] m-0 min-h-[40px] self-stretch text-9xl font-semibold mq750:text-[16.23px] mq750:leading-[16.23px] mq450:text-[16.23px] mq450:leading-[1.23]">
            {handleTittle(item.title)}
          </h3>
        </div>
        <div className="text-gray-1100 flex w-full flex-row items-start justify-start px-0 pt-0  pb-[5px] text-xl mq750:pb-[2px]">
          <div className="relative z-[1] w-full text-left   mq750:text-[8.02px] mq450:text-base">
            {item?.category?.name} - {item?.subcategory?.name}
          </div>
        </div>
        <div className="text-gray-1200 box-border flex w-[375px] max-w-full flex-row items-start  justify-start px-0 pt-0 pb-[5px] mq750:pb-[2px]">
          <div className="h-100% relative z-[1]  inline-block min-h-[25px] max-w-full flex-1 mq750:text-[7.22px] mq750:leading-[08px]">
            {handleDes(item.description)}
          </div>
        </div>
        <div className="text-black box-border flex w-full max-w-full flex-row items-center justify-between self-stretch px-0 pt-0 pb-4 text-9xl">
          <div className="relative z-[1] inline-block w-[50%]  max-w-full whitespace-nowrap font-semibold leading-[40px] mq750:text-[15.23px] mq750:leading-[08px] mq450:text-3xl mq450:leading-[08px]">
            AED {item.price}
          </div>
          <div className="text-gray-1100  ml-9 flex w-[50%] items-start justify-end px-0 pt-[5px]  pb-0 text-xl mq750:mt-[-10px] mq750:pr-4 mq450:ml-2">
            <div className="flex flex-row items-center justify-end  gap-[1px]">
              <div className="relative z-[1] inline-block max-w-[105px] mq750:mt-[8.02px] mq750:text-[8.02px] mq450:text-[10px] mq450:text-base">
                {item.city}
              </div>
              <div className="box-border flex h-[27px]  flex-col items-start justify-start px-0 pt-[3px] pb-0 mq750:h-[9.80px] mq750:w-[9.80px] mq750:pt-[0px]">
                <img
                  className="relative z-[1] h-6 w-6"
                  alt=""
                  src="/vuesaxboldlocation-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="z-[1] box-border flex max-w-full cursor-pointer flex-row items-center justify-center self-stretch whitespace-nowrap rounded-xl py-[17px] px-[130px] text-5xl shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] mq1050:px-[120px] mq750:w-[100%] mq750:px-[90px] mq450:box-border mq450:pl-5 mq450:pr-5">
          <div className="relative hidden  h-[70px] w-[100%] max-w-full rounded-xl shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)]" />
          <div
            onClick={() => navigate("/description")}
            className="relative  z-[2] inline-block min-w-[92px] text-center text-whitesmoke-100"
          >
            View All
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
