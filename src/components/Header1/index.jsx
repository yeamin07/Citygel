import auth from "firebase.init";
import { Drawer, Dropdown, Menu, Space } from "antd";
import { signOut } from "firebase/auth";
import { Button, Text, Img } from "./..";
import React, { useContext, useEffect, useState } from "react";
import { man_pic } from "assets/Allimages";
import location from "../../assets/Allimages/location.png";
import AuthContext from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import { downarrow, menu } from "assets/Allimages";
import { useAuthState } from "react-firebase-hooks/auth";
import images from "../../assets/images/Citygel-2 white 1.png";
import logo from "../../assets/Allimages/logo.png";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";
import axios, { BASE_URL } from "config/api/axios";
const profile = [
  {
    label: "Profile",
    link: "/profile",
    value: "profile",
  },
  {
    label: "Dashboard",
    link: "/dashboard",
    value: "dashboard",
  },
];
export default function Header1({ bg = true }) {
  const navigate = useNavigate();
  let { logoutUser, tuser } = useContext(AuthContext);
  const [user] = useAuthState(auth);
  const [activeItem, setActiveItem] = useState(null);
  const [singleUser, setSingleUser] = useState({});
  console.log(user?.email);
  const handleSignOut = async () => {
    try {
      logoutUser();
      await signOut(auth);
      console.log("signout", user);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const getSingleUser = await axios(`${BASE_URL}/users/${user?.email}/`);
        setSingleUser(getSingleUser.data.data);
      } catch (error) {}
    };
    fetchUser();
  }, [user]);
  // Country

  const items = [
    {
      key: "1",
      label: (
        <div className="z-[1000] flex flex-row items-center justify-center gap-1">
          <img
            className="w-5 rounded-lg"
            src="https://flagsapi.com/AE/shiny/64.png"
            alt=""
          />

          <a target="_blank" rel="noopener noreferrer" href="#">
            UAE
          </a>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex flex-row items-center justify-center gap-1">
          <img
            className="w-5 rounded-lg"
            src="https://flagsapi.com/US/shiny/64.png"
            alt=""
          />

          <a target="_blank" rel="noopener noreferrer" href="#">
            USA
          </a>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex flex-row items-center justify-center gap-1">
          <img
            className="w-5 rounded-lg"
            src="https://flagsapi.com/BD/shiny/64.png"
            alt=""
          />

          <a target="_blank" rel="noopener noreferrer" href="#">
            BD
          </a>
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

  const handleMenuClick = (e) => {
    console.log("Clicked on item:", e.key);
    // You can add your logic here for handling menu item clicks
  };

  const menuNav = (
    <Menu onClick={handleMenuClick}>
      {profile.map((item) => (
        <Menu.Item
          className="cursor-pointer"
          key={item.value}
          onClick={() => navigate(item.link)}
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <header>
      <div
        className={` relative !z-[1000] hidden pt-5 pb-3 md:block ${bg ? "form-95% to-5% bg-gradient-to-r from-[#003E4C] to-cyan-800" : "bg-transparent"}`}
      >
        <div className="container mx-auto mb-4 flex  flex-row justify-between px-5">
          <Img
            onClick={() => navigate("/")}
            src={logo}
            alt="citygel2white"
            className=" h-[45px] w-[145px] shrink-0 cursor-pointer object-cover xl:h-[50px] xl:w-[165px]"
          />
          <div className="flex flex-row justify-end  gap-[14px] xl:w-[50%]">
            {/*~~~~~~~~~~~user man pic ~~~~~~~~~~~~~~~ */}

            {user?.uid && tuser ? (
              <>
                <div className="hidden h-auto w-[10rem] flex-row justify-start gap-[0px] sm:flex">
                  <div className="flex flex-col  justify-start gap-[2px]">
                    <p className=" text-white-A700 md:text-[13px] lg:text-[15px]">
                      {singleUser?.fullName}
                    </p>
                    <Dropdown
                      className="mt-[-10px]"
                      overlay={menuNav}
                      trigger={["click"]}
                    >
                      <a
                        className=" cursor-pointer"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Space className="z-50">
                          <div className="mt-[-5px] flex h-[12px] w-[6rem] gap-[2px] text-[10px] text-cyan-500">
                            My Account{" "}
                            <RiArrowDropDownFill className="mt-[-2px] text-[20px]" />
                          </div>
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                  <div>
                    <img
                      src={man_pic}
                      className="ml-[-10px] h-[40px] w-[40px] rounded-full hover:border-[1px] hover:border-solid hover:border-cyan-700 lg:h-[50px] lg:w-[50px]"
                    />
                  </div>
                </div>
                <div onClick={handleSignOut}>
                  <Text
                    size="2xl"
                    as="p"
                    className=" mt-2 cursor-pointer text-center font-poppins !text-[15px] !text-gray-50 xl:!text-[18px]"
                  >
                    Sign Out
                  </Text>
                </div>
              </>
            ) : (
              <div onClick={() => navigate("/login")}>
                <Text
                  size="2xl"
                  as="p"
                  className="mt-2 cursor-pointer text-center font-poppins !text-[15px] !font-thin !text-[#fafafadc] xl:!text-[18px]"
                >
                  Login or Sign up
                </Text>
              </div>
            )}
            {/*Change location section~~~~~~~~~~~ */}
            <div
              className="flex h-[45px]  w-[215px]  cursor-pointer items-center justify-between rounded-3xl
            border border-solid border-white-A700_63  py-4 pr-2 text-white-A700 mq1050:h-[37px]  mq1050:w-[170px] mq1050:px-1"
            >
              <div
                className="ml-1 flex h-[35px] w-[35px] items-center justify-center rounded-xl border border-solid  border-black-900_87 bg-white-A700
              mq1050:mr-1 mq1050:ml-[-2px] mq1050:h-[30px] mq1050:w-[30px] mq1050:rounded-full "
              >
                <Img
                  src={location}
                  alt="arrowdown_one"
                  className="h-[20px] mq1050:h-[17px] "
                />
              </div>

              <Dropdown
                className=""
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="z-50">
                    <Text as="p" className="text-[18px] mq1050:text-[11px] ">
                      Change Location
                    </Text>
                    <img
                      src={downarrow}
                      className="mr-1 h-[7px] w-[10px] mq1050:mr-[1px] mq800:mr-[2px]"
                    />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>

        {/*2nd foot part alvi */}
        <div className="container mx-auto hidden   flex-row justify-between px-5 md:flex">
          <div className="flex shrink items-center justify-between gap-4 lg:gap-5 xl:gap-7 2xl:gap-9  ">
            {navbar.map((item) => (
              <a href={item.link}>
                <Text
                  size="2xl"
                  as="p"
                  className="!text-[15px] font-thin xl:!text-[18px]"
                >
                  {item.item}
                </Text>
              </a>
            ))}
          </div>
          <Button
            onClick={() => navigate("/add-post")}
            color="red_A400_01"
            // size="4xl"
            variant="fill"
            className="z-20 rounded-md !px-12 py-[22px] font-aleo font-bold"
          >
            Post an ad
          </Button>
        </div>
      </div>

      {/*Mobile version-Alvi */}
      <div
        className={`block md:hidden ${bg ? "form-95% to-5% bg-gradient-to-r from-[#003E4C] to-cyan-800" : "bg-transparent"} relative z-[1000] h-[80px] w-full  items-center justify-center overflow-hidden px-3 py-3`}
      >
        <div className="flex flex-row justify-between space-x-5 overflow-hidden mq400:space-x-2 ">
          <div>
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

          <div>
            <img
              src={images}
              alt="ksdfk"
              className="mq300:h-[45px] mt-[-2px] h-[53px] w-[117px] mq400:w-[90%]"
            />
          </div>
          <div
            className="mt-[7px] flex h-[34px] w-[154px] cursor-pointer items-center justify-between rounded-3xl
            border border-solid border-white-A700_63 pr-1 text-white-A700  mq500:h-[30px] mq500:w-[130px]"
          >
            <div
              className="ml-[0.5px] flex h-[30px] w-[30px]  items-center justify-center rounded-xl border 
             border-solid border-black-900_87 bg-white-A700 mq500:ml-[1px] mq500:h-[84%] mq500:w-[18%] "
            >
              <Img
                src={location}
                alt="arrowdown_one"
                className="h-[15px] w-[17px] mq500:h-[13px] mq500:w-[13px]"
              />
            </div>

            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a
                onClick={(e) => e.preventDefault()}
                className=" flex items-center justify-center"
              >
                <Space>
                  <p className="text-[11px] mq500:text-[9px]">
                    Change Location
                  </p>
                  <div className="mt-[-4px] w-[9px] mq500:mr-[2px]   mq500:w-[9px]">
                    <img
                      src={downarrow}
                      className="mr-3 h-[6px] w-[9px] mq500:mr-2 mq400:h-[5px] mq400:w-[7px]"
                    />
                  </div>
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}
