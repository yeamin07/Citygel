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
        className="w-full mq1050:px-6 px-14  py-5 h-[236px] mq1050:h-[185px] space-y-6 mq1050:space-y-4
      bg-gradient-to-r from-[#003E4C] form-95% to-cyan-800 to-5%
        mq500:hidden block"
      >
        {/* <div className="block flex flex-row justify-between mq500:hidden">
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
          </div>
        </div> */}
        <div className="flex justify-between flex-row mq500:hidden block">
          <Img
            src="images/img_citygel_2_white.png"
            alt="citygel2white"
            className="w-[195px] h-[66px]  mq1050:w-[165px] mq1050:h-[50px] mq800:w-[145px] mq800:h-[45px] object-cover shrink-0"
          />
          <div className="flex justify-end flex-row shrink w-[50%] mq800:w-[60%] mq1050:space-x-5 mq800:space-x-2 space-x-10">
            {user?.uid && tuser ? (
              <div onClick={handleSignOut}>
                <Text
                  size="2xl"
                  as="p"
                  className=" cursor-pointer mt-1 font-poppins !text-gray-50 text-center"
                >
                  Sign Out
                </Text>
              </div>
            ) : (
              <div onClick={() => navigate("/login")}>
                <Text
                  size="2xl"
                  as="p"
                  className="cursor-pointer mt-1 font-poppins !text-gray-50 text-center mq1050:text-[17px] mq800:text-[14px] font-medium"
                >
                  Login or Sign up
                </Text>
              </div>
            )}
            <div className="w-[220px] mq1050:w-[170px]  mq1050:h-[37px]  h-[45px] flex justify-between items-center
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
                    <Text as="p" className="text-[18px] mq1050:text-[11px]">
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
        <hr className="block  border-t-[1px] border-solid border-blue_gray-100_75  opacity-25 mq500:hidden" />
        {/*2nd foot part*/}
        {/* <div className="block flex flex-row  justify-between mq500:hidden">
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
        </div> */}
        {/*2nd foot part alvi */}
        <div className="flex flex-row justify-between  mq500:hidden block">
          <div className="flex justify-between items-center shrink">
            <a href="#">
              <Text size="2xl" as="p" className="mr-7 text-[20px] mq1050:text-[16px] mq800:text-[13px] font-thin mq1050:mr-4">
                Real Estate
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p" className="mr-7 text-[20px] mq1050:text-[16px] mq800:text-[13px] font-thin  mq1050:mr-4" >
                Vehicle
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p" className="mr-7 text-[20px] mq1050:text-[16px] mq800:text-[13px] font-thin mq1050:mr-4">
                Job
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p" className="mr-7 text-[20px] mq1050:text-[16px] mq800:text-[13px] font-thin mq1050:mr-4">
                classyfied(General catagory)
              </Text>
            </a>
          </div>
          <Button
            onClick={() => navigate("/add-post")}
            color="red_A400_01"
            // size="4xl"
            variant="fill"
            className="font-aleo font-bold w-[200px] h-[75px] text-[24px] shrink-0 mq1050:w-[150px] mq1050:h-[50px] 
            mq800:w-[130px] mq800:h-[43px] mq1050:text-[19px] mq800:text-[16px]"
          >
            Post an ad
          </Button>
        </div>

      </div>
      {/**MObile version */}
      {/* <div className="form-95% to-5%    flex hidden h-[80px] w-full items-center justify-center bg-gradient-to-r from-[#003E4C] to-cyan-800 px-3 py-3 mq500:block">
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
      </div> */}
      {/*Mobile version-Alvi */}
      <div className="hidden mq500:block bg-gradient-to-r from-[#003E4C] to-cyan-800 w-full h-[80px] px-3 py-3 flex justify-center items-center overflow-hidden">
        <div className="flex justify-between flex-row space-x-5 mq400:space-x-2 overflow-hidden">
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
          <div className="w-[154px] mq500:w-[130px] mq500:h-[30px] h-[34px] flex justify-between items-center mt-[4px] mq500:mt-[7px]
            border border-solid border-white-A700_63  rounded-3xl  text-white-A700 cursor-pointer">

            <div className="w-[30px] h-[30px] mq500:w-[18%] mq500:h-[84%] rounded-full border border-solid border-black-900_87 rounded-xl 
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
