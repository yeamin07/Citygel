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
      <div className="h-screen w-full px-16 relative">
        <div className="flex flex-col justify-start items-start">
          <Text
            as="p"
            className="mt-[70px] w-[100%] !text-black-900_03 z-[1] font-medium  text-start sm:text-center mq450:text-center  sm:text-[28px] mq450:text-[28px] text-[44px]"
          >
            Select Category
          </Text>
          <Text
            as="p"
            className="w-[100%] mq1500:w-[100%] !text-black-900_87 text-start sm:text-center mq450:text-center z-[1] mt-3 opacity-0.8 sm:text-[14px] mq450:text-[14px] text-[20px] leading-[35px]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum 
          </Text>
          <div>
            <div className="grid grid-cols-4 sm:grid-cols-2 mq450:grid-cols-2 mq750:grid-cols-3 gap-4 w-full mt-6">
              <div
                onClick={() => handleSelect("electric")}
                className={` cursor-pointer flex flex-col items-center justify-start w-[100%] h-[230px]  gap-2.5 p-[11px] border border-solid ${selected == "electric" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} bg-white-A700 shadow-sm rounded-[20px]`}
              >
                <Img
                  src="images/img_frame_orange_400.svg"
                  alt="export_cars_one"
                  className="h-[74px] w-[74px] mt-7"
                />
                <Text
                  size="6xl"
                  as="p"
                  className="mb-[15px] !text-black-900_03"
                >
                  Export Cars
                </Text>
              </div>
              <div
                onClick={() => handleSelect("machinary")}
                className={`flex cursor-pointer flex-col items-center justify-start w-[100%] h-[230px]  gap-2.5 p-[11px] border border-solid ${selected == "machinary" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} bg-white-A700 shadow-sm rounded-[20px]`}
              >
                <Img
                  src="images/img_frame_orange_400_74x74.svg"
                  alt="image"
                  className="h-[74px] w-[74px] mt-[34px]"
                />
                <Text
                  size="6xl"
                  as="p"
                  className="mb-[21px] !text-black-900_03"
                >
                  Motorcycles
                </Text>
              </div>
              <div
                onClick={() => handleSelect("flat")}
                className={`flex flex-col items-center justify-start w-[100%] h-[230px]  gap-2.5 p-[11px] border border-solid ${selected == "flat" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} bg-white-A700 shadow-sm rounded-[20px]`}
              >
                <Img
                  src="images/img_frame.svg"
                  alt="image"
                  className="h-[74px] w-[74px] mt-[34px]"
                />
                <Text
                  size="6xl"
                  as="p"
                  className="w-[72%] !text-black-900_03 text-center"
                >
                  Heavy Vehicles
                </Text>
              </div>

              <div
                onClick={() => handleSelect("vehicles")}
                className={`flex flex-col items-center justify-start w-[100%] h-[230px]  gap-2.5 p-[11px] border border-solid ${selected == "vehicles" ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} bg-white-A700 shadow-sm rounded-[20px]`}
              >
                <Img
                  src="images/img_frame.svg"
                  alt="image"
                  className="h-[74px] w-[74px] mt-[34px]"
                />
                <Text
                  size="6xl"
                  as="p"
                  className="w-[72%] !text-black-900_03 text-center"
                >
                  Heavy Vehicles
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-9">
          <div className="w-[70%] sm:w-[100%] py-9 flex flex-row sm:flex-col mq450:flex-col mq800: mq1050: items-center justify-center  py-0 px-5 box-border max-w-full text-11xl text-white">
            <div className="w-full flex flex-row  items-center justify-between gap-5 max-w-full mq1050:flex-wrap mq1050:justify-center">
              <div className="h-[47px] w-[232px] sm:w-[20%] flex flex-col items-center justify-between">
                <div className=" h-[5px] flex flex-row items-center justify-between relative gap-[10px] z-[2]">
                  <div
                    className={`h-full  w-11 sm:w-3  rounded-21xl ${currentStep == 1 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3 rounded-21xl ${currentStep == 2 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3 rounded-21xl ${currentStep == 3 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3  rounded-21xl ${currentStep == 4 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3 rounded-21xl ${currentStep == 5 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                </div>
              </div>
              {selected ? (
                <div
                  onClick={handleNext}
                  className={`w-[30%] sm:w-[40%] mq750:w-[50%] sm:mt-[-28px] mq750:w-[50%] cursor-pointer rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] box-border whitespace-nowrap z-[2]`}
                >
                  <div className="relative sm:text-[14px] z-[3] text-white-A700">
                    {currentStep}/5 Next
                  </div>
                </div>
              ) : (
                <div
                  className={`w-[30%] sm:w-[40%] mq750:w-[50%] sm:mt-[-28px] mq750:w-[50%]  rounded-xl bg-black-900_33 shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] box-border whitespace-nowrap z-[2]`}
                >
                  <div className="relative sm:text-[14px] z-[3] text-white-A700">
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
