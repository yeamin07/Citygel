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
    <div className="product-border bg-white text-white container box-border flex w-full  flex-col rounded-xl  border-[1px]  border-solid   border-gray-100 p-3 py-2.5 px-[10px] text-left font-poppins text-lg shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)]">
      <div>
        <ProductSlider
          mainImage={item.mainImage}
          moreImages={item.moreImages}
          className="h-[45%] w-[100%] mq800:h-[40%] mq450:h-[80px] mq350:h-2/6"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-[10px] self-stretch">
        <div className="flex flex-col items-center justify-center gap-[10px] self-stretch">
          {/*Premium Button */}
          <div className="flex w-full flex-row items-center justify-center gap-[10px] self-stretch mq500:gap-[4px] mq450:flex-wrap mq350:gap-[2.5px]">
            <div className="z-[1] flex w-[31%] flex-row items-center justify-center rounded-md  py-0.5 px-2 [background:linear-gradient(90deg,_#fcb100,_#ed893e)] mq750:w-[30%] mq400:px-[1.3px]">
              <div className="relative inline-block min-w-[15%] text-center text-[14px] text-whitesmoke-100 mq750:text-[10px] mq450:text-[7.6px] mq350:text-[6px]">
                Premium
              </div>
            </div>
            <div className="rounded-ms z-[1] flex w-[31%] flex-row items-center justify-center py-0.5 px-2 [background:linear-gradient(90deg,_#fcb100,_#ed893e)] mq750:w-[30%] mq400:px-[1.3px]">
              <div className="relative inline-block min-w-[15%] text-center text-[14px] text-whitesmoke-100 mq750:text-[10px] mq450:text-[7.6px] mq350:text-[6px]">
                Premium
              </div>
            </div>
            <div className="z-[1] flex w-[31%] flex-row items-center justify-center rounded-md  py-0.5 px-2 [background:linear-gradient(90deg,_#fcb100,_#ed893e)] mq750:w-[30%] mq400:px-[1.3px]">
              <div className="relative inline-block min-w-[15%] text-center text-[14px] text-whitesmoke-100 mq750:text-[10px] mq450:text-[7.6px] mq350:text-[6px]">
                Premium
              </div>
            </div>
          </div>
          {/*Button ends */}

          <h3 className="font-inherit text-black text-4xl relative z-[1] m-0 self-stretch font-semibold 2xl:text-5xl 2xl:leading-[35px] ">
            {handleTittle(item.title)}
          </h3>
        </div>
        <div className="flex w-full flex-row items-start justify-start px-0 pt-0 pb-[5px]  text-lg text-gray-800 ">
          <div className="relative z-[1] w-full text-left   ">
            {item?.category?.name} - {item?.subcategory?.name}
          </div>
        </div>
        <div className="box-border flex max-w-full flex-row items-start justify-start  px-0 pt-0 pb-[5px] text-gray-600 ">
          <div className="relative z-[1]  inline-block max-w-full flex-1 text-sm leading-[25px]">
            {handleDes(item.description)}
          </div>
        </div>
        <div className="text-black box-border flex w-full max-w-full flex-row items-center justify-between self-stretch px-0 pt-0 pb-4 text-6xl">
          <div className="relative z-[1] inline-block w-[50%] max-w-full whitespace-nowrap font-semibold leading-[40px] mq400:w-[60%] ">
            AED {item.price}
          </div>
          <div className="text-gray-1100  ml-9 flex w-[50%] items-start justify-end px-0 pt-[5px]  pb-0 text-xl mq750:mt-[-10px] mq750:pr-4 mq450:ml-2">
            <div className="flex flex-row items-center justify-end  gap-[1px]">
              <div className="relative z-[1] inline-block max-w-[105px] mq750:mt-[8.02px] mq750:text-[15.02px] mq450:text-[8px]  mq350:text-[6.5px]">
                {item.city}
              </div>
              <div className="box-border flex h-[27px]  flex-col items-start justify-start px-0 pt-[3px] pb-0 mq750:h-[9.80px] mq750:w-[9.80px] mq750:pt-[0px]">
                <img
                  className="relative z-[1] h-6 w-6 mq750:h-5 mq750:w-5  mq500:h-3 mq500:w-3 mq350:h-2 mq350:w-2"
                  alt=""
                  src="/vuesaxboldlocation-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="z-[1] box-border flex  cursor-pointer flex-row items-center justify-center self-stretch whitespace-nowrap rounded-[9px] py-[17px] text-5xl  shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] 2xl:px-[130px] ">
          <div
            onClick={() => navigate(`/products/${item.id}`)}
            className="relative  z-[2] inline-block w-full text-center text-whitesmoke-100  "
          >
            View All
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
