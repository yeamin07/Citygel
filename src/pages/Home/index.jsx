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
          <div className="absolute left-0  right-0 top-0 m-auto h-[500px] w-full justify-center bg-teal-900 sm:h-[800px] " />
          <Img
            src="images/img_shanghai_aerial_sunset_970x1920.png"
            alt="shanghaiaerial"
            className="absolute left-0 right-0 top-0 m-auto h-[500px] w-full justify-center   sm:h-[800px] "
          />
          <img
            className="absolute  right-0 top-0 opacity-60"
            src="elipse.png"
            alt=""
          />
          <img
            className="absolute  -left-80 bottom-[4.5rem] hidden rotate-180 opacity-50 md:block"
            src="elipse.png"
            alt=""
          />

          <div className="relative w-full !pt-[480px] sm:!pt-[550px] ">
            <div className="absolute right-0 -top-8 m-auto mx-auto flex w-full flex-col items-center justify-start">
              <div className="z-[1] mt-40 flex w-full flex-col items-center justify-start ">
                <Heading
                  as="h1"
                  className="text-[32px] sm:text-[42px] md:text-[60px] "
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
                  className="text-center  !text-[18px]  !text-white-A700_a2 sm:text-[32px] "
                >
                  Online Classified Website
                </Text>
                <div className=" container mx-auto px-5 sm:px-20 xl:px-28 2xl:px-60">
                  <Text
                    size="5xl"
                    as="p"
                    className="mt-[25px] text-center text-[14px] !text-white-A700_99 opacity-0.8 sm:text-[16px]  md:text-[19px]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div className=" container relative z-50 mx-auto mt-[10px]  grid  grid-cols-2  items-start gap-5 gap-y-5 px-5 pb-28 sm:mt-[10px] sm:w-full sm:gap-y-10  sm:gap-x-0 lg:grid-cols-4 mq800:gap-1 mq800:gap-y-3">
            <div
              onClick={() => navigate("/categories")}
              className="gray_50_02_red_A400_border m-auto flex h-[150px] w-[95%]  items-center justify-center  rounded-[20px] border-[3px] border-solid bg-white-A700 shadow-sm sm:h-[185px]  sm:w-[90%]"
            >
              <Text
                size="7xl"
                as="p"
                className="mb-1.5 !font-aleo text-3xl !text-black-900_03"
              >
                Dubai
              </Text>
            </div>
            <div
              onClick={() => navigate("/categories")}
              className="gray_50_02_red_A400_border m-auto flex h-[150px] w-[95%]   items-center justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 shadow-sm sm:h-[185px]  sm:w-[90%]"
            >
              <Text
                size="3xl"
                as="p"
                className="mb-1.5 text-center  !font-aleo !text-black-900_03"
              >
                AbuDhabi
              </Text>
            </div>
            <div
              onClick={() => navigate("/categories")}
              className="gray_50_02_red_A400_border m-auto flex  h-[150px] w-[90%] flex-row  items-center  justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 shadow-sm  sm:h-[185px]"
            >
              <Text size="3xl" as="p" className="!font-aleo !text-black-900_03">
                Sharjah
              </Text>
            </div>
            <div
              onClick={() => navigate("/categories")}
              className="gray_50_02_red_A400_border m-auto flex  h-[150px] w-[90%] flex-row  items-center  justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 shadow-sm  sm:h-[185px]"
            >
              <Text
                onClick={() => navigate("/categories")}
                size="3xl"
                as="p"
                className="!font-aleo !text-black-900_03"
              >
                Ajman
              </Text>
            </div>
            <div
              onClick={() => navigate("/categories")}
              className="gray_50_02_red_A400_border m-auto flex h-[150px] w-[90%] flex-row  items-center  justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 shadow-sm  sm:h-[185px]"
            >
              <Text
                onClick={() => navigate("/categories")}
                size="3xl"
                as="p"
                className="!font-aleo !text-black-900_03"
              >
                Ajman
              </Text>
            </div>
            <div
              onClick={() => navigate("/categories")}
              className="gray_50_02_red_A400_border m-auto flex  h-[150px] w-[90%] flex-row  items-center  justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 shadow-sm  sm:h-[185px]"
            >
              <Text size="3xl" as="p" className="!font-aleo !text-black-900_03">
                Ajman
              </Text>
            </div>
            <div
              onClick={() => navigate("/categories")}
              className="gray_50_02_red_A400_border m-auto flex  h-[150px] w-[90%] flex-row items-center  justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 shadow-sm sm:h-[185px]"
            >
              <Text
                onClick={() => navigate("/categories")}
                size="3xl"
                as="p"
                className="!font-aleo !text-black-900_03"
              >
                Ajman
              </Text>
            </div>
            <div
              onClick={() => navigate("/categories")}
              className="gray_50_02_red_A400_border m-auto flex h-[150px] w-[90%] flex-row items-center  justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 shadow-sm   sm:h-[185px]"
            >
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
