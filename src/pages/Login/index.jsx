import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Img,
  CheckBox,
  Input,
  Button,
  SelectBox,
} from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-gray-50">
        <Header1 className="flex flex-col justify-center items-center w-full" />
        <div className="flex flex-col items-center justify-start w-[32%] ">
          <div className="h-[372px] w-full  relative max-w-[372px]">
            <div className="flex flex-col items-start justify-start w-full top-[11%] right-0 left-0 m-auto absolute">
              <div className="h-[257px] w-full relative">
                <Img
                  src="images/img_background_complete.svg"
                  alt="background_one"
                  className="justify-center h-[257px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Img
                  src="images/img_group.svg"
                  alt="image_one"
                  className="h-[37px] right-[28%] top-[26%] m-auto absolute"
                />
              </div>
              <Img
                src="images/img_plant.svg"
                alt="plant_one"
                className="h-[104px] mt-[-93px] ml-[58px] z-[1]"
              />
            </div>
            <div className="flex flex-col items-end justify-start w-[78%] bottom-[15%] right-0 left-0 m-auto absolute">
              <div className="flex flex-row justify-end items-center w-[67%] mr-1.5">
                <Img
                  src="images/img_character.svg"
                  alt="character_one"
                  className="h-[158px] z-[1]"
                />
                <Img
                  src="images/img_lamp.svg"
                  alt="lamp_one"
                  className="h-[203px] ml-[-6px]"
                />
              </div>
              <Img
                src="images/img_x3c_path_x3e_359.svg"
                alt="x3cpathx3e_one"
                className="h-[16px] mt-[-8px]"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[30%] left-[20%] top-[24%] m-auto absolute">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full p-[18px] bg-white-A700 rounded-md">
                  <div className="flex flex-col items-center justify-start w-[99%] mt-1.5 gap-[13px]">
                    <Img
                      src="images/img_group_white_a700.svg"
                      alt="image_two"
                      className="h-[29px] w-[29px]"
                    />
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="h-[12px] w-full relative">
                            <Img
                              src="images/img_vector_white_a700.svg"
                              alt="vector_one"
                              className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                            <Img
                              src="images/img_vector_black_900_03.svg"
                              alt="vector_three"
                              className="h-[5px] right-[6%] bottom-0 top-0 m-auto opacity-0.2 absolute"
                            />
                          </div>
                          <div className="flex flex-row justify-start mt-[-8px] ml-[7px] z-[1]">
                            <Text
                              size="s"
                              as="p"
                              className="!text-black-900_03 !font-inter"
                            >
                              Name@mail.com
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        size="xs"
                        as="p"
                        className="w-[24%] mt-[11px] !text-black-900_03 !font-inter"
                      >
                        Sign up now
                      </Text>
                      <div className="h-[12px] w-full mt-[-2px] relative">
                        <Img
                          src="images/img_vector_cyan_700_01.svg"
                          alt="vector_five"
                          className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <a
                          href="#"
                          className="w-max top-[17%] right-0 left-0 m-auto absolute"
                        >
                          <Text size="md" as="p" className="!font-inter">
                            Login
                          </Text>
                        </a>
                      </div>
                      <a href="#" className="w-[36%] mt-[5px]">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-black-900_03 !font-inter"
                        >
                          Forgot Password?
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="mt-[9px] z-[1]">
            <Text size="8xl" as="p" className="!text-black-900_03 text-center">
              Create an Account
            </Text>
          </a>
          <div className="flex flex-col items-center justify-start w-full mt-[-3px]">
            <Text
              size="4xl"
              as="p"
              className="!text-black-900_7e text-center opacity-0.4"
            >
              Please enter your credential Details.
            </Text>
            <Text as="p" className="mt-7 !text-black-900_99 opacity-0.7">
              Enter Your Full Name
            </Text>
            <div className="flex flex-col items-start justify-start w-full mt-2">
              <Input
                size="lg"
                name="fullName"
                placeholder="johnsm"
                className="w-full border-cyan-700_01 border border-solid"
              />
              <Text
                as="p"
                className="mt-5 ml-1.5 !text-black-900_99 opacity-0.7"
              >
                Enter Your Phone number
              </Text>
              <div className="flex flex-row justify-start mt-2 gap-2.5">
                <SelectBox
                  indicator={
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrow_down"
                    />
                  }
                  name="phoneNumber"
                  placeholder="+1"
                  options={dropDownOptions}
                  className="w-[24%] gap-px"
                />
                <Text />
              </div>
              <Text
                as="p"
                className="mt-[19px] ml-1.5 !text-black-900_99 opacity-0.7"
              >
                Enter Your Email
              </Text>
              <div className="h-[80px] w-full mt-[9px] relative">
                <Input
                  size="2xl"
                  type="email"
                  name="email"
                  placeholder="mail@email.com"
                  className="w-full left-0 bottom-0 right-0 top-0 m-auto !text-black-900_6f absolute"
                />
                <Button
                  color="cyan_700_01"
                  size="5xl"
                  variant="fill"
                  className="right-[1%] bottom-0 top-0 m-auto min-w-[170px] absolute rounded-[15px]"
                >
                  Send OTP
                </Button>
              </div>
              <div className="flex flex-row justify-start w-full mt-10 gap-[18px]">
                <div className="h-[80px] w-[15%] border-cyan-700_01 border border-solid bg-blue_gray-100_33 rounded-[15px]" />
                <Input size="3xl" name="edittext" className="w-[15%]" />
                <Input size="3xl" name="edittext_one" className="w-[15%]" />
                <Input size="3xl" name="edittext_two" className="w-[15%]" />
                <Input size="3xl" name="edittext_three" className="w-[15%]" />
                <Input size="3xl" name="edittext_four" className="w-[15%]" />
              </div>
              <div className="flex flex-row justify-start w-full mt-[15px] mx-auto max-w-[490px]">
                <div className="flex flex-col items-start justify-start w-full gap-3">
                  <div className="flex flex-row justify-start w-[70%] gap-2.5">
                    <div className="h-[24px] w-[24px] mb-0.5 bg-blue_gray-100_03 rounded-md" />
                    <Text as="p" className="!text-gray-800">
                      <span className="text-gray-800">I am accepting all </span>
                      <span className="text-cyan-700_01">Terms</span>
                      <span className="text-gray-800">& </span>
                      <span className="text-cyan-700_01">Conditions</span>
                    </Text>
                  </div>
                  <CheckBox
                    color="blue_gray_100_03"
                    name="areyouintereste"
                    label="Are you interested to receive marketing communications"
                    className="gap-2.5 text-left rounded-md"
                  />
                </div>
              </div>
              <a href="#" className="mt-8">
                <Text />
              </a>
              <div className="flex flex-row justify-start w-full mt-[31px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row justify-start items-start w-full gap-[19px]">
                    <div className="h-[2px] w-[46%] mt-[13px] opacity-0.3 bg-black-900_75" />
                    <Text
                      size="2xl"
                      as="p"
                      className="!text-black-900_75 text-center opacity-0.3"
                    >
                      or
                    </Text>
                    <div className="h-[2px] w-[46%] mt-[13px] opacity-0.3 bg-black-900_75" />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[80px] w-[80px] mt-[18px] p-[22px] bg-blue_gray-100_19 rounded-[50%]">
                    <Img
                      src="images/img_group_red_500_01.svg"
                      alt="image_three"
                      className="h-[36px] w-[36px]"
                    />
                  </div>
                  <Text
                    size="2xl"
                    as="p"
                    className="mt-[35px] !text-red-500 text-center"
                  >
                    <span className="text-gray_500">
                      Already have an account?
                    </span>
                    <span className="text-red-500"></span>
                    <span className="text-cyan-700_01">Sin in</span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[120px] p-[34px] bg-gray-100_01" />
      </div>
    </>
  );
}
