import React from "react";
import { Button, Text, Img } from "./..";

export default function Header2({ ...props }) {
  return (
    <header {...props}>
      <Img src="images/img_frame_3923.svg" alt="image" className="h-[210px]" />
      <div className="flex flex-row justify-center w-full mt-5 mb-3 mx-auto max-w-[1700px]">
        <div className="flex flex-col items-center justify-start w-full gap-[18px]">
          <div className="flex flex-row justify-between items-start w-full">
            <Img src="images/img_citygel_2_white.png" alt="citygel2white" className="w-[12%] object-cover" />
            <div className="flex flex-row justify-between items-center w-[29%] mt-5">
              <Text size="5xl" as="p" className="!text-gray-50 text-center">
                Login or Sign up
              </Text>
              <div className="h-[50px] w-[47%] relative">
                <Text as="p" className="bottom-[22%] right-[14%] m-auto absolute">
                  Change Location
                </Text>
                <div className="flex flex-row justify-between items-center w-full h-full left-0 bottom-0 right-0 top-0 p-[3px] m-auto border-white-A700 border border-solid absolute rounded-[25px]">
                  <div className="flex flex-col items-center justify-start h-[44px] w-[44px] p-2.5 border-white-A700 border border-solid bg-white-A700 rounded-[50%]">
                    <div className="flex justify-center h-[24px] w-[24px]" />
                  </div>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[5px] mr-2.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row justify-between w-auto gap-[70px]">
              <a href="#">
                <Text size="3xl" as="p">
                  Real Estate
                </Text>
              </a>
              <a href="#">
                <Text size="3xl" as="p">
                  Vehicle
                </Text>
              </a>
              <a href="#">
                <Text size="3xl" as="p">
                  Job
                </Text>
              </a>
              <a href="#">
                <Text size="3xl" as="p">
                  Classified (General Category)
                </Text>
              </a>
            </div>
            <Button color="red_A400_01" size="4xl" variant="fill" className="font-aleo font-bold min-w-[242px]">
              Past an ad
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
