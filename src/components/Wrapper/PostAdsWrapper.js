import Fullheader from "pages/AddPost/AddPostWrapper";
import CitygelLogo from "components/Footer/CitygelLogo";
import React from "react";

const PostAdsWrapper = ({ children }) => {
  return (
    <div>
      <div className="relative flex w-full flex-col items-start justify-start gap-[83px] overflow-hidden rounded-31xl bg-gray-200 tracking-[normal] mq1125:gap-[41px_83px] mq800:gap-[21px_83px]">
        <Fullheader />
        {children}
        <div className="text-white box-border flex w-[80%] max-w-full  flex-row items-center justify-center py-0 px-5 text-11xl">
          <div className="flex w-full max-w-full flex-row items-end justify-around gap-[20px] mq1050:flex-wrap mq1050:justify-center">
            <div className="z-[2] flex w-[30%] cursor-pointer flex-row items-start justify-start rounded-xl bg-lightgray px-[77px] pt-[23px] pb-[22px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] mq450:box-border mq450:pl-5 mq450:pr-5">
              <div className="relative z-[3] text-white-A700 mq1050:text-3xl mq450:text-lg">
                Previous
              </div>
            </div>
            <div className="flex h-[47px] w-[232px] flex-col items-start justify-start">
              <div className="relative z-[2] flex h-[5px] flex-row items-start justify-start gap-[3px] self-stretch">
                <div className="absolute top-[0px] bottom-[0px] left-[0px] !m-[0] h-full w-11 rounded-21xl bg-gainsboro-400" />
                <div className="absolute top-[0px] bottom-[0px] left-[47px] !m-[0] h-full w-11 rounded-21xl bg-gainsboro-400" />
                <div className="absolute top-[0px] bottom-[0px] left-[calc(50%_-_22px)] !m-[0] h-full w-11 rounded-21xl bg-gainsboro-400" />
                <div className="absolute top-[0px] right-[47px] bottom-[0px] !m-[0] h-full w-11 rounded-21xl bg-steelblue-100" />
                <div className="absolute top-[0px] right-[0px] bottom-[0px] !m-[0] h-full w-11 rounded-21xl bg-gainsboro-400" />
              </div>
            </div>
            <div className="z-[2] box-border flex w-[30%] cursor-pointer flex-row items-start justify-center whitespace-nowrap rounded-xl pt-[23px] pb-[22px] pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)]">
              <div className="relative z-[3] text-white-A700">4/5 Next</div>
            </div>
          </div>
        </div>
        <CitygelLogo />
      </div>
    </div>
  );
};

export default PostAdsWrapper;
