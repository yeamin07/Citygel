import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  prevStep,
  setForm,
  setMembership,
} from "store/slices/adsPostSlice";

const PostMembershipPlan = () => {
  const { register, handleSubmit, errors, control } = useForm();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const { currentStep, categories, subcategory, form } = useSelector(
    (state) => state.post,
  );
  const handleMembershipSelect = (selectedMembership) => {
    setSelected(selectedMembership);
    dispatch(setMembership(selected));
  };
  const handleNext = () => {
    dispatch(nextStep());
  };
  const handlePrev = () => {
    dispatch(prevStep());
  };
  console.log(form);
  return (
    <div className="mq1050:mt-36">
      <div className=" mq750:h-[3000px]">
        <main className=" text-black flex w-full max-w-full flex-col items-start justify-start gap-[83px] text-left font-poppins text-25xl mq1050:gap-[41px_83px] mq750:gap-[21px_83px]">
          <div className="box-border flex w-full max-w-full flex-row items-start justify-center px-5 pt-0 pb-[37px]">
            <div className="flex  w-full max-w-full flex-col items-start justify-start gap-[20px] pl-11 mq800:pl-0">
              <h1 className="font-inherit relative z-[4] m-0 inline-block max-w-full font-medium text-inherit mq1050:text-16xl mq450:text-7xl">{`Pricing & Plans`}</h1>
              <div className="text-gray-1200 relative z-[4] self-stretch text-3xl leading-[35px] mq450:text-lg mq450:leading-[28px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem `}</div>
            </div>
          </div>
          <section className=" box-border  max-w-full px-5 pt-0 pb-[8.300000000000182px] text-left font-poppins text-22xl-5 text-main-color ">
            <div className=" flex w-full max-w-full flex-row items-start justify-start sm:flex-col mq1050:flex-col mq750:flex-col mq450:flex-col">
              <div className="z-[4] box-border flex w-[100%] max-w-full  flex-row items-start justify-start gap-[39.10000000000037px] rounded-[29.94px] bg-white-A700 py-[46.09999999999991px] px-[78.29999999999927px] mq750:box-border mq750:w-[100%] mq750:flex-wrap mq750:gap-[39.10000000000037px_20px] mq750:pl-[39px] mq750:pr-[39px] mq450:w-[100%]">
                <div className="relative hidden h-[537.8px] w-[50%] max-w-full rounded-[29.94px] bg-white-A700" />
                <div className="z-[5] box-border flex w-[50%] min-w-[50%] flex-col items-start justify-start gap-[97px] px-0 pt-0  pb-[0.8999999999996362px] mq750:flex-1 mq450:gap-[48px_97px]">
                  <div className="flex flex-col items-start justify-start gap-[23.030948638916016px] self-stretch px-0 pt-0 pb-0">
                    <div className="box-border flex h-[53px] shrink-0 flex-row items-center justify-end gap-[2px] overflow-hidden pt-[9.799999999999956px] pb-0 pr-3.5">
                      <b className="relative leading-[48.97px] mq1050:text-14xl mq1050:leading-[42px] mq450:text-6xl mq450:leading-[32px]">
                        Free
                      </b>
                      <div className="relative inline-block min-w-[76px] text-lgi-6 font-medium text-lightslategray">
                        /month
                      </div>
                    </div>
                    <div className="flex h-[106.3px] shrink-0 flex-col items-start justify-start self-stretch overflow-hidden text-13xl-2">
                      <div className="relative inline-block h-24 font-medium mq1050:text-7xl mq450:text-lgi">
                        <p className="m-0">Starter</p>
                      </div>
                      <div className="relative mt-[-40px] self-stretch text-mid-3 font-medium text-lightslategray">
                        Unleash the power of automation.
                      </div>
                    </div>
                    <div className="flex w-[238.4px] flex-col items-start justify-start gap-[11.515474319458008px] text-mid-3 text-lightslategray">
                      <div className="box-border flex h-[24.2px] shrink-0 flex-row items-center justify-start gap-[11px] self-stretch overflow-hidden py-0 pr-px pl-0">
                        <img
                          className="relative h-[23px] w-[23px]"
                          loading="lazy"
                          alt=""
                          src="/checkcircle1.svg"
                        />
                        <div className="relative flex-1 font-medium">
                          Multi-step Zaps
                        </div>
                      </div>
                      <div className="box-border flex h-[24.2px] shrink-0 flex-row items-center justify-start gap-[11px] self-stretch overflow-hidden py-0 pr-px pl-0">
                        <img
                          className="relative h-[23px] w-[23px]"
                          alt=""
                          src="/checkcircle1.svg"
                        />
                        <div className="relative flex-1 font-medium">
                          3 Premium Apps
                        </div>
                      </div>
                      <div className="box-border flex h-[24.2px] shrink-0 flex-row items-center justify-start gap-[11px] self-stretch overflow-hidden py-0 pr-px pl-0">
                        <img
                          className="relative h-[23px] w-[23px]"
                          alt=""
                          src="/checkcircle1.svg"
                        />
                        <div className="relative flex-1 font-medium">
                          2 Users team
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleMembershipSelect("starter")}
                    className=" text-white box-border flex w-[238.4px] cursor-pointer flex-col items-start justify-center overflow-hidden whitespace-nowrap rounded-[27.64px] bg-steelblue-200 pt-[13px] pb-[12.800000000000182px] pr-[64.09999999999854px] pl-[63.30000000000109px] text-center text-mid-3 mix-blend-normal"
                  >
                    <div className="relative self-stretch font-medium">
                      {selected == "starter" ? "Selected" : " Choose plan"}
                    </div>
                  </div>
                </div>
                <div className="flex  w-[50%] min-w-[50%] flex-col items-start justify-start gap-[61.90000000000009px]  mq750:flex-1 mq450:gap-[31px_61.90000000000009px]">
                  <div className="flex flex-col items-start justify-start gap-[23.049999999999955px] self-stretch">
                    <div className="z-[5] box-border flex h-[53px] shrink-0 flex-row items-start justify-start gap-[6px] overflow-hidden pt-[9.799999999999956px] pb-[2.2000000000000455px] pr-5 pl-0">
                      <b className="relative whitespace-nowrap leading-[52.97px] mq1050:text-14xl mq1050:leading-[42px] mq450:text-6xl mq450:leading-[32px]">
                        $54
                      </b>
                      <div className="flex flex-col items-start justify-start px-0 pt-3 pb-0 text-lgi-6 text-lightslategray">
                        <div className="relative inline-block min-w-[76px] font-medium">
                          /month
                        </div>
                      </div>
                    </div>
                    <div className="z-[5] box-border flex h-[106.3px] shrink-0 flex-col items-start justify-start gap-[7px] self-stretch overflow-hidden px-0 pt-0 pb-[53.30000000000018px] text-13xl-2">
                      <div className="relative shrink-0 font-medium  mq1050:text-7xl mq450:text-lgi">
                        Professional
                      </div>
                      <div className="relative shrink-0 self-stretch text-mid-3 font-medium text-lightslategray">
                        Advanced tools to take your work to the next level.
                      </div>
                    </div>
                    <div className="flex w-[238.4px] flex-col items-start justify-start gap-[11.500000000000153px] text-mid-3 text-lightslategray">
                      <div className="z-[5] box-border flex h-[24.2px] shrink-0 flex-row items-start justify-start gap-[11px] self-stretch overflow-hidden pt-[0.5px] pb-[0.6999999999998181px] pr-px pl-0">
                        <img
                          className="relative h-[23px] min-h-[23px] w-[23px]"
                          alt=""
                          src="/checkcircle1-3.svg"
                        />
                        <div className="relative mt-[-1.400000000000091px] flex-1 font-medium">
                          Multi-step Zaps
                        </div>
                      </div>
                      <div className="z-[5] box-border flex h-[24.2px] shrink-0 flex-row items-start justify-start gap-[11.600000000000364px] overflow-hidden px-0 pt-0 pb-[0.09999999999990904px]">
                        <div className="box-border flex h-[24.1px] flex-col items-start justify-start px-0 pt-[1.099999999999909px] pb-0">
                          <img
                            className="relative h-[23px] w-[23px] shrink-0 [debug_commit:612783b]"
                            alt=""
                            src="/checkcircle1-4.svg"
                          />
                        </div>
                        <div className="relative inline-block w-[203.8px] shrink-0 font-medium [debug_commit:612783b]">
                          Unlimited Premium Apps
                        </div>
                      </div>
                      <div className="z-[5] box-border flex h-[24.2px] shrink-0 flex-row items-start justify-start gap-[11px] self-stretch overflow-hidden pt-[0.5px] pb-[0.6999999999998181px] pr-px pl-0">
                        <img
                          className="relative h-[23px] min-h-[23px] w-[23px]"
                          alt=""
                          src="/checkcircle1-3.svg"
                        />
                        <div className="relative mt-[-1.400000000000091px] flex-1 font-medium">
                          50 Users team
                        </div>
                      </div>
                      <div className="z-[5] box-border flex h-[24.2px] shrink-0 flex-row items-start justify-start gap-[11px] self-stretch overflow-hidden pt-[0.5px] pb-[0.6999999999998181px] pr-px pl-0">
                        <img
                          className="relative h-[23px] min-h-[23px] w-[23px]"
                          alt=""
                          src="/checkcircle1-3.svg"
                        />
                        <div className="relative mt-[-1.400000000000091px] flex-1 font-medium">
                          Shared Workspace
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleMembershipSelect("premium")}
                    className="text-white z-[5] flex cursor-pointer flex-row items-start justify-start overflow-hidden whitespace-nowrap rounded-[27.64px] bg-steelblue-200 pt-[13px] pb-[12.800000000000182px] pr-16 pl-[63.39999999999963px] text-center text-mid-3 mix-blend-normal"
                  >
                    <div className="relative inline-block w-[111px] font-medium">
                      {selected == "premium" ? "Selected" : " Choose plan"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white box-border flex w-[50%] max-w-full flex-col items-start justify-start px-0 pt-0 pb-[23px] text-mid-3 mq750:w-[100%] mq450:w-[100%]">
                <div className=" z-[5] flex flex-col items-start justify-start gap-[23px] rounded-[29.94px] bg-main-color py-[23px] pr-[34.49999999999818px] pl-[34.600000000000364px] shadow-[0px_48.4px_39.15px_rgba(11,_144,_175,_0.3)]">
                  <div className=" flex flex-row items-start justify-end text-center text-[11.5px]">
                    <div className="flex flex-row items-start justify-start rounded-[15.55px] bg-nd pt-[8.099999999999909px] pb-1.5 pr-5 pl-[18px]">
                      <div className="relative inline-block w-[102px]  font-extrabold leading-[18px] text-white-A700">
                        MOST POPULAR
                      </div>
                    </div>
                  </div>
                  <div className="box-border  flex h-[53px] flex-row items-start justify-start gap-[7px] px-3 pt-[9.700000000000044px] pb-[2.2999999999999545px] text-22xl-5">
                    <b className=" relative leading-[52.97px] text-white-A700  mq1050:text-14xl mq1050:leading-[42px] mq450:text-6xl mq450:leading-[32px]">
                      $89
                    </b>
                    <div className="flex flex-col items-start justify-start px-0 pt-3 pb-0 text-lgi-6">
                      <div className=" relative inline-block min-w-[76px] font-medium text-white-A700">
                        /month
                      </div>
                    </div>
                  </div>
                  <div className=" box-border   flex h-[106.3px] flex-col items-start justify-start gap-[7px] px-0 pt-0 pb-[53.30000000000018px] text-13xl-2">
                    <div className=" relative font-medium text-white-A700  mq1050:text-7xl mq450:text-lgi">
                      Company
                    </div>
                    <div className=" relative  shrink-0 text-mid-3 font-medium text-white-A700 [debug_commit:612783b]">
                      Automation plus enterprise-grade features.
                    </div>
                  </div>
                  <div className="box-border flex w-[238.4px] flex-col items-start justify-start gap-[11.500000000000227px] px-0 pt-0 pb-[3.5px]">
                    <div className=" box-border  flex h-[24.2px] shrink-0 flex-row items-start justify-start gap-[11px] overflow-hidden py-[0.599999999999909px] pr-px pl-0 text-white-A700">
                      <img
                        className="relative h-[23px] min-h-[23px] w-[23px]"
                        alt=""
                        src="/checkcircle1-7.svg"
                      />
                      <div className=" relative mt-[-1.5px] flex-1 font-medium text-white-A700">
                        Multi-step Zap
                      </div>
                    </div>
                    <div className="flex h-[24.2px] shrink-0 flex-row items-start justify-start gap-[11.5px] overflow-hidden">
                      <div className="box-border flex h-[24.2px] flex-col items-start justify-start px-0 pt-[1.2000000000002728px] pb-0">
                        <img
                          className="relative h-[23px] w-[23px]"
                          alt=""
                          src="/checkcircle1-8.svg"
                        />
                      </div>
                      <div className=" relative inline-block w-[203.8px] shrink-0 font-medium text-white-A700">
                        Unlimited Premium Apps
                      </div>
                    </div>
                    <div className="box-border flex h-[24.2px] shrink-0 flex-row items-start justify-start gap-[11px] self-stretch overflow-hidden py-[0.599999999999909px] pr-px pl-0">
                      <img
                        className="relative h-[23px] min-h-[23px] w-[23px]"
                        alt=""
                        src="/checkcircle1-7.svg"
                      />
                      <div className=" relative mt-[-1.5px] flex-1 font-medium text-white-A700">
                        Unlimited Users Team
                      </div>
                    </div>
                    <div className=" box-border flex h-[24.2px] shrink-0 flex-row items-start justify-start gap-[11px] self-stretch overflow-hidden py-[0.599999999999909px] pr-px pl-0 text-white-A700">
                      <img
                        className="relative h-[23px] min-h-[23px] w-[23px]"
                        alt=""
                        src="/checkcircle1-7.svg"
                      />
                      <div className=" relative mt-[-1.5px] flex-1 font-medium text-white-A700">
                        Advanced Admin
                      </div>
                    </div>
                    <div className="box-border flex h-[24.2px] shrink-0 flex-row items-start justify-start gap-[11px] overflow-hidden py-[0.599999999999909px] pr-px pl-0">
                      <img
                        className="relative h-[23px] min-h-[23px] w-[23px]"
                        alt=""
                        src="/checkcircle1-7.svg"
                      />
                      <div className=" relative mt-[-1.5px] font-medium text-white-A700">
                        Custom Data Retention
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleMembershipSelect("professional")}
                    className={`bottom-1 cursor-pointer ${selected === "professional" ? "border-red-500" : ""} flex flex-row items-start justify-start overflow-hidden whitespace-nowrap rounded-[27.64px] bg-white-A700 px-[78.10000000000036px] pt-[12.300000000000182px] pb-[12.399999999999636px] text-center text-nd mq450:box-border mq450:pl-5 mq450:pr-5`}
                  >
                    <div className=" relative inline-block w-[111px] font-medium text-nd">
                      {selected == "professional" ? "Selected" : " Choose plan"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="mt-9 flex w-full  items-center justify-center ">
          <div className="mq800: text-white box-border flex w-[70%] max-w-full flex-row justify-center py-9 py-0 px-5  text-11xl sm:w-[100%] sm:flex-col mq1050:w-[100%] mq1050:items-center mq450:flex-col">
            <div className="flex w-full max-w-full  flex-row items-center justify-between gap-5 mq1050:flex-wrap mq1050:justify-center">
              <div
                onClick={handlePrev}
                className="z-[2] box-border  flex h-[80px] w-[70%] cursor-pointer  flex-row   items-center justify-center rounded-xl bg-[#D3D3D3] pt-[23px] pb-[22px] pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] sm:w-[35%] mq1050:w-[30%]  mq750:w-[30%]"
              >
                <div className="relative z-[3] text-white-A700 mq1050:text-3xl mq450:text-lg">
                  Previous
                </div>
              </div>
              <div className="mt-10  flex h-[47px] flex-col items-center justify-between sm:w-[20%]">
                <div className=" relative z-[2] flex h-[5px] flex-row items-center justify-between gap-[10px]">
                  <div
                    className={`h-full  w-11 rounded-21xl sm:w-3  mq1050:w-5 ${currentStep == 1 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 rounded-21xl sm:w-3 mq1050:w-5 ${currentStep == 2 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 rounded-21xl sm:w-3 mq1050:w-5 ${currentStep == 3 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 rounded-21xl sm:w-3  mq1050:w-5 ${currentStep == 4 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 rounded-21xl sm:w-3 mq1050:w-5 ${currentStep == 5 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                </div>
              </div>
              {selected ? (
                <div
                  onClick={handleNext}
                  className={`z-[2] box-border  flex  h-[80px]  w-[50%] cursor-pointer  flex-row items-center justify-center whitespace-nowrap rounded-xl pt-[23px] pb-[22px] pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] sm:mt-[8px] sm:w-[35%] mq1050:w-[30%] mq750:w-[30%]`}
                >
                  <div className="relative z-[3] text-white-A700 sm:text-[14px] mq1050:text-[16px]">
                    {currentStep}/5 Next
                  </div>
                </div>
              ) : (
                <div
                  className={`z-[2] box-border  flex  h-[80px]  w-[50%] cursor-pointer  flex-row items-center justify-center whitespace-nowrap rounded-xl bg-black-900_33 pt-[23px] pb-[22px] pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] sm:mt-[8px] sm:w-[35%] mq1050:w-[30%] mq750:w-[30%]`}
                >
                  <div className="relative z-[3] text-white-A700 sm:text-[14px] mq1050:text-[16px]">
                    {currentStep}/5 Next
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMembershipPlan;
