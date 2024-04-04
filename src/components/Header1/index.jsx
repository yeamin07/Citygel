import auth from "firebase.init";
import { Drawer, Dropdown, Menu, Space } from "antd";
import { signOut } from "firebase/auth";
import { Button, Text, Img } from "./..";
import React, { useContext, useState } from "react";
import { location, logo,man_pic } from "assets/Allimages";
import AuthContext from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import { downarrow, menu } from "assets/Allimages";
import { useAuthState } from "react-firebase-hooks/auth";
import images from "../../assets/images/Citygel-2 white 1.png";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";
export default function Header1({ bg = true }) {
  const navigate = useNavigate();
  let { logoutUser, tuser } = useContext(AuthContext);
  const [user] = useAuthState(auth);

  // SignOut
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

  // Country
  const items = [
    {
      key: "1",
      label: (
        <div className="flex flex-row items-center justify-center gap-1">
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
  return (
    <header>
      <div
        className={` relative !z-[10000] hidden pt-5 pb-3 md:block ${bg ? "form-95% to-5% bg-gradient-to-r from-[#003E4C] to-cyan-800" : "bg-transparent"}`}
      >
        <div className="container mx-auto mb-4 flex  flex-row justify-between px-5">
          <Img
            src="images/img_citygel_2_white.png"
            alt="citygel2white"
            className=" h-[45px] w-[145px] shrink-0 object-cover xl:h-[50px] xl:w-[165px]"
          />
          <div className="xl:w-[50%] flex flex-row  justify-end gap-[14px]">
              {/*~~~~~~~~~~~user man pic ~~~~~~~~~~~~~~~ */}
              <div className="hidden sm:flex flex-row justify-start gap-[0px] w-[10rem] h-auto">
                <div className="flex flex-col justify-start gap-[5px]">
                  <p className="text-[15px] text-white-A700">John smit</p>
                  <div className="text-[10px] text-cyan-500 flex gap-[2px] h-[12px] w-[6rem]" >My Account <RiArrowDropDownFill className="text-[20px] mt-[-2px]"/></div>
                </div>
                <div><img src={man_pic} className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full"/></div>
              </div>
            {user?.uid && tuser ? (
              <div onClick={handleSignOut}>
                <Text
                  size="2xl"
                  as="p"
                  className=" mt-2 cursor-pointer text-center font-poppins !text-[15px] !text-gray-50 xl:!text-[18px]"
                >
                  Sign Out
                </Text>
              </div>
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
                  src="images/location.png"
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
            <a href="#">
              <Text
                size="2xl"
                as="p"
                className="!text-[15px] font-thin xl:!text-[18px]"
              >
                Real Estate
              </Text>
            </a>
            <a href="#">
              <Text
                size="2xl"
                as="p"
                className="!text-[15px] font-thin xl:!text-[18px]"
              >
                Vehicle
              </Text>
            </a>
            <a href="#">
              <Text
                size="2xl"
                as="p"
                className="!text-[15px] font-thin xl:!text-[18px]"
              >
                Job
              </Text>
            </a>
            <a href="#">
              <Text
                size="2xl"
                as="p"
                className="!text-[15px] font-thin xl:!text-[18px]"
              >
                classyfied(General catagory)
              </Text>
            </a>
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
              // className="bg-[#044558]"
              title={
                <div>
                  <div className="flex flex-wrap items-center justify-between ">
                    <img
                      src={"images/img_citygel_2_white.png"}
                      className="w-24"
                      alt=""
                    />
                    <Button type="text" onClick={onClose}>
                      <IoMdClose />
                    </Button>
                  </div>
                </div>
              }
              placement="left"
              closable={false}
              onClose={onClose}
              visible={visible}
              width={"20%"}
              maskClosable={true} // Allow closing when clicking outside the Drawer
            >
              <Menu mode="vertical">
                <Menu.Item key="mail">
                  <a href="">Signin</a>
                </Menu.Item>
                <Menu.Item key="app">
                  <a href="">Signup</a>
                </Menu.Item>
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
