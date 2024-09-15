//import Background from "./Background";
import Header1 from "components/Header1";
import CitygelLogo from "../Footer/CitygelLogo";
import { Text, Img } from "components";
import { Controller } from "react-hook-form";
//import PhoneInput from "react-phone-input-2";
import { useState, useEffect } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tablef from "./Table/Tablef";

import Tables from "./Table2/Tables";
import { Dropdown, Select, Space, message } from "antd";
import { FaAngleDown } from "react-icons/fa6";
import axios from "axios";
//import { Controller, useForm } from "react-hook-form";

const Profile = () => {
  let [tabIndex, setTabIndex] = useState(0);

  {
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~This is for fetch mobile number input field~~~~~~~~~~~~~~~~~~~~~~~ */
  }
  const [country, setCountry] = useState([]);
  const [countryCode, setCountryCode] = useState("+971");
  const [countryFlag, setCountryFlag] = useState("https://flagcdn.com/ae.svg");

  const fetchCountry = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      if (response.data) {
        console.log(response.data);
        setCountry(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCountry();
  }, []);

  const handleSelect = (item) => {
    console.log(item);
    const suffiexes = item?.idd?.root + item?.idd?.suffixes[0];
    setCountryFlag(item?.flags?.svg);
    setCountryCode(suffiexes);
  };

  // const {
  //   formState: { errors },
  //   control,
  // } = useForm({
  //   resolver: yupResolver(SignUpFormValidationSchemas),
  //   mode: "onChange",
  // })

  {
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  }

  return (
    <div>
      <Header1
        className="flex w-full flex-col items-center justify-center"
        bg={false}
      />
      <div className="flex w-full flex-col items-start justify-start gap-[20px] overflow-hidden  bg-gray-100 pb-20 tracking-[normal]">
        <section className="flex max-w-full flex-col items-start justify-start self-stretch">
          {/* <Background /> */}
          {/*~~~~~~~~~~~~~~Header section~~~~~~~~~~~~~~~~ */}
          <div className="absolute left-0  right-0 top-0 m-auto h-[350px] w-full justify-center bg-teal-900 sm:h-[650px] " />
          <Img
            src="images/img_shanghai_aerial_sunset_970x1920.png"
            alt="shanghaiaerial"
            className="absolute left-0 right-0 top-0 m-auto h-[350px] w-full justify-center   sm:h-[650px]"
          />
          <img
            className="absolute  right-0 top-0 opacity-60"
            src="elipse.png"
            alt=""
          />
          {/*~~~~~~~~~~~~~~~~~~~~Tab bar~~~~~~~~~~~~~~~~~~~~~ */}
          <Tabs className="container z-[990] mx-auto mt-12 mb-8 flex h-auto w-full flex-col items-center justify-start gap-[8px] px-3 sm:px-4">
            <div className="flex h-[60px] w-full items-center justify-center rounded-[14px] bg-current p-1 sm:h-[80px] sm:rounded-[20px]">
              <TabList
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
                className="flex h-full w-full flex-row items-center justify-between text-[13px]  sm:text-[18px] xl:text-[20px]"
              >
                <Tab
                  onClick={() => setTabIndex((tabIndex = 0))}
                  className={`${tabIndex === 0 && "bg-cyan-600 text-white-A700"}  flex h-full w-1/3 cursor-pointer items-center justify-center rounded-[14px]`}
                >
                  Personal Details
                </Tab>
                <Tab
                  onClick={() => setTabIndex((tabIndex = 1))}
                  className={`flex h-full w-1/3 cursor-pointer items-center justify-center rounded-[14px] ${tabIndex === 1 && "bg-cyan-600 text-white-A700"}`}
                >
                  My Ads
                </Tab>
                <Tab
                  onClick={() => setTabIndex((tabIndex = 2))}
                  className={`flex h-full w-1/3 cursor-pointer items-center justify-center rounded-[14px]  ${tabIndex === 2 && "bg-cyan-600 text-white-A700"}`}
                >
                  Enquiries
                </Tab>
              </TabList>
            </div>

            <TabPanel className="mt-[14px] w-full">
              <div className="container z-[990] mx-auto   px-1 ">
                <div className="container mx-auto flex h-auto w-full items-center justify-center rounded-[18px]  bg-white-A700">
                  <div className="flex h-[450px] w-[97%] flex-col justify-between px-[8px] py-[18px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
                    <div className="text-black mb-1 text-[19px]  sm:mb-1 sm:text-[19px] md:mb-2 md:text-[23px] lg:mb-3 lg:text-[29px] xl:text-[32px] 2xl:mb-4 2xl:text-[35px]">
                      Personal Details
                    </div>

                    <div>
                      <label className="text-[13px] text-gray-500 sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19.5px]">
                        Full Name
                      </label>
                      <input
                        className="h-[41px] w-full !rounded-[10px] border !bg-gray-100 !px-3 text-[12px] focus:rounded-[10px] focus:border-[1px] focus:border-solid  focus:border-cyan-400  sm:h-[42px] sm:rounded-[18px] sm:px-6 sm:text-[14px] sm:focus:rounded-[18px] md:text-[16px] lg:h-[50px] lg:text-[18px] 2xl:h-[60px] 2xl:px-6 2xl:text-[21px]"
                        type="text"
                      />
                    </div>

                    <div>
                      <label className="text-[13px] text-gray-500 sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19.5px]">
                        Email
                      </label>
                      <input
                        className="h-[41px] w-full !rounded-[10px] border !bg-gray-100 !px-3 text-[12px] focus:rounded-[10px] focus:border-[1px] focus:border-solid focus:border-cyan-400 sm:h-[42px]  sm:rounded-[18px] sm:px-6 sm:text-[14px] sm:focus:rounded-[18px] md:text-[16px] lg:h-[50px] lg:text-[18px] 2xl:h-[60px] 2xl:px-6 2xl:text-[21px]"
                        type="email"
                      />
                    </div>

                    <div className="w-full">
                      <div className=" relative mt-[6px] flex h-[70px] w-full flex-row space-x-1 rounded-[15px]">
                        <div className="flex flex-row items-center justify-center space-x-1 rounded-[15px] bg-[#d9d9d950] p-3">
                          <Dropdown
                            menu={{
                              items: country?.map((item, index) => ({
                                label: (
                                  <div className="flex flex-row items-center justify-center space-x-2">
                                    <img
                                      src={item?.flags.svg} // Replace with the actual image source from your API response
                                      className="h-10 w-10 rounded-full"
                                      alt=""
                                    />
                                    <p className="font-semibold">
                                      {item?.idd.root}
                                      {item?.idd?.suffixes &&
                                        item?.idd?.suffixes[0]}
                                    </p>
                                  </div>
                                ),
                                key: index.toString(),
                                onClick: () => handleSelect(item),
                              })),
                            }}
                            trigger={["click"]}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                              <Space>
                                <img
                                  src={countryFlag}
                                  className="h-10 w-10 rounded-full"
                                  alt=""
                                />
                                <p className="">{countryCode}</p>
                                <FaAngleDown className="text-gray-700" />
                              </Space>
                            </a>
                          </Dropdown>
                        </div>
                        <div className="flex flex-1 items-center rounded-[15px] bg-[#d9d9d950] px-4">
                          {/* <Controller
                            name="phoneNumber"
                            //control={control}
                            rules={{ required: "Please enter a phone number" }}
                            render={({ field }) => (
                              <input
                                {...field}
                                className=""
                                type="number"
                                placeholder="(00) 123 456 7890"
                              />
                            )}
                          /> */}
                        </div>
                        {/* {errors?.phoneNumber?.message && (
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

                    <div className="flex flex-row items-center justify-center gap-[20px] md:justify-end md:gap-[14px] lg:gap-[10px]">
                      <button className="text-black rounded-[10px] border-2 border-solid border-cyan-500  bg-current py-[13px] px-[50px] text-[17px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] md:border-2 md:text-[18px] lg:py-[14px] lg:px-[60px] lg:text-[19px] 2xl:py-[17px] 2xl:px-[70px] 2xl:text-[20px]">
                        Edit
                      </button>
                      <button className="rounded-[10px] py-[13px] px-[50px] text-[17px] text-white-A700 shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] md:text-[18px] lg:py-[14px] lg:px-[60px] lg:text-[19px] 2xl:py-[17px] 2xl:px-[70px] 2xl:text-[20px]">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel className="container mt-[-20px] w-full px-[2px] md:mt-[-20px] xl:px-3 2xl:px-1 ">
              <Tablef className="self-stretch" />
            </TabPanel>

            <TabPanel className="container mt-[-16px] w-full px-[2px] md:mt-[-10px] xl:px-3 2xl:px-1">
              <Tables />
            </TabPanel>
          </Tabs>
        </section>
      </div>
      <CitygelLogo />
    </div>
  );
};

export default Profile;
