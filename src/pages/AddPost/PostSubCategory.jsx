import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import Header1 from "components/Header1";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep, setSubCategory } from "store/slices/adsPostSlice";

export default function PostSubCategory() {
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    setSelected(e);
    if (e != "") {
      dispatch(setSubCategory(e));
    }
  };

  const { currentStep, category, subcategory } = useSelector(
    (state) => state.post,
  );

  const handleNext = () => {
    dispatch(nextStep());
  };
  const handlePrev = () => {
    dispatch(prevStep());
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
      <div className="relative w-full sm:pr-10 z-[100]">
        <div className="flex  flex-col items-start lg:justify-start justify-center">
          <Text
            as="p"
            className="text-start z-[1] mt-[70px] w-[100%] sm:text-[44px] text-[27px] font-medium !text-black-900_03 sm:text-left text-center  "
          >
            Select SubCategory of Motors
          </Text>
          <Text
            as="p"
            className="sm:text-left z-[1] mt-4 !text-black-900_87 opacity-0.8 text-center sm:text-[15px] text-sm sm:w-[80%] "
          >Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum </Text>


          {/* Caterory list */}
          <div className="mt-6 grid w-full sm:grid-cols-4 gap-4 grid-cols-2 ">
            {
              ["Cars", "Export Cars", "Motorcycles", "Heavy Vehicles", "Boats", "Cars", "Export Cars", "Motorcycles"]?.map((data, index) => <div key={data?.index}
                onClick={() => handleSelect(data)}
                className={`flex 2xl:py-5 w-[100%] flex-col items-center justify-start gap-2.5  border border-solid   ${selected == data ? "gray_50_02_red_A400_border" : "gray_50_02_red_A400_active"} rounded-[20px] bg-white-A700 shadow-sm`}
              >
                <Img
                  src="images/img_frame_orange_400.svg"
                  alt="export_cars_one"
                  className="mt-7 2xl:h-[74px] h-14 2xl:w-[74px] w-auto "
                />
                <Text
                  as="p"
                  className="mb-[15px] 2xl:text-[24px] !text-black-900_03  text-[16px]"
                >
                  {data}
                </Text>
              </div>)
            }
          </div>
        </div>



        <div className="mt-9  w-full">
          <div className="mq800: text-white box-border flex lg:w-[80%] max-w-full flex-row justify-center py-0 px-5  text-11xl sm:w-[100%] sm:flex-col ">
            <div className="flex w-full max-w-full  flex-row items-center  gap-5 md:justify-between justify-end ">

              {currentStep > 1 &&
                <div
                  onClick={handlePrev}
                  // className={`z-[2] box-border flex   w-[30%] flex-row items-center justify-center  whitespace-nowrap rounded-xl bg-black-900_33 pt-[23px] pb-[22px] pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] sm:mt-[8px] sm:w-[40%] `}

                  className={`z-[2] box-border  flex  md:w-[35%] cursor-pointer  flex-row items-center justify-center whitespace-nowrap md:rounded-xl rounded-md md:pt-[23px] md:pb-[22px] pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] bg-black-900_33 py-2 px-16 `}
                >
                  <div className="relative z-[3] text-white-A700 text-[14px] ">
                    Previous
                  </div>
                </div>
              }


              <div className="  flex  flex-col items-center justify-start sm:w-[20%] ">
                <div className=" relative z-[2] flex h-[5px] flex-row items-center justify-between gap-[10px]">
                  {
                    [1, 2, 3, 4, 5]?.map(data => <div
                      className={`h-full  w-3 rounded-21xl sm:w-4  ${currentStep == data ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                    />)
                  }
                </div>
              </div>

              <div
                onClick={handleNext}
                className={`z-[2] box-border  flex  md:w-[35%] cursor-pointer  flex-row items-center justify-center whitespace-nowrap md:rounded-xl rounded-md md:pt-[23px] md:pb-[22px] pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] py-2 px-16 `}
              >
                <div className="relative z-[3] text-white-A700 text-[14px] ">
                  {currentStep}/5 Next
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
