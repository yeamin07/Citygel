import React from "react";
import {
  man_pic,
  logo,
  yellowcurve,
  bluecurve,
  greycurve,
  sittingman,
} from "assets/Allimages";
import { FaCaretDown, FaAngleDown } from "react-icons/fa";
import CitygelLogo from "../Footer/CitygelLogo";
const Thankyou = () => {
  return (
    <div>
      <Fullheade />
      <div className="absolute top-[400px]  left-[70px] flex flex-row space-x-10 mq1325:flex-col mq1125:relative mq750:left-[0px] mq450:top-40">
        <div className=" bg-white z-[6] box-border flex w-[354.4px] max-w-full flex-col items-start justify-start gap-[8.69999999999709px] rounded-mid-5 border-[1.3px] border-solid border-gray-100 px-[7px] pt-[8.80000000000291px] pb-[8.69999999999709px] shadow-[0px_0px_8.75px_rgba(0,_0,_0,_0.15)]">
          <div className="relative h-[253.8px] self-stretch">
            <img
              className="absolute top-[0px] left-[0px] h-[253.8px] w-[336.9px] rounded-xl object-cover"
              alt=""
              src="/rectangle-4624@2x.png"
            />
            <img
              className="absolute top-[234.5px] left-[138.2px] z-[7] h-[10.5px] w-[60.4px]"
              loading="lazy"
              alt=""
              src="/group-10000037291.svg"
            />
          </div>
          <div className="box-border flex max-w-full flex-col items-start justify-start gap-[7.80000000000291px] self-stretch px-0 pt-0 pb-[14.10000000000582px]">
            <div className="text-white flex flex-row items-start justify-start gap-[8.5px] text-base-8 mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start rounded-[8.75px] px-[17.5px] pt-[5.30000000000291px] pb-[5.19999999999709px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)]">
                <div className="relative inline-block min-w-[72px]">
                  Premium
                </div>
              </div>
              <div className="flex flex-row items-start justify-start rounded-[8.75px] px-[17.5px] pt-[5.30000000000291px] pb-[5.19999999999709px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)]">
                <div className="relative inline-block min-w-[72px]">
                  Premium
                </div>
              </div>
              <div className="flex flex-row items-start justify-start rounded-[8.75px] px-[17.5px] pt-[5.30000000000291px] pb-[5.19999999999709px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)]">
                <div className="relative inline-block min-w-[72px]">
                  Premium
                </div>
              </div>
            </div>
            <div className="relative self-stretch font-semibold leading-[35.01px] mq450:text-xl mq450:leading-[28px]">
              Dell Touch Screen - Core I7 16GB RAM 512GB
            </div>
            <div className="text-gray-1100 box-border flex w-[328.2px] max-w-full flex-col items-start justify-start gap-[13.30000000000291px] px-0 pt-0 pb-[5.099999999991269px] text-mid-5">
              <div className="relative">Electronics . Computers</div>
              <div className="text-gray-1200 relative self-stretch text-base-8 leading-[21.88px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                ind...
              </div>
            </div>
            <div className="flex max-w-full flex-row items-start justify-start self-stretch">
              <div className="relative flex-1 shrink-0 font-semibold leading-[35.01px] [debug_commit:612783b] mq450:text-xl mq450:leading-[28px]">
                AED 980
              </div>
              <div className="text-gray-1100 ml-[-113px] flex flex-col items-start justify-start px-0 pt-[4.400000000008731px] pb-0 text-mid-5">
                <div className="flex shrink-0 flex-row items-start justify-start gap-[8.69999999999709px] [debug_commit:612783b]">
                  <div className="relative">City Name</div>
                  <div className="box-border flex h-[23.6px] flex-col items-start justify-start px-0 pt-[2.599999999991269px] pb-0">
                    <img
                      className="relative h-[21px] w-[21px]"
                      loading="lazy"
                      alt=""
                      src="/vuesaxboldlocation1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white box-border flex max-w-full flex-row items-start justify-start whitespace-nowrap rounded-mid-5 pt-[14.89999999999418px] pb-[14.400000000008731px] pr-[133px] pl-[123.29999999999563px] text-2xl shadow-[0px_0px_2.63px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] mq450:box-border mq450:pl-5 mq450:pr-5">
            <div className="relative hidden h-[61.3px] w-[336.9px] max-w-full rounded-mid-5 shadow-[0px_0px_2.63px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)]" />
            <div className="relative z-[1]">View All</div>
          </div>
        </div>
        {/*Thank you  part*/}
        <div className="flex h-[400px] w-[270px] flex-col justify-between">
          <h1 className="font-poppins text-[38px] font-medium">Thank You</h1>
          <p className="text-[20px] text-gray-500">
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting Lorem Ipsum is <br />
            simply dummy text of the printing and typesetting Lorem{" "}
          </p>
          <button className="h-[60px] w-[150px] rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-400 text-[20px] text-white-A700">
            Go To Home
          </button>
        </div>
      </div>
      <CitygelLogo />
    </div>
  );
};

export default Thankyou;

const Fullheade = (props) => {
  return (
    <div className="h-auto w-screen overflow-hidden">
      <header className=" absolute flex h-[100px] w-screen justify-between overflow-hidden bg-gradient-to-r from-[rgb(16,56,76)] to-[rgb(21,60,77)] mq800:h-[80px]">
        <div className="flex flex-grow items-center justify-center">
          <img src={logo} className="h-full mq800:h-[56px]" />
        </div>
        <div className="mt-2 flex h-[70px] flex-grow-0 items-center justify-center space-x-4 mq800:space-x-0 mq750:h-[60px] ">
          <div className="block mq800:hidden">
            <h4 className="font-poppins text-[18px] font-medium">John Smith</h4>
            <p className="text-[13px] text-teal-400">
              My Account <FaCaretDown />
            </p>
          </div>
          <div className="block mq800:hidden">
            <img
              src={man_pic}
              className="mq750:mt-6px mt-[10px] mr-10 h-full h-[50px] w-[50px] rounded-full mq750:mr-0"
            />
          </div>
          {/**Hidden part for mobile */}
          <div
            className="mt-4 flex hidden h-[30px] w-[130px] items-center justify-center rounded-2xl border border-sky-500 mq800:block
             "
          >
            <p className="text-[11px] text-white-A700">
              Change Location <FaAngleDown />
            </p>
          </div>
        </div>
      </header>
      <div className="flex overflow-hidden">
        <img
          src={yellowcurve}
          className="relative top-[100px] h-[1000px] w-1/6 flex-grow mq800:h-[500px] mq750:top-[80px]"
        />
        <img
          src={bluecurve}
          className="left-0 top-0 h-[840px]  w-5/6 flex-grow-0 mq800:h-[390px]"
        />
        <img
          src={sittingman}
          className="absolute right-20 top-48 h-[660px] w-[720px] mq800:right-0 mq800:top-24 mq800:h-[290px] mq800:w-[320px]"
        />
      </div>
      <div className="absolute top-[300px] left-20 w-full mq1125:relative mq1125:top-[-40px] mq1125:left-12 mq800:left-6">
        <h4 className="pb-3 font-poppins text-[48px] mq1500:text-[42px] mq1125:text-[37px] mq800:text-[22px]">
          {props.fullhead}
        </h4>
        <p className="font-poppins text-[26px] mq1500:text-[22px] mq1125:text-[19px] mq800:text-[13px]">
          {props.fullpara}
        </p>
      </div>
    </div>
  );
};
