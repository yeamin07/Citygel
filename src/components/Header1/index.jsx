import auth from "firebase.init";
import { Dropdown, Space } from "antd";
import { signOut } from "firebase/auth";
import { Button, Text, Img } from "./..";
import React, { useContext } from "react";
import { location } from "assets/Allimages";
import AuthContext from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import { downarrow, menu } from "assets/Allimages";
import { useAuthState } from "react-firebase-hooks/auth";
import images from "../../assets/images/Citygel-2 white 1.png";

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


  return (
    <header>
      <div className={` pt-5 pb-1 md:block hidden !z-[10000] relative ${bg ? "bg-gradient-to-r from-[#003E4C] form-95% to-cyan-800 to-5%" : "bg-transparent"}`} >

        <div className="flex justify-between flex-row mb-4  container mx-auto px-5">
          <Img
            src="images/img_citygel_2_white.png"
            alt="citygel2white"
            className=" xl:w-[165px] xl:h-[50px] w-[145px] h-[45px] object-cover shrink-0"
          />
          <div className="flex justify-end flex-row  xl:w-[50%] gap-12">
            {user?.uid && tuser ? (
              <div onClick={handleSignOut}>
                <Text
                  size="2xl"
                  as="p"
                  className=" cursor-pointer mt-2 font-poppins !text-gray-50 text-center xl:!text-[18px] !text-[15px]"
                >
                  Sign Out
                </Text>
              </div>
            ) : (
              <div onClick={() => navigate("/login")}>
                <Text
                  size="2xl"
                  as="p"
                  className="cursor-pointer mt-2 font-poppins !text-[#fafafadc] text-center xl:!text-[18px] !text-[15px] !font-thin"
                >
                  Login or Sign up
                </Text>
              </div>
            )}
            <div className="w-[215px] mq1050:w-[170px]  mq1050:h-[37px]  h-[45px] flex justify-between items-center
            border border-solid border-white-A700_63  rounded-3xl mq1050:px-1 py-4 pr-2  text-white-A700 cursor-pointer">

              <div className="w-[35px] h-[35px] mq1050:w-[30px] mq1050:h-[30px] mq1050:rounded-full border border-solid border-black-900_87 rounded-xl  ml-1 mq1050:mr-1
              flex justify-center items-center bg-white-A700 mq1050:ml-[-2px] ">
                <Img
                  src="images/location.png"
                  alt="arrowdown_one"
                  className="h-[20px] mq1050:h-[17px] "
                />
              </div>

              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Text as="p" className="text-[18px] mq1050:text-[11px] ">
                      Change Location
                    </Text>
                    <img src={downarrow}
                      className="w-[10px] h-[7px] mr-1 mq1050:mr-[1px] mq800:mr-[2px]"
                    />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>

        {/*2nd foot part alvi */}
        <div className="md:flex flex-row justify-between   hidden container mx-auto px-5">
          <div className="flex justify-between gap-4 lg:gap-5 xl:gap-7 2xl:gap-9 items-center shrink  ">
            <a href="#">
              <Text size="2xl" as="p" className="xl:!text-[18px] !text-[15px] font-thin">
                Real Estate
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p" className="xl:!text-[18px] !text-[15px] font-thin">
                Vehicle
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p" className="xl:!text-[18px] !text-[15px] font-thin">
                Job
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p" className="xl:!text-[18px] !text-[15px] font-thin">
                classyfied(General catagory)
              </Text>
            </a>
          </div>
          <Button
            onClick={() => navigate("/add-post")}
            color="red_A400_01"
            // size="4xl"
            variant="fill"
            className="font-aleo font-bold !px-12 py-[22px] rounded-md"
          >
            Post an ad
          </Button>
        </div>

      </div>

      {/*Mobile version-Alvi */}
      <div className={`md:hidden block ${bg ? "bg-gradient-to-r from-[#003E4C] form-95% to-cyan-800 to-5%" : "bg-transparent"} w-full h-[80px] px-3 py-3  justify-center items-center overflow-hidden z-[1000] relative`}>
        <div className="flex justify-between flex-row space-x-5 mq400:space-x-2 overflow-hidden ">
          <div>
            <img
              src={menu}
              className="w-[20px] h-[20px] mt-3"
            />
          </div>
          <div>
            <img src={images}
              alt="ksdfk"
              className="w-[117px] h-[53px] mt-[-2px] mq400:w-[90%] mq300:h-[45px]"
            />
          </div>
          <div className="w-[154px] mq500:w-[130px] mq500:h-[30px] h-[34px] flex justify-between items-center mt-[7px]
            border border-solid border-white-A700_63 pr-1 rounded-3xl  text-white-A700 cursor-pointer">

            <div className="w-[30px] h-[30px] mq500:w-[18%] mq500:h-[84%]  border border-solid border-black-900_87 rounded-xl 
             ml-[0.5px] mq500:ml-[1px] flex justify-center items-center bg-white-A700 ">
              <Img
                src={location}
                alt="arrowdown_one"
                className="w-[17px] h-[15px] mq500:h-[13px] mq500:w-[13px]"
              />
            </div>

            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}
                className=" flex justify-center items-center">
                <Space >
                  <p className="text-[11px] mq500:text-[9px]">
                    Change Location
                  </p>
                  <div className="mt-[-4px] w-[9px] mq500:w-[9px]   mq500:mr-[2px]">
                    <img src={downarrow}
                      className="w-[9px] h-[6px] mq400:w-[7px] mq400:h-[5px] mr-3 mq500:mr-2"
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
