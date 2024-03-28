import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header1 from "components/Header1";
import { useNavigate } from "react-router-dom";
import CitygelLogo from "components/Footer/CitygelLogo";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header1 bg={false} />
      <div className="flex w-full flex-row justify-center bg-gray-50">
        <div className="flex w-full flex-col items-center justify-start ">

          <div className="absolute left-0  right-0 top-0 m-auto sm:h-[800px] w-full justify-center bg-teal-900 h-[600px] " />
          <Img
            src="images/img_shanghai_aerial_sunset_970x1920.png"
            alt="shanghaiaerial"
            className="absolute left-0 right-0 top-0 m-auto sm:h-[800px] w-full justify-center   h-[600px] "
          />
          <img
            className="absolute  right-0 top-0 opacity-60"
            src="elipse.png"
            alt=""
          />
          <img
            className="absolute  -left-80 bottom-[4.5rem] opacity-50 rotate-180 hidden md:block"
            src="elipse.png"
            alt=""
          />


          <div className="relative sm:!pt-[550px] !pt-[550px] w-full ">
            <div className="absolute right-0 -top-8 m-auto flex w-full mx-auto flex-col items-center justify-start">
              <div className="z-[1] mt-40 flex w-full flex-col items-center justify-start ">
                <Heading
                  as="h1"
                  className="md:text-[60px] sm:text-[42px] text-[32px] "
                >
                  <span className="font-publicsans font-bold text-white-A700">
                    Welcome to{" "}
                  </span>
                  <span className="font-publicsans font-bold text-light_blue-400">
                    CityGel!
                  </span>
                </Heading>
                <Text
                  size="9xl"
                  as="p"
                  className="text-center  !text-white-A700_a2  sm:text-[32px] !text-[18px] "
                >
                  Online Classified Website
                </Text>
                <div className=" sm:w-[68%] w-[95%] mx-auto">
                  <Text
                    size="5xl"
                    as="p"
                    className="mt-[25px] text-center !text-white-A700_99 opacity-0.7 md:text-[19px] sm:text-[16px]  text-[14px]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                  </Text>
                </div>
              </div>
            </div>

          </div>





          <div className=" container mx-auto px-5 relative z-50  grid  lg:grid-cols-4  items-start gap-5 sm:gap-y-10 gap-y-5 sm:mt-[10px] sm:w-full grid-cols-2 sm:gap-x-0  mq800:gap-1 mq800:gap-y-3 mt-[10px] pb-28">
            <div className="gray_50_02_red_A400_border m-auto flex sm:h-[185px] h-[150px]  sm:w-[90%] w-[95%]  justify-center items-center rounded-[20px] border-[3px] border-solid bg-white-A700  shadow-sm">
              <Text
                size="7xl"
                as="p"
                className="mb-1.5 !font-aleo text-3xl !text-black-900_03"
                onClick={() => navigate("/categories")}
              >
                Dubai
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex sm:h-[185px] h-[150px]   sm:w-[90%] w-[95%] items-center justify-center rounded-[20px] border-[3px] border-solid bg-white-A700  shadow-sm">
              <Text
                size="3xl"
                as="p"
                className="mb-1.5 text-center  !font-aleo !text-black-900_03"
                onClick={() => navigate("/categories")}
              >
                AbuDhabi
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex  sm:h-[185px] h-[150px] items-center  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700  shadow-sm">
              <Text
                onClick={() => navigate("/categories")}
                size="3xl"
                as="p"
                className="!font-aleo !text-black-900_03"
              >
                Sharjah
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex  sm:h-[185px] h-[150px] items-center  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700  shadow-sm">
              <Text
                onClick={() => navigate("/categories")}
                size="3xl"
                as="p"
                className="!font-aleo !text-black-900_03"
              >
                Ajman
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex sm:h-[185px] h-[150px] items-center  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700  shadow-sm">
              <Text
                onClick={() => navigate("/categories")}
                size="3xl"
                as="p"
                className="!font-aleo !text-black-900_03"
              >
                Ajman
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex  sm:h-[185px] h-[150px] items-center  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700  shadow-sm">
              <Text size="3xl" as="p" className="!font-aleo !text-black-900_03">
                Ajman
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex  sm:h-[185px] h-[150px] items-center w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 shadow-sm">
              <Text
                onClick={() => navigate("/categories")}
                size="3xl"
                as="p"
                className="!font-aleo !text-black-900_03"
              >
                Ajman
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex sm:h-[185px] h-[150px] items-center w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700   shadow-sm">
              <Text size="7xl" as="p" className="!font-aleo !text-black-900_03">
                Ajman
              </Text>
            </div>
          </div>

          <CitygelLogo />
        </div>
      </div>
    </>
  );
}
