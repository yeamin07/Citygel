import React from "react";
import { SelectBox, Img, Text } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header3({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1700px]">
        <Img src="images/img_citygel_2_white.png" alt="citygel2white" className="w-[12%] object-cover" />
        <div className="flex flex-row justify-between items-center w-[29%]">
          <div className="flex flex-col items-start justify-start gap-0.5">
            <a href="#">
              <Text size="3xl" as="p">
                John Smith
              </Text>
            </a>
            <Text size="lg" as="p" className="!text-light_blue-400 text-center">
              My Account
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start h-[76px] w-[76px] p-[5px] bg-light_blue-400 rounded-[50%]">
            <Img src="images/img_ellipse_5.png" alt="circleimage_ten" className="h-[66px] w-[66px] rounded-[50%]" />
          </div>
          <SelectBox
            color="white_A700"
            size="xs"
            variant="outline"
            indicator={<Img src="images/img_arrow_down.svg" alt="arrow_down" />}
            name="location"
            placeholder="Change Location"
            options={dropDownOptions}
            className="w-[46%] gap-px rounded-[25px]"
          />
        </div>
      </div>
      <div className="h-px w-full opacity-0.1 bg-white-A700_63" />
    </header>
  );
}
