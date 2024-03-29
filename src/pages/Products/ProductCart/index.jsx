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
    <div className="product-border container bg-white text-white box-border flex w-full max-w-full flex-col rounded-xl  border-[1px]  border-solid   border-gray-100 p-3 py-2.5 px-[10px] text-left font-poppins text-lg shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)]">
      <div>
        <ProductSlider
          mainImage={item.mainImage}
          moreImages={item.moreImages}
          className="h-[45%] mq800:h-[40%] w-[100%] mq450:h-[80px] mq350:h-2/6"
        />
      </div>
      <div className="flex max-w-full flex-col items-center justify-center gap-[10px] self-stretch">
        <div className="flex flex-col items-center justify-center gap-[10px] self-stretch">
          {/*Premium Button */}
          <div className="flex w-full flex-row items-center justify-center gap-[10px] mq500:gap-[4px] mq350:gap-[2.5px] self-stretch mq450:flex-wrap">
            <div className="z-[1] flex w-[31%] flex-row items-center justify-center rounded-3xs mq500:rounded-[5px] py-0.5 px-2 mq400:px-[1.3px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] mq750:w-[30%]">
              <div className="relative inline-block min-w-[15%] text-center text-[14px] text-whitesmoke-100 mq750:text-[10px] mq350:text-[6px] mq450:text-[7.6px]">
                Premium
              </div>
            </div>
            <div className="z-[1] flex w-[31%] flex-row items-center justify-center rounded-3xs mq500:rounded-[5px] py-0.5 px-2 mq400:px-[1.3px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] mq750:w-[30%]">
              <div className="relative inline-block min-w-[15%] text-center text-[14px] text-whitesmoke-100 mq750:text-[10px] mq350:text-[6px] mq450:text-[7.6px]">
                Premium
              </div>
            </div>
            <div className="z-[1] flex w-[31%] flex-row items-center justify-center rounded-3xs mq500:rounded-[5px] py-0.5 px-2 mq400:px-[1.3px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] mq750:w-[30%]">
              <div className="relative inline-block min-w-[15%] text-center text-[14px] text-whitesmoke-100 mq750:text-[10px] mq350:text-[6px] mq450:text-[7.6px]">
                Premium
              </div>
            </div>
          </div>
          {/*Button ends */}
          
          <h3 className="font-inherit text-black relative z-[1] m-0 self-stretch text-9xl font-semibold leading-[35px] mq1125:text-[25px] mq750:text-[18.23px] mq750:leading-[16.23px] mq450:text-[14.23px] mq350:text-[12px] mq350:leading-[15px] mq450:leading-[1.23]">
            {handleTittle(item.title)}
          </h3>
        </div>
        <div className="text-gray-1100 flex w-full flex-row items-start justify-start px-0 pt-0  pb-[5px] text-xl mq750:pb-[2px]">
          <div className="relative z-[1] w-full text-left   mq750:text-[14.02px]  mq450:text-[9.5px] mq350:text-[8px]">
            {item?.category?.name} - {item?.subcategory?.name}
          </div>
        </div>
        <div className="text-gray-1200 box-border flex w-[375px] max-w-full flex-row items-start  justify-start px-0 pt-0 pb-[5px] mq750:pb-[2px]">
          <div className="h-100% relative z-[1]  inline-block max-w-full flex-1 leading-[25px] mq750:text-[13.22px] mq450:text-[8px] mq450:leading-[07px] mq350:text-[8px] mq350:leading-[12px] mq750:leading-[20px]">
            {item.description}
          </div>
        </div>
        <div className="text-black box-border flex w-full max-w-full flex-row items-center justify-between self-stretch px-0 pt-0 pb-4 text-9xl">
          <div className="relative z-[1] inline-block w-[50%] mq400:w-[60%] max-w-full whitespace-nowrap font-semibold leading-[40px] mq750:text-[18.63px]
           mq750:leading-[08px] mq450:text-[14px] mq400:text-[11.5px] mq350:text-[10px] mq450:leading-[08px] mq1125:text-[22px]">
            AED {item.price}
          </div>
          <div className="text-gray-1100  ml-9 flex w-[50%] items-start justify-end px-0 pt-[5px]  pb-0 text-xl mq750:mt-[-10px] mq750:pr-4 mq450:ml-2">
            <div className="flex flex-row items-center justify-end  gap-[1px]">
              <div className="relative z-[1] inline-block max-w-[105px] mq750:mt-[8.02px] mq750:text-[15.02px] mq350:text-[6.5px]  mq450:text-[8px]">
                {item.city}
              </div>
              <div className="box-border flex h-[27px]  flex-col items-start justify-start px-0 pt-[3px] pb-0 mq750:h-[9.80px] mq750:w-[9.80px] mq750:pt-[0px]">
                <img
                  className="relative z-[1] h-6 w-6 mq500:h-3 mq500:w-3  mq750:h-5 mq750:w-5 mq350:w-2 mq350:h-2"
                  alt=""
                  src="/vuesaxboldlocation-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="z-[1] box-border flex max-w-full cursor-pointer flex-row items-center justify-center self-stretch whitespace-nowrap rounded-[9px] py-[17px] px-[130px] mq500:py-[8px] mq350:py-[5px] mq450:py-[6px] mq800:py-[10px] text-5xl shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] mq1050:px-[120px] mq750:w-[100%] mq750:px-[90px] mq450:box-border mq450:pl-5 mq450:pr-5">
          <div className="relative hidden  h-[70px] mq500:h-[55px] mq350:h-[40px] w-[100%] max-w-full rounded-[10px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)]
          flex justify-center items-center" />
          <div
            onClick={() => navigate("/description")}
            className="relative  z-[2] inline-block min-w-[52px] text-center text-whitesmoke-100 mq500:text-[13.5px] mq450:text-[12.5px] mq350:text-[10px] mq800:text-[18px] mq1325:text-[18px]"
          >
            View All
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
