import Background from "./Background";
import Header1 from "components/Header1";
import CitygelLogo from "../Footer/CitygelLogo";
import { Text, Img } from "components";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tablef from "./Table/Tablef";

import Tables from "./Table2/Tables";

const Profile = () => {

  let [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Header1 className="flex w-full flex-col items-center justify-center" bg={false} />
      <div className="flex w-full flex-col items-start justify-start gap-[20px] overflow-hidden  bg-gray-100 tracking-[normal] pb-20">
        <section className="flex max-w-full flex-col items-start justify-start self-stretch">
          {/* <Background /> */}
          {/*~~~~~~~~~~~~~~Header section~~~~~~~~~~~~~~~~ */}
          <div className="absolute left-0  right-0 top-0 m-auto sm:h-[650px] w-full justify-center bg-teal-900 h-[350px] " />
          <Img
            src="images/img_shanghai_aerial_sunset_970x1920.png"
            alt="shanghaiaerial"
            className="absolute left-0 right-0 top-0 m-auto sm:h-[650px] w-full justify-center   h-[350px]"
          />
          <img
            className="absolute  right-0 top-0 opacity-60"
            src="elipse.png"
            alt=""
          />
          {/*~~~~~~~~~~~~~~~~~~~~Tab bar~~~~~~~~~~~~~~~~~~~~~ */}
          <Tabs className="z-[990] w-full h-auto container mx-auto flex flex-col items-center justify-start mt-12 mb-8 px-3 sm:px-4 gap-[8px]">
            <div  className="sm:h-[80px] h-[60px] rounded-[14px] sm:rounded-[20px] w-full p-1 bg-current flex items-center justify-center">
            <TabList selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="flex justify-between flex-row items-center text-[13px] sm:text-[18px] xl:text-[20px]  w-full h-full">
              <Tab onClick={()=>setTabIndex(tabIndex=0)} className={`${tabIndex === 0 && "bg-cyan-600 text-white-A700"}  w-1/3 cursor-pointer h-full rounded-[14px] flex justify-center items-center`}>Personal Details</Tab>
              <Tab onClick={()=>setTabIndex(tabIndex=1)} className={`w-1/3 cursor-pointer h-full rounded-[14px] flex justify-center items-center ${tabIndex === 1 && "bg-cyan-600 text-white-A700"}`}>My Ads</Tab>
              <Tab onClick={()=>setTabIndex(tabIndex=2)} className={`w-1/3 cursor-pointer h-full rounded-[14px] flex justify-center items-center  ${tabIndex === 2 && "bg-cyan-600 text-white-A700"}`}>Enquiries</Tab>
            </TabList>
            </div>

            <TabPanel className="w-full mt-[14px]">
            <div className="container mx-auto px-1   z-[990] ">
            <div className="container mx-auto w-full bg-white-A700 h-auto flex justify-center items-center  rounded-[18px]">
              <div className="w-[97%] xl:h-[600px] h-[450px] md:h-[500px] lg:h-[550px] flex justify-between flex-col px-[8px] py-[18px]">

                <div className="2xl:text-[35px] xl:text-[32px] lg:text-[29px]  md:text-[23px] sm:text-[19px] text-[19px] mb-1 text-black 2xl:mb-4 lg:mb-3 sm:mb-1 md:mb-2" >Personal Details</div>

                <div>
                  <label className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19.5px] text-gray-500">Full Name</label>
                  <input className="w-full h-[35px] !px-3 sm:h-[39px] lg:h-[50px] !bg-gray-100 focus:border-[1px] focus:border-solid focus:border-cyan-400 sm:focus:rounded-[18px]  sm:px-6  2xl:px-6 2xl:h-[60px] focus:rounded-[10px] !rounded-[10px] sm:rounded-[18px] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[21px] border" type="text" />
                </div>

                <div>
                  <label className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19.5px] text-gray-500">Email</label>
                  <input className="w-full h-[35px] !px-3 sm:h-[39px] lg:h-[50px] !bg-gray-100 focus:border-[1px] focus:border-solid focus:border-cyan-400 sm:focus:rounded-[18px] focus:rounded-[10px] sm:px-6  2xl:px-6 2xl:h-[60px] !rounded-[10px] sm:rounded-[18px] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[21px] border" type="email" />
                </div>
                {/*~~~~~~~~~~~~~~~~~~~~~Phone input full-width problem ~~~~~~~~~~~~~~~~~~*/}
                <div className="w-full">
                  <label className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19.5px] text-gray-500">Phone Number</label>
                  <div className="relative mt-[5px] block w-full gap-[25px] md:flex ">
                    {/* <Controller/> */}

                    <PhoneInput
                      country={"us"}
                      placeholder="Phone Number"
                      className="h-[6rem] w-full"
                    />


                    {/* {errors.phoneNumber?.message && (
                      <Text
                        className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                        fontSize="xs"
                        bottom="-19px"
                        position="absolute"
                        color="#E85A2D"
                      >
                        <>Please enter valid phone number</>
                      </Text>
                    )} */}
                  </div>
                </div>
                <div className="flex justify-center md:justify-end flex-row items-center gap-[20px] md:gap-[14px] lg:gap-[10px]">
                  <button className="rounded-[10px] bg-current shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] border-2 md:border-2  border-solid border-cyan-500 text-[17px] 2xl:text-[20px] md:text-[18px] lg:text-[19px] py-[13px] px-[50px] 2xl:py-[17px] 2xl:px-[70px] lg:py-[14px] lg:px-[60px] text-black">Edit</button>
                  <button className="rounded-[10px] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] text-[17px] 2xl:text-[20px] md:text-[18px] lg:text-[19px] py-[13px] px-[50px] 2xl:py-[17px] 2xl:px-[70px] lg:py-[14px] lg:px-[60px] text-white-A700">Save</button>
                </div>
              </div>
            </div>
          </div>
            </TabPanel>

            <TabPanel className="w-full mt-[-20px] md:mt-[-20px] container px-[2px] xl:px-3 2xl:px-1 ">
           
           <Tablef className="self-stretch"/>
            </TabPanel>

            <TabPanel className="w-full mt-[-16px] md:mt-[-10px] container px-[2px] xl:px-3 2xl:px-1">
             
              <Tables/>
             
            </TabPanel>
          </Tabs>
         
        
        </section>
        
      </div>
      <CitygelLogo />
    </div>
  );
};

export default Profile;
