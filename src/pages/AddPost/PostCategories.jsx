import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "components/Header1";
import Fullheader from "pages/AddPost/AddPostWrapper";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, setCategory } from "store/slices/adsPostSlice";

export default function PostCategories() {
  const { currentStep, category, subcategory } = useSelector(
    (state) => state.post,
  );
  const [selected, setSelected] = useState(category);
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    setSelected(e);
    console.log(e);
    dispatch(setCategory(e));
  };
  const handleNext = () => {
    dispatch(nextStep());
  };
  return (
    <>
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="relative min-h-[2000px] w-full px-16">
        <div className="flex  flex-col items-start justify-start">
          <Text
            as="p"
            className="text-start z-[1] mt-[70px] w-[100%] text-[44px]  font-medium !text-black-900_03 sm:text-center  sm:text-[28px] mq450:text-center mq450:text-[28px]"
          >
            Select Category
          </Text>
          <Text
            as="p"
            className="text-start z-[1] mt-3 w-[100%] text-[20px] leading-[35px] !text-black-900_87 opacity-0.8 sm:text-center sm:text-[14px] mq1500:w-[100%] mq450:text-center mq450:text-[14px]"
          ></Text>
          <div>
            <div className="mt-6 grid w-full grid-cols-4 gap-4 sm:grid-cols-2 mq1125:grid-cols-3 mq1050:grid-cols-2 mq750:grid-cols-2 mq450:grid-cols-2">
              <div
                onClick={() => handleSelect("electric")}
                className={`flex h-[230px] w-[100%] flex-col items-center justify-start gap-2.5  border border-solid p-5 p-[11px] ${selected == "electric" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} rounded-[20px] bg-white-A700 shadow-sm`}
              >
                <Img
                  src="images/img_frame_orange_400.svg"
                  alt="export_cars_one"
                  className="mt-7 h-[74px] w-[74px]"
                />
                <Text
                  as="p"
                  className="mb-[15px] text-[24px] !text-black-900_03 mq450:text-[16px]"
                >
                  computers
                </Text>
              </div>
              <div
                onClick={() => handleSelect("electric")}
                className={`flex h-[230px] w-[100%] flex-col items-center justify-start  gap-2.5 border border-solid p-[11px] ${selected == "machinary" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} rounded-[20px] bg-white-A700 shadow-sm`}
              >
                <Img
                  src="images/img_frame_orange_400_74x74.svg"
                  alt="image"
                  className="mt-[34px] h-[74px] w-[74px]"
                />
                <Text
                  as="p"
                  className="mb-[15px] text-[24px] !text-black-900_03 mq450:text-[16px]"
                >
                  Motorcycles
                </Text>
              </div>
              <div
                onClick={() => handleSelect("electric")}
                className={`flex h-[230px] w-[100%] flex-col items-center justify-start  gap-2.5 border border-solid p-[11px] ${selected == "machinary" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} rounded-[20px] bg-white-A700 shadow-sm`}
              >
                <Img
                  src="images/img_frame_orange_400_74x74.svg"
                  alt="image"
                  className="mt-[34px] h-[74px] w-[74px]"
                />
                <Text
                  as="p"
                  className="mb-[15px] text-[24px] !text-black-900_03 mq450:text-[16px]"
                >
                  Motorcycles
                </Text>
              </div>
              <div
                onClick={() => handleSelect("electric")}
                className={`flex h-[230px] w-[100%] flex-col items-center justify-start  gap-2.5 border border-solid p-[11px] ${selected == "machinary" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} rounded-[20px] bg-white-A700 shadow-sm`}
              >
                <Img
                  src="images/img_frame_orange_400_74x74.svg"
                  alt="image"
                  className="mt-[34px] h-[74px] w-[74px]"
                />
                <Text
                  as="p"
                  className="mb-[15px] text-[24px] !text-black-900_03 mq450:text-[16px]"
                >
                  Motorcycles
                </Text>
              </div>
              <div
                onClick={() => handleSelect("electric")}
                className={`flex h-[230px] w-[100%] flex-col items-center justify-start  gap-2.5 border border-solid p-[11px] ${selected == "machinary" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} rounded-[20px] bg-white-A700 shadow-sm`}
              >
                <Img
                  src="images/img_frame_orange_400_74x74.svg"
                  alt="image"
                  className="mt-[34px] h-[74px] w-[74px]"
                />
                <Text
                  as="p"
                  className="mb-[15px] text-[24px] !text-black-900_03 mq450:text-[16px]"
                >
                  Motorcycles
                </Text>
              </div>
              <div
                onClick={() => handleSelect("electric")}
                className={`flex h-[230px] w-[100%] flex-col items-center justify-start  gap-2.5 border border-solid p-[11px] ${selected == "machinary" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} rounded-[20px] bg-white-A700 shadow-sm`}
              >
                <Img
                  src="images/img_frame_orange_400_74x74.svg"
                  alt="image"
                  className="mt-[34px] h-[74px] w-[74px]"
                />
                <Text
                  as="p"
                  className="mb-[15px] text-[24px] !text-black-900_03 mq450:text-[16px]"
                >
                  Motorcycles
                </Text>
              </div>
              <div
                onClick={() => handleSelect("flat")}
                className={`flex h-[230px] w-[100%] flex-col items-center justify-start  gap-2.5 border border-solid p-[11px] ${selected == "flat" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} rounded-[20px] bg-white-A700 shadow-sm`}
              >
                <Img
                  src="images/img_frame.svg"
                  alt="image"
                  className="mt-[34px] h-[74px] w-[74px]"
                />
                <Text
                  as="p"
                  className="mb-[15px] text-[24px] !text-black-900_03 mq450:text-[16px]"
                >
                  Heavy Vehicles
                </Text>
              </div>

              <div
                onClick={() => handleSelect("vehicles")}
                className={`flex h-[230px] w-[100%] flex-col items-center justify-start  gap-2.5 border border-solid p-[11px] ${selected == "vehicles" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} rounded-[20px] bg-white-A700 shadow-sm`}
              >
                <Img
                  src="images/img_frame.svg"
                  alt="image"
                  className="mt-[34px] h-[74px] w-[74px]"
                />
                <Text
                  as="p"
                  className="mb-[15px] text-[24px] !text-black-900_03 mq450:text-[16px]"
                >
                  Heavy Vehicles
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-9  w-full">
          <div className="mq800: text-white box-border flex w-[80%] max-w-full flex-row justify-center py-9 py-0 px-5  text-11xl sm:w-[100%] sm:flex-col mq1050:w-[100%] mq1050:items-center mq450:flex-col">
            <div className="flex w-full max-w-full  flex-row items-center justify-between gap-5 mq1050:justify-between">
              <div className="mt-10  flex h-[47px] flex-col items-center justify-start sm:w-[20%]">
                <div className=" relative z-[2] flex h-[5px] flex-row items-center justify-between gap-[10px]">
                  <div
                    className={`h-full  w-11 rounded-21xl sm:w-3 mq1050:w-5  mq750:w-2 ${currentStep == 1 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 rounded-21xl sm:w-3 mq1050:w-5 mq750:w-2 ${currentStep == 2 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 rounded-21xl sm:w-3 mq1050:w-5 mq750:w-2 ${currentStep == 3 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 rounded-21xl sm:w-3 mq1050:w-5  mq750:w-2 ${currentStep == 4 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 rounded-21xl sm:w-3 mq1050:w-5 mq750:w-2 ${currentStep == 5 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                </div>
              </div>
              {selected ? (
                <div
                  onClick={handleNext}
                  className={`z-[2] box-border  flex  w-[30%] cursor-pointer  flex-row items-center justify-center whitespace-nowrap rounded-xl pt-[23px] pb-[22px] pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] sm:mt-[8px] sm:w-[35%] mq1050:w-[30%] mq750:w-[30%]`}
                >
                  <div className="relative z-[3] text-white-A700 sm:text-[14px] mq1050:text-[16px]">
                    {currentStep}/5 Next
                  </div>
                </div>
              ) : (
                <div
                  className={`z-[2] box-border flex   w-[30%] flex-row items-center justify-center  whitespace-nowrap rounded-xl bg-black-900_33 pt-[23px] pb-[22px] pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] sm:mt-[8px] sm:w-[40%] mq1050:w-[30%] mq1050:text-[16px] mq750:w-[30%] mq750:w-[50%]`}
                >
                  <div className="relative z-[3] text-white-A700 sm:text-[14px]">
                    {currentStep}/5 Next
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
