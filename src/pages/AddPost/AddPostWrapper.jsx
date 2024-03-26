import React from "react";
import CitygelLogo from "../../components/Footer/CitygelLogo";
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
      key: "1",
      label: (
        <div className="flex flex-row items-center justify-center gap-1">
          Profile
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex flex-row items-center justify-center gap-1">
          Profile
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex flex-row items-center justify-center gap-1">
          Profile
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="">
        <header className=" absolute z-30 flex h-[100px] w-full justify-between overflow-hidden bg-gradient-to-r from-[rgb(16,56,76)] to-[rgb(21,60,77)] mq800:h-[80px]">
          <div
            className="mq550:justify-between mq550:flex-grow mx-7 flex
          
          items-center justify-start"
          >
            <img
              alt=""
              src={menu}
              className="mt-1 hidden h-[26%] w-[19px] mq800:block"
            />
            <Img
              src="images/img_citygel_2.png"
              alt="citygeltwo_one"
              className="mq550:h-4/6 ml-3 h-5/6 mq800:h-[56px]"
            />
          </div>
          {/*This part is for location and user part */}
          <div
            className="mq550:flex-grow-0 mq550:mr-6 mt-2  flex h-[70px] w-[10%] items-center justify-center space-x-4   mq800:space-x-0 mq750:h-[60px] 
         mq450:w-[150px] "
          >
            <div className="block w-[90%] mq800:hidden mq800:w-full">
              <h4 className="font-poppins text-[18px] font-medium">John</h4>

              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: false,
                }}
              >
                <p className="cursor-pointer text-[13px] text-teal-400">
                  {" "}
                  Account <FaCaretDown />{" "}
                </p>
              </Dropdown>
            </div>
            <div className="block mq800:hidden">
              <img
                src={man_pic}
                alt=""
                className="mq750:mt-6px mt-[10px] mr-10 h-full h-[50px] w-[50px] rounded-full mq750:mr-0"
              />
            </div>
            {/**Hidden part for mobile */}
            <div
              className="mt-4 mb-[5px] inline-block flex hidden h-[30px] items-center justify-center rounded-2xl border border-solid  border-white-A700
             mq800:block mq800:w-[100%] mq800:pr-2 mq450:w-[95%] mq450:px-0"
            >
              <div className="flex flex-row items-center justify-start space-x-1 pl-[1px] pt-[1px]">
                <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white-A700">
                  <img src={location} className="h-[21px] w-[20px]" />
                </div>
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <div>
                        <p className="cursor-pointer text-[10px] font-extralight text-white-A700">
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
        <div className="z-20 flex overflow-hidden">
          <img
            src={yellowcurve}
            alt=""
            className="mq550:h-[500px] absolute left-0 top-0 z-10 h-[1067px] w-2/6 mq800:h-[560px] mq800:w-3/6 mq750:top-0 mq450:top-[30px] mq450:h-[470px] mq450:w-4/6"
          />
          <img
            src={greycurve}
            alt=""
            className="mq550:h-[500px] absolute left-0 top-0 z-0 h-[1070px] w-2/6 mq800:h-[560px] mq800:w-3/6 mq450:top-[30px] mq450:h-[470px] mq450:w-4/6"
          />
          <img
            src={bluecurve}
            alt=""
            className="absolute right-0 top-0   h-[780px] w-[89%] mq800:h-[390px] mq800:w-[120%]
          mq450:h-[350px] mq450:w-[130%]"
          />
          <img
            src={sittingman}
            alt=""
            className="absolute right-5 top-48 h-[650px] w-[600px] mq1050:h-[550px] mq1050:w-[500px] mq800:right-8 mq800:top-24 mq800:h-[350px] mq800:w-[390px]
          mq450:right-5 mq450:h-[300] mq450:w-[350px]"
          />
        </div>
      </div>
      <div className="absolute  top-[300px] z-[999] w-[60%] sm:relative sm:w-[100%] mq1125:relative mq800:relative  mq750:relative  mq750:mt-14 mq750:w-[100%]  mq450:relative   mq450:w-[100%]">
        {/* {children} */}
        {currentStep === 1 && <PostCategories />}
        {currentStep === 2 && <PostSubCategory />}
        {currentStep === 3 && <PostFormAd />}
        {currentStep === 4 && <PostMembershipPlan />}
        {currentStep === 5 && (
          <Elements stripe={stripePromise}>
            <PostAddPayment />
          </Elements>
        )}{" "}
      </div>
      {/* <div className="h-screen">
        <CitygelLogo />
      </div> */}
    </div>
  );
};

export default AddPostWrapper;
