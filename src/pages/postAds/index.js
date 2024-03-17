import React from "react";
import { Input, Button } from "antd";
import TransmissionPicker1 from "./TransmissionPicker1";
import TransmissionPicker from "./TransmissionPicker";
import FrameComponent1 from "./FrameComponent1";
const PostAds = () => {
  return (
    <div className="w-full rounded-31xl bg-gray-200 overflow-hidden flex flex-col items-start justify-start relative gap-[5px] tracking-[normal] mq800:gap-[21px_83px] mq1125:gap-[41px_83px]">
      {/* <FrameComponent1 /> */}
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-full flex flex-col items-start justify-start gap-[9px] max-w-full text-left text-25xl text-black font-poppins">
          <div className="w-[880px] flex flex-col items-start justify-start gap-[50px] max-w-full mq450:gap-[25px_50px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <h1 className="m-0 relative text-inherit font-medium font-inherit z-[4] mq450:text-7xl mq800:text-16xl">
                Enter Details
              </h1>
              <h3 className="m-0 self-stretch relative text-3xl leading-[35px] font-normal font-inherit text-gray-1200 z-[4] mq450:text-lg mq450:leading-[28px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem `}</h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-base text-gray-1000">
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative inline-block min-w-[39px] z-[2]">
                    Type
                  </div>
                </div>
                <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start py-[25px] px-[23px] box-border max-w-full z-[4] text-xl text-black">
                  <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                  <div className="relative z-[5] mq450:text-base">-Select-</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative inline-block min-w-[48px] z-[2]">
                    Brand
                  </div>
                </div>
                <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-[26px] pb-[22px] box-border max-w-full z-[4] text-xl text-black">
                  <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                  <div className="relative z-[5] mq450:text-base">-Select-</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative inline-block min-w-[49px] z-[2]">
                    Model
                  </div>
                </div>
                <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-[26px] pb-[22px] box-border max-w-full z-[4] text-xl text-black">
                  <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                  <div className="relative z-[5] mq450:text-base">-Select-</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-1.5">
                <div className="relative z-[4]">Manufacturing Year</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-31xl mq1325:flex-wrap">
            <form className="m-0 w-[880px] flex flex-col items-start justify-start gap-[60px] min-w-[880px] max-w-full mq1125:gap-[30px_60px] mq1125:min-w-full mq1325:flex-1">
              <div className="self-stretch h-[2135px] flex flex-col items-start justify-start gap-[20px] max-w-full">
                <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full z-[4]">
                  <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                  <div className="relative text-xl font-poppins text-black text-left z-[5] mq450:text-base">
                    -Select-
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left inline-block min-w-[75px] z-[2]">
                      Fuel Type
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full z-[2]">
                    <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[3] mq450:text-base">
                      -Select-
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left inline-block min-w-[69px] z-[2]">
                      Listed By
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full z-[2]">
                    <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[3] mq450:text-base">
                      -Select-
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left z-[2]">
                      Transmision
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full z-[2]">
                    <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[3] mq450:text-base">
                      -Select-
                    </div>
                  </div>
                </div>
                <TransmissionPicker1 kMDriven="KM Driven" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left">
                      No of owners
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full">
                    <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
                      -Select-
                    </div>
                  </div>
                </div>
                <TransmissionPicker1 kMDriven="Ad Title" propMinWidth="59px" />
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left">
                      Ad Description
                    </div>
                  </div>
                  <Input.TextArea className="self-stretch flex-1 font-poppins text-xl text-black max-w-full" />
                </div>
                <TransmissionPicker1 kMDriven="Price" propMinWidth="39px" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left inline-block min-w-[64px]">
                      Country
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full">
                    <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
                      -Select-
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left">
                      State /Emirates
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full">
                    <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
                      -Select-
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left inline-block min-w-[32px] z-[1]">
                      City
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full">
                    <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
                      -Select-
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9.5px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left">
                      Enquiry Type
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full">
                    <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
                      -Select-
                    </div>
                  </div>
                  <div className="self-stretch h-20 relative rounded-mini bg-gainsboro-300" />
                </div>
                <TransmissionPicker mainImage="Main Image" />
                <TransmissionPicker mainImage="More Image" />
              </div>
              <div className="self-stretch flex flex-row items-end justify-start gap-[44px] mq450:gap-[44px_22px] mq800:flex-wrap">
                <Button
                  className="flex-[0.5431] min-w-[182px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1"
                  type="default"
                />
                <div className="h-[47px] w-[232px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-[5px] flex flex-row items-start justify-start relative gap-[3px]">
                    <div className="h-full w-11 absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-21xl bg-gainsboro-400" />
                    <div className="h-full w-11 absolute !m-[0] top-[0px] bottom-[0px] left-[47px] rounded-21xl bg-gainsboro-400" />
                    <div className="h-full w-11 absolute !m-[0] top-[0px] bottom-[0px] left-[calc(50%_-_22px)] rounded-21xl bg-steelblue-100" />
                    <div className="h-full w-11 absolute !m-[0] top-[0px] right-[47px] bottom-[0px] rounded-21xl bg-gainsboro-400" />
                    <div className="h-full w-11 absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-21xl bg-gainsboro-400" />
                  </div>
                </div>
                <Button
                  className="flex-1 min-w-[182px] whitespace-nowrap"
                  type="primary"
                />
              </div>
            </form>
            <div className="w-[395px] bg-gainsboro-100 flex flex-row items-start justify-center py-[1085px] pr-5 pl-[21px] box-border min-w-[395px] max-w-full mq800:pt-[298px] mq800:pb-[298px] mq800:box-border mq800:min-w-full mq1125:pt-[458px] mq1125:pb-[458px] mq1125:box-border mq1325:flex-1 mq1325:pt-[705px] mq1325:pb-[705px] mq1325:box-border">
              <div className="h-[2245px] w-[395px] relative bg-gainsboro-100 hidden max-w-full" />
              <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[70px] z-[1] mq450:text-11xl mq800:text-21xl">
                AD
              </h1>
            </div>
          </div>
        </section>
      </main>
      {/* <CitygelLogo /> */}
      <div className="w-full h-[1485.2px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[-373px] left-[-1100px] w-[2178.5px] h-[1848.2px] object-contain"
          alt=""
          src="/vector-19.svg"
        />
        <img
          className="absolute top-[-363px] left-[-1120px] w-[2178.5px] h-[1848.2px] object-contain z-[1]"
          alt=""
          src="/vector-21.svg"
        />
        <img
          className="absolute top-[-85px] left-[166px] w-[1967.9px] h-[1105.9px] object-contain z-[2]"
          alt=""
          src="/vector-18.svg"
        />
        <img
          className="absolute top-[-95px] left-[166px] w-[1967.9px] h-[1105.9px] object-contain z-[3]"
          alt=""
          src="/vector-20.svg"
        />
        <div className="absolute top-[80px] left-[1257px] rounded-[50%] bg-nd [filter:blur(430px)] w-[364px] h-[364px] z-[4]" />
        <img
          className="absolute top-[229px] left-[1035px] w-[744px] h-[774px] object-contain z-[5]"
          loading="lazy"
          alt=""
          src="/image-31@2x.png"
        />
      </div>
    </div>
  );
};

export default PostAds;
