import React, { useContext } from "react";
import { Button, Text, Img } from "./..";
import { signOut } from "firebase/auth";
import auth from "firebase.init";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthContext from "context/AuthContext";
import { downarrow, menu } from "assets/Allimages";
import SelectLanguage from "./select-language/SelectLanguage";
import { FaAngleDown } from "react-icons/fa";
import { Dropdown, Space } from "antd";
import { location } from "assets/Allimages";
import images from "../../assets/images/Citygel-2 white 1.png";
export default function Header1({ ...props }) {
  const navigate = useNavigate();
  let { logoutUser, tuser } = useContext(AuthContext);
  const [user] = useAuthState(auth);

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
  console.log(user);
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
    <header {...props}>
      <div
        className="form-95% to-5% block  h-[210px] w-full space-y-6 bg-gradient-to-r from-[#003E4C]
  to-cyan-800 px-14 py-5 mq1050:h-[170px] mq1050:space-y-4  mq1050:px-6 mq500:hidden"
      >
        <div className="block flex flex-row justify-between mq500:hidden">
          <Img
            src={images}
            alt="citygel2white"
            className="h-[66px] w-[195px]  shrink-0 object-cover  mq1050:h-[50px] mq1050:w-[165px]"
          />
          <div className="flex w-[50%] shrink flex-row items-center justify-end space-x-10 mq1050:space-x-5">
            {user?.uid && tuser ? (
              <div onClick={handleSignOut}>
                <Text
                  size="2xl"
                  as="p"
                  className=" mt-1 cursor-pointer text-center font-poppins !text-gray-50"
                >
                  Sign Out
                </Text>
              </div>
            ) : (
              <div onClick={() => navigate("/login")}>
                <Text
                  size="2xl"
                  as="p"
                  className="mt-1 cursor-pointer text-center font-poppins font-medium !text-gray-50 mq1050:text-[17px]"
                >
                  Login or Sign up
                </Text>
              </div>
            )}
            {/* me */}
            <div
              className=" mt-4  mb-[5px] inline-block flex h-[50px] w-[223px]  items-center
             justify-center rounded-[50px] border border-solid border-white-A700"
            >
              <div className="flex  flex-row items-center justify-between  gap-4 ">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white-A700">
                  <img src={location} className="h-[24px] w-[24px]" />
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
                        <p className="flex cursor-pointer items-center justify-center text-[16px] font-extralight text-white-A700 mq750:text-[8px]">
                          Change Location <FaAngleDown className="mt-1 w-5" />
                        </p>
                      </div>
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>

            {/* <SelectLanguage /> */}
          </div>
        </div>
        <hr className="block  border-t-[1px] border-solid border-blue_gray-100_75  opacity-25 mq500:hidden" />
        {/*2nd foot part*/}
        <div className="block flex flex-row  justify-between mq500:hidden">
          <div className="flex shrink items-center justify-between">
            <a href="#">
              <Text
                size="2xl"
                as="p"
                className="mr-7 text-[20px] font-thin mq1050:mr-4 mq1050:text-[16px]"
              >
                Real Estate
              </Text>
            </a>
            <a href="#">
              <Text
                size="2xl"
                className="mr-7 text-[20px] font-thin mq1050:mr-4 mq1050:text-[16px]"
                as="p"
              >
                Vehicle
              </Text>
            </a>
            <a href="#">
              <Text
                size="2xl"
                as="p"
                className="mr-7 text-[20px] font-thin mq1050:mr-4 mq1050:text-[16px]"
              >
                Job
              </Text>
            </a>
            <a href="#">
              <Text
                size="2xl"
                as="p"
                className="mr-7 text-[20px] font-thin mq1050:mr-4 mq1050:text-[16px]"
              >
                classyfied(General catagory)
              </Text>
            </a>
          </div>
          <Button
            onClick={() => navigate("/add-post")}
            color="red_A400_01"
            size="4xl"
            variant="fill"
            className="min-w-[190px] shrink-0 font-aleo font-bold mq1050:h-[50px] mq1050:w-[150px]
             mq1050:text-[19px]"
          >
            Post an ad
          </Button>
        </div>
      </div>
      {/**MObile version */}
      <div className="form-95% to-5%    flex hidden h-[80px] w-full items-center justify-center bg-gradient-to-r from-[#003E4C] to-cyan-800 px-3 py-3 mq500:block">
        <div className="flex flex-row justify-end space-x-5">
          <div>
            <div className="flex w-full items-center justify-between gap-2">
              <img
                alt=""
                src={menu}
                className="mr-11 hidden h-[26%] w-[19px] mq800:block"
              />
              <img
                src={images}
                alt="ksdfk"
                className="mt-[-2px] h-[53px] w-[117px]"
              />
            </div>
          </div>
          <div
            className="mt-[4px]  flex h-[34px] w-[154px] items-center justify-between
            rounded-3xl border border-solid  border-white-A700_63  text-white-A700 "
          >
            <div
              className="ml-[0.5px] flex h-[30px] w-[30px] items-center justify-center rounded-full 
             rounded-xl border border-solid border-black-900_87 bg-white-A700 "
            >
              <Img
                src={location}
                alt="arrowdown_one"
                className="h-[17px] h-[15px]"
              />
            </div>

            <Text as="p" className="text-[11px]">
              Change Location
            </Text>
            <img src={downarrow} className="mr-1 h-[6px] w-[9px]" />
          </div>
        </div>
      </div>
    </header>
  );
}
