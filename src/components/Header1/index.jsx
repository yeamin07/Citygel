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
import images from '../../assets/images/Citygel-2 white 1.png'
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
      key: '1',
      label: (
        <div className="flex flex-row items-center gap-1 justify-center">
        

        <img className="w-5 rounded-lg" src="https://flagsapi.com/AE/shiny/64.png" alt=""/>


         <a target="_blank" rel="noopener noreferrer" href="#">
        UAE
        </a>
       </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className="flex flex-row items-center gap-1 justify-center">
        

        <img className="w-5 rounded-lg" src="https://flagsapi.com/US/shiny/64.png" alt=""/>


         <a target="_blank" rel="noopener noreferrer" href="#">
       USA
        </a>
       </div>
      ),
    },
    {
      key: '3',
      label: (
       <div className="flex flex-row items-center gap-1 justify-center">
        

        <img className="w-5 rounded-lg" src="https://flagsapi.com/BD/shiny/64.png" alt=""/>


         <a target="_blank" rel="noopener noreferrer" href="#">
     BD
        </a>
       </div>
      ),
    },
  ];
  return (
    <header
      {...props} >
      <div className="w-full mq1050:px-6 px-14  py-5 h-[210px] mq1050:h-[170px] space-y-6 mq1050:space-y-4
  bg-gradient-to-r from-[#003E4C] form-95% to-cyan-800 to-5%  mq500:hidden block">
        <div  className="flex justify-between flex-row mq500:hidden block">
          <Img
            src={images}
            alt="citygel2white"
            className="w-[195px] h-[66px]  mq1050:w-[165px] mq1050:h-[50px]  object-cover shrink-0"
          />
          <div className="flex justify-end items-center flex-row shrink w-[50%] mq1050:space-x-5 space-x-10">
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
                  className="cursor-pointer mt-1 font-poppins !text-gray-50 text-center mq1050:text-[17px] font-medium"
                >
                  Login or Sign up
                </Text>
              </div>
            )}
            {/* me */}
            <div
              className=" mt-4  h-[30px] rounded-2xl flex justify-center  items-center
             inline-block border border-solid border-white-A700 mb-[5px]"
            >
              <div className="flex py-4 px-0.5 justify-start flex-row items-center space-x-1 ">
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
        
            {/* <SelectLanguage /> */}
          </div>
        </div>
        <hr className="border-t-[1px]  border-solid border-blue_gray-100_75 opacity-25  mq500:hidden block" />
        {/*2nd foot part*/}
        <div className="flex flex-row justify-between  mq500:hidden block">
          <div className="flex justify-between items-center shrink">
            <a href="#">
              <Text size="2xl" as="p" className="mr-7 text-[20px] mq1050:text-[16px] font-thin mq1050:mr-4">
                Real Estate
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" className="mr-7 text-[20px] mq1050:text-[16px] font-thin mq1050:mr-4" as="p" >
                Vehicle
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p" className="mr-7 text-[20px] mq1050:text-[16px] font-thin mq1050:mr-4">
                Job
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p" className="mr-7 text-[20px] mq1050:text-[16px] font-thin mq1050:mr-4">
                classyfied(General catagory)
              </Text>
            </a>
          </div>
          <Button
            onClick={() => navigate("/add-post")}
            color="red_A400_01"
            size="4xl"
            variant="fill"
            className="font-aleo font-bold min-w-[190px] shrink-0 mq1050:w-[150px] mq1050:h-[50px]
             mq1050:text-[19px]"
          >
            Post an ad
          </Button>
        </div>
        
      </div>
      {/**MObile version */}
      <div className="hidden mq500:block    bg-gradient-to-r from-[#003E4C] form-95% to-cyan-800 to-5% w-full h-[80px] px-3 py-3 flex justify-center items-center">
       <div className="flex justify-end flex-row space-x-5">
       <div>
      <div className="flex justify-between w-full items-center gap-2">
            
      <img
              alt=""
              src={menu}
              className="hidden mr-11 mq800:block w-[19px] h-[26%]"
            />
       <img src={images}
          alt="ksdfk"
          className="w-[117px] h-[53px] mt-[-2px]"
        />
      </div>
       </div>
        <div className="w-[154px]  h-[34px] flex justify-between items-center mt-[4px]
            border border-solid border-white-A700_63  rounded-3xl  text-white-A700 ">

              <div className="w-[30px] h-[30px] rounded-full border border-solid border-black-900_87 rounded-xl 
             ml-[0.5px] flex justify-center items-center bg-white-A700 "> 
                <Img
                  src={location}
                  alt="arrowdown_one"
                  className="h-[17px] h-[15px]"
                />
              </div>

              <Text as="p" className="text-[11px]">
                Change Location
              </Text>
              <img src={downarrow} 
                className="w-[9px] h-[6px] mr-1"
              />
            </div>
       </div>
        </div>
    </header>
  );
}
