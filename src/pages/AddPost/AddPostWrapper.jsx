import React from "react";
import CitygelLogo from "../../components/ai-5pages/CitygelLogo";
import {
  man_pic,
  headerlogo,
  yellowcurve,
  bluecurve,
  greycurve,
  sittingman,
  menu,
  location,
} from "assets/Allimages";
import { FaCaretDown, FaAngleDown } from "react-icons/fa";
import PostCategories from "pages/AddPost/PostCategories";
import { useDispatch, useSelector } from "react-redux";
import PostSubCategory from "pages/AddPost/PostSubCategory";
import PostFormAd from "./PostFormAd";
import PostMembershipPlan from "./PostMembershipPlan";
import PostAddPayment from "./PostAddPayment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Dropdown, Space } from "antd";
import { Img } from "components";

const stripePromise = loadStripe(
  "pk_test_51Ov1cySAeHvI9y2yJ0rfiQdS8DRrkSp9KIhsATonDEL2Yv1w1qKxtuP8NbRxYAUayN3GFilUu6ZRWXXuUp7LdZ2700PaqkmH4c",
);
const AddPostWrapper = () => {
  const dispatch = useDispatch();
  const { currentStep, categories, subcategory } = useSelector(
    (state) => state.post,
  );
  const items = [
    {
      key: '1',
      label: (
        <div className="flex flex-row items-center gap-1 justify-center">
        

      Profile
       </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className="flex flex-row items-center gap-1 justify-center">
        
        Profile
       </div>
      ),
    },
    {
      key: '3',
      label: (
       <div className="flex flex-row items-center gap-1 justify-center">
        
        Profile
       </div>
      ),
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="">
        <header className=" bg-gradient-to-r from-[rgb(16,56,76)] to-[rgb(21,60,77)] w-screen h-[100px] mq800:h-[80px] flex justify-between absolute z-30 overflow-hidden">
          <div className="flex justify-start mq550:justify-between items-center
          
          mx-7 mq550:flex-grow">
            <img
              alt=""
              src={menu}
              className="hidden mq800:block w-[19px] h-[26%]"
            />
                   <Img src="images/img_citygel_2.png" alt="citygeltwo_one"
              className="h-5/6 mq800:h-[56px] mq550:h-4/6 ml-3"/>
           
          </div>
          {/*This part is for location and user part */}
          <div
            className="w-full flex justify-center items-center h-[70px] mq750:h-[60px] mt-2 mq800:space-x-0 space-x-4   mq450:w-[150px] mq550:flex-grow-0 
         mq550:mr-6 "
          >
            <div className="mq800:hidden block mq800:w-full w-[90%]">
              <h4 className="text-[18px] font-medium font-poppins">
                John
              </h4>
          
           
                <Dropdown 
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow={{
        pointAtCenter: false,
      }}
    >
      <p className="text-teal-400 text-[13px] cursor-pointer"> Account <FaCaretDown />       </p>
    </Dropdown>
       
            </div>
            <div className="mq800:hidden block">
              <img
                src={man_pic}
                alt=""
                className="h-full rounded-full mt-[10px] mq750:mt-6px w-[50px] h-[50px] mr-10 mq750:mr-0"
              />
            </div>
            {/**Hidden part for mobile */}
            <div
              className="hidden mq800:block mt-4 mq450:w-[95%] mq550:w-[100%] mq800:pr-2 mq450:px-0 h-[30px] rounded-2xl flex justify-center  items-center
             inline-block border border-solid border-white-A700 mb-[5px]"
            >
              <div className="flex justify-start flex-row items-center space-x-1 pl-[1px] pt-[1px]">
                <div className="flex justify-center items-center bg-white-A700 h-[26px] w-[26px] rounded-full">
                  <img src={location} className="w-[20px] h-[21px]" />
                </div>
                <Dropdown 
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
     <div>
     <p className="text-[10px] text-white-A700 font-extralight cursor-pointer">
      Change Location <FaAngleDown />
             </p>
     </div>
  
      </Space>
    </a>
  </Dropdown>
               
              </div>
            </div>
          </div>
        </header>
        <div className="flex overflow-hidden z-20">
          <img
            src={yellowcurve}
            alt=""
            className="w-2/6 h-[1067px] mq800:h-[560px] mq450:h-[470px] mq450:top-[30px] mq450:w-4/6 mq550:h-[500px] absolute left-0 top-0 mq750:top-0 z-10 mq800:w-3/6"
          />
          <img
            src={greycurve}
            alt=""
            className="w-2/6 h-[1070px] mq800:h-[560px] mq450:h-[470px] mq450:top-[30px] mq450:w-4/6 mq550:h-[500px] absolute left-0 top-0 z-0 mq800:w-3/6"
          />
          <img
            src={bluecurve}
            alt=""
            className="w-[89%] h-[780px] mq800:h-[390px]   absolute right-0 top-0 mq800:w-[120%]
          mq450:h-[350px] mq450:w-[130%]"
          />
          <img
            src={sittingman}
            alt=""
            className="absolute mq800:right-8 mq800:top-24 right-5 top-48 mq800:w-[390px] mq1050:w-[500px] mq1050:h-[550px] mq800:h-[350px] w-[600px] h-[650px]
          mq450:w-[350px] mq450:h-[300] mq450:right-5"
          />
        </div>
      </div>
      <div className="absolute  mq750:mt-14 sm:relative mq450:relative mq750:relative mq800:relative top-[300px] z-[999]  mq1125:relative  sm:w-[100%] mq450:w-[100%]  mq750:w-[100%]   w-[60%]">
        {/* {children} */}
        {currentStep === 1 && <PostCategories />}
        {currentStep === 2 && <PostSubCategory />}
        {currentStep === 3 && <PostFormAd />}
        {currentStep === 4 && <PostMembershipPlan />}
        {currentStep === 5 && (
          <Elements stripe={stripePromise}>
            <PostAddPayment />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default AddPostWrapper;
