import {useState} from "react";
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
import { Drawer, Dropdown, Menu, Space } from "antd";
import { IoMdClose } from "react-icons/io";
import { Button } from "components";
import whiteLogo from "../../assets/Allimages/whiteLogo.png";
import { logo } from "assets/Allimages";
import { FaCaretDown, FaAngleDown } from "react-icons/fa";
import PostCategories from "pages/AddPost/PostCategories";
import { useDispatch, useSelector } from "react-redux";
import PostSubCategory from "pages/AddPost/PostSubCategory";
import PostFormAd from "./PostFormAd";
import PostMembershipPlan from "./PostMembershipPlan";
import PostAddPayment from "./PostAddPayment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
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

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };


  const navbar = [
    {
      item: "Real Estate",
      link: "#",
      value: "real-estate",
    },
    {
      item: "Vehacle",
      link: "#",
      value: "vehacle2",
    },
    {
      item: "Car",
      link: "#",
      value: "veh3acle",
    },
    {
      item: "Watch",
      link: "#",
      value: "ve4hacle",
    },
    {
      item: "Mobile",
      link: "#",
      value: "veha1cle",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div>
        {/* For Navbar  */}
        <header className=" relative z-30 flex h-[100px] w-full justify-between overflow-hidden bg-gradient-to-r from-[rgb(16,56,76)] to-[rgb(21,60,77)] ">
          <div className="container mx-auto flex items-center justify-between mq400:px-1 px-5">
            {/* <div>
              <img alt="" src={menu} className="sm:hidden" />
            </div> */}


















            {/*~~~~~~~~~~~Menu Button~~~~~~~~~~~~~*/}
          <div className="block sm:hidden mt-[-10px]">
            <Button
              className="barsMenu bg-transparent"
              type="primary"
              onClick={showDrawer}
            >
              <img src={menu} className="mt-3 h-[20px] w-[20px]" alt="Menu" />
            </Button>
            <Drawer
              style={{ backgroundColor: "#044558" }}
              className="bg-[#044558]"
              title={
                <div className="">
                  <div className="flex flex-wrap items-center justify-between ">
                    <img src={logo} className="w-24" alt="" />
                    <Button
                      type="text"
                      className="text-white-A700"
                      onClick={onClose}
                    >
                      <IoMdClose />
                    </Button>
                  </div>
                </div>
              }
              placement="left"
              closable={false}
              onClose={onClose}
              visible={visible}
              width={"70%"}
              maskClosable={true} // Allow closing when clicking outside the Drawer
            >
              <Menu mode="vertical" className="bg-[#044558]">
                {navbar.map((item) => (
                  <Menu.Item key={item.value} className="text-white-A700">
                    <a className="text-white-A700 " href={item.link}>
                      {item.item}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            </Drawer>
          </div>

            <Img src={whiteLogo} alt="citygeltwo_one" className=" w-32" />

            {/*This part is for location and user part */}

            <div className="hidden items-center gap-3 sm:flex">
              <div className="block ">
                <h4 className="font-poppins text-[18px] font-medium text-[#fff]">
                  John Smith
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
                  <p className="cursor-pointer text-[13px] text-teal-400">
                    {" "}
                    My Account <FaCaretDown />{" "}
                  </p>
                </Dropdown>
              </div>
              <div className="block mq800:hidden">
                <img
                  src={man_pic}
                  alt=""
                  className="mq750:mt-6px mt-[10px] mr-10  h-[50px] w-[50px] rounded-full mq750:mr-0"
                />
              </div>
            </div>
            {/**Hidden part for mobile */}
            <div className=" flex h-[30px]  items-center justify-center rounded-2xl border border-solid border-white-A700  sm:hidden">
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
          {/*~~~~~~~~~~~~~~~~Mobile navbar end~~~~~~~~~~~~~~~~ */}




















        </header>
        {/* For Navbar  */}

        <div className="z-20 flex overflow-hidden">
          <img
            src={yellowcurve}
            alt=""
            className=" absolute left-0 top-0 z-10 mq825:h-[800px] mq825:w-[60%]  h-[400px] w-full sm:h-[1067px] sm:w-2/6 mq500:relative mq500:z-[1] mq500:top-0 mq500:w-[20%] mq500:h-[350px]"
          />
          <img
            src={greycurve}
            alt=""
            className="absolute left-0 top-0 z-0  mq825:h-[800px] mq825:w-[60%] h-[450px] sm:h-[1070px] sm:w-2/6 mq500:hidden mq500:z-[0]"
          />
          <img
            src={bluecurve}
            alt=""
            className="absolute right-0 top-0   h-[400px] w-[89%] sm:h-[780px] mq825:h-[600px] mq800:w-[89%]
          mq500:h-[350px] mq500:w-[150%] mq500:z-[5] "
          />
        </div>
      </div>

      {/* Body */}

      <div className="mq1050:mt-28 container relative z-50 mx-auto  mt-10 px-5 text-center mq500:mt-[-340px] lg:text-left mq825:mt-[-10px]">
        {/* {children} */}
        <div className="flex flex-col-reverse  items-center lg:flex-row lg:items-start ">
          <div className=" xl:w-[65%] 2xl:w-[60%]">
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

          <div className="  flex w-[35%] justify-center lg:justify-end 2xl:w-[40%]">
            <img
              src={sittingman}
              alt=""
              className="  h-[320px] sm:h-[490px] sm:w-[520px] md:h-[620px] md:w-[650px] lg:h-[650px] lg:w-[550px] 2xl:h-[660px] 2xl:w-[720px] "
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-36  flex w-full items-center justify-center ">
        <CitygelLogo />{" "}
      </div>
    </div>
  );
};

export default AddPostWrapper;
