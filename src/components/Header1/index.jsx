import React, { useContext } from "react";
import { Button, Text, Img } from "./..";
import { signOut } from "firebase/auth";
import auth from "firebase.init";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthContext from "context/AuthContext";
import SelectLanguage from "./select-language/SelectLanguage";
import { FaAngleDown } from "react-icons/fa";
import { Dropdown, Space } from "antd";
import { location } from "assets/Allimages";

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
      {...props}
      className={` w-full h-200 head bg-[url(images/header.webp)]`}
    >
      <div className="pl-24 pr-24 mr-auto pb-3 ">
        <div className="flex  justify-between items-center w-full py-3 mx-auto max-w-[1427px]">
          <Img
            src="images/img_citygel_2_white.png"
            alt="citygel2white"
            className="w-[15%] object-cover"
          />
          <div className="w-full flex gap-6 flex-wrap items-center justify-end ">
            {user?.uid && tuser ? (
              <div onClick={handleSignOut}>
                <Text
                  size="2xl"
                  as="p"
                  className=" cursor-pointer font-poppins !text-gray-50 text-center"
                >
                  Sign Out
                </Text>
              </div>
            ) : (
              <div onClick={() => navigate("/login")}>
                <Text
                  size="2xl"
                  as="p"
                  className="cursor-pointer font-poppins !text-gray-50 text-center"
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
        <div className="flex flex-row justify-between items-center w-full mb-2 mt-8 mx-auto max-w-[1685px]">
          <div className="flex flex-row justify-between w-auto gap-[70px]">
            <a href="#">
              <Text size="2xl" as="p">
                Real Estate
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p">
                Vehicle
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p">
                Job
              </Text>
            </a>
          </div>
          <Button
            onClick={() => navigate("/add-post")}
            color="red_A400_01"
            size="4xl"
            variant="fill"
            className="font-aleo font-bold min-w-[210px]"
          >
            Post an ad
          </Button>
        </div>
      </div>
    </header>
  );
}
