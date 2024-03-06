import React from "react";
import { Img, Button, Text } from "./..";

export default function Header5({ ...props }) {
  return (
    <header {...props}>
      <Img src="images/img_citygel_2_white.png" alt="citygel2white" className="w-[12%] object-cover" />
      <div className="flex flex-row justify-between items-center w-[29%] mt-5">
        <Text size="5xl" as="p" className="!text-gray-50 text-center">
          Login or Sign up
        </Text>
        <div className="h-[50px] w-[47%] relative">
          <Text as="p" className="bottom-[22%] right-[16%] m-auto absolute">
            Change Country
          </Text>
          <div className="flex flex-row justify-between items-center w-full h-full left-0 bottom-0 right-0 top-0 p-[3px] m-auto border-white-A700 border border-solid absolute rounded-[25px]">
            <Button
              color="white_A700"
              size="xl"
              variant="fill"
              shape="circle"
              className="w-[44px] border-white-A700 border border-solid"
            >
              <Img src="images/img_group_37.svg" />
            </Button>
            <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[5px] mr-2.5" />
          </div>
        </div>
      </div>
    </header>
  );
}
