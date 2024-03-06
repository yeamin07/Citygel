import React from "react";
import { Img, Text } from "./..";

export default function Header4({ ...props }) {
  return (
    <header {...props}>
      <Img src="images/img_frame_3923_teal_900.svg" alt="image" className="h-[140px]" />
      <div className="flex flex-row justify-between items-center w-[50%] mr-[110px]">
        <Img src="images/img_citygel_2_white.png" alt="citygel2white" className="w-[22%] object-cover" />
        <div className="flex flex-row justify-start items-center w-[25%] gap-[30px]">
          <div className="flex flex-row justify-start w-[54%]">
            <div className="flex flex-col items-start justify-start w-full gap-0.5">
              <a href="#">
                <Text size="3xl" as="p">
                  John Smith
                </Text>
              </a>
              <div className="flex flex-row justify-start items-start gap-[3px]">
                <Text size="lg" as="p" className="!text-light_blue-400 text-center">
                  My Account
                </Text>
                <Img src="images/img_polygon_1.svg" alt="polygonone_one" className="h-[5px] mt-1.5 rounded-[1px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start h-[76px] w-[76px] p-[5px] bg-light_blue-400 rounded-[50%]">
            <Img src="images/img_ellipse_5.png" alt="circleimage" className="h-[66px] w-[66px] rounded-[50%]" />
          </div>
        </div>
      </div>
    </header>
  );
}
