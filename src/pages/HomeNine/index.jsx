import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "components/Header1";
import { useNavigate } from "react-router-dom";
import CitygelLogo from "components/ai-5pages/CitygelLogo";

export default function HomePage() {
  const navigate=useNavigate()
  return (
    <>



      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header1 className="flex flex-row justify-between items-center w-full pb-4" />
      <div className="flex flex-row justify-center w-full bg-gray-50 mt-[-16px]">
        <div className="flex flex-col items-center justify-start w-full ">
          <div className="h-[800px] sm:h-[381px] mq450:h-[381px] mq750:h-[381px] w-full relative ">
            <div className="justify-center h-[800px] sm:h-[381px] mq450:h-[381px] mq750:h-[381px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-teal-900 absolute" />
            <div className="justify-center h-[800px] sm:h-[381px] mq450:h-[381px] mq750:h-[381px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Img
                src="images/img_shanghai_aerial_sunset_970x1920.png"
                alt="shanghaiaerial"
                className="justify-center h-[800px] sm:h-[381px] mq450:h-[381px] mq750:h-[381px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-start justify-start w-[95%] h-full left-0 bottom-0 top-0 m-auto absolute">
                <div className="h-[745px] w-full z-[1] relative">
                  <div className="flex flex-col items-center justify-start w-[94%] right-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-end justify-start w-full">
                      <div className="flex flex-col items-end justify-start w-full gap-[18px]"></div>
                    <img className="absolute  mq1050:hidden" src="elipse.png" alt="" />
                    </div>
        
                     <div className="flex flex-col items-center justify-start w-full mt-40 z-[1] ">
                      <Heading
                        as="h1"
                        className="sm:text-[32px] mq450:text-[32px] mq750:text-[32px]"
                      >
                        <span className="text-white-A700 font-publicsans font-bold">
                          Welcome to{" "}
                        </span>
                        <span className="text-light_blue-400 font-publicsans font-bold">
                          CityGel!
                        </span>
                      </Heading>
                      <Text
                        size="9xl"
                        as="p"
                        className="!text-white-A700_a2  text-center opacity-0.8 sm:text-[18px] mq450:text-[18px] mq750:text-[18px]"
                      >
                        Online Classified Website
                      </Text>
                      <Text
                        size="5xl"
                        as="p"
                        className="mt-[25px] !text-white-A700_99 text-center opacity-0.7 sm:text-[10px] mq450:text-[10px] mq750:text-[10px]"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled.
                      </Text>
                  
               </div>
                  </div>
                  <Img
                    src="images/img_ellipse_2_262x241.png"
                    alt="image"
                    className="h-[262px] w-[14%] bottom-0 left-0 m-auto object-cover absolute"
                  />
                </div>
              
              </div>
            </div>
          </div>
          <div className="relative z-50 w-[95%] sm:w-full grid grid-cols-4 md:grid-cols-2 mq450:grid-cols-2 mq750:grid-cols-2 sm:grid-cols-2 gap-5 mq800:gap-1 sm:gap-x-0 mq800:gap-y-3 items-start mt-[-130px] sm:mt-[10px] mq450:mt-[10px] mq750:mt-[10px]">
            <div className="flex flex-row justify-center w-[90%]   h-[214px]  px-20 py-[84px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm  rounded-[20px]">
              <Text
                size="7xl"
                as="p"
                className="mb-1.5 !text-black-900_03 text-3xl !font-aleo"
                onClick={()=>navigate('/categories')}
              >
                Dubai
              </Text>
            </div>
            <div className="flex flex-row justify-center w-[90%]  h-[214px]  px-14 py-[84px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm  rounded-[20px]">
              <Text
                size="3xl"
                as="p"
                className="mb-1.5 text-center  !text-black-900_03 !font-aleo"
                onClick={()=>navigate('/categories')}
              >
                AbuDhabi
              </Text>
            </div>
            <div className="flex flex-row justify-center w-[90%]  h-[214px]  px-14 py-[84px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm  rounded-[20px]">
              <Text           onClick={()=>navigate('/categories')} size="3xl" as="p" className="!text-black-900_03 !font-aleo">
                Sharjah
              </Text>
            </div>
            <div className="flex flex-row justify-center w-[90%]  h-[214px]  px-14 py-[84px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm  rounded-[20px]">
              <Text           onClick={()=>navigate('/categories')} size="3xl" as="p" className="!text-black-900_03 !font-aleo">
                Ajman
              </Text>
            </div>
            <div className="flex flex-row justify-center w-[90%]  h-[214px]  px-14 py-[84px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm  rounded-[20px]">
              <Text           onClick={()=>navigate('/categories')} size="3xl" as="p" className="!text-black-900_03 !font-aleo">
                Ajman
              </Text>
            </div>
            <div className="flex flex-row justify-center w-[90%]  h-[214px]  px-14 py-[84px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm  rounded-[20px]">
              <Text size="3xl" as="p" className="!text-black-900_03 !font-aleo">
                Ajman
              </Text>
            </div>
            <div className="flex flex-row justify-center w-[90%]  h-[214px]  px-14 py-[84px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm  rounded-[20px]">
              <Text            onClick={()=>navigate('/categories')} size="3xl" as="p" className="!text-black-900_03 !font-aleo">
                Ajman
              </Text>
            </div>
            <div className="flex flex-row justify-center w-[90%]  h-[214px]  px-14 py-[84px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm  rounded-[20px]">
              <Text size="7xl" as="p" className="!text-black-900_03 !font-aleo">
                Ajman
              </Text>
            </div>
          </div>

          {/* <Footer className="flex justify-center items-center w-full mt-[145px] p-[34px] bg-gray-100_01" /> */}
          <CitygelLogo/>
        </div>
      </div>
    </>
  );
}
