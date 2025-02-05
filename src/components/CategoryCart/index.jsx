import React from "react";
import { useNavigate } from "react-router-dom";

export const Categorycart = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/products")}
      className="gray_50_02_red_A400_border flex h-[9.5rem] flex-col items-center justify-center border "
    >
      <img src={props.image} className=" h-[56px] w-[56px]" />
      <p className="mt-3 font-poppins font-normal">{props.text}</p>
    </div>
  );
};

export const BigCart = (props) => {
  return (
    <div className="solid mb-2 flex w-full flex-col items-center justify-center rounded-[17px] border-2 border-slate-100 bg-[#ffffff] py-10">
      <img
        src={props.image}
        className="h-[74px] w-[74px] mq450:h-[26px] mq450:w-[26px]"
      />
      <p className="mt-3 font-poppins text-[150%] font-normal">{props.text}</p>
    </div>
  );
};

export const SmallCart = (props) => {
  return (
    <div className="solid mb-2 flex  place-content-between items-center rounded-md border-2 border-slate-100 bg-[#ffffff] py-6 px-4  mq450:justify-center ">
      <p className="opacity-70 sm:text-xl mq450:inline-block mq450:text-[11.34px]">
        {props.text}
      </p>
      <img src={props.image} alt="" className="hidden sm:block " />
    </div>
  );
};

export const SmallCartMobile = (props) => {
  return (
    <div className="solid ml-4 mb-2 flex place-content-between items-center justify-center rounded-md  border-2 border-slate-100 px-2 mq450:ml-0 mq450:h-[45px] mq450:w-[160px] mq450:px-0 mq450:shadow-md ">
      <p>{props.text}</p>
    </div>
  );
};

export const Buttons = () => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="border-1 flex  h-[80px]  w-full items-center justify-center rounded-[15px]  
            text-lg text-white-A700 mq1050:h-[80px]
            mq1050:w-[220px] mq800:h-[60px] mq800:w-[180px] mq450:h-[45px] mq450:w-[160px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11, 144, 175, 1), rgba(32, 197, 242, 1))",
        }}
      >
        View All
      </button>
    </div>
  );
};

export const Cart4 = (props) => {
  return (
    <div className="gray_50_02_red_A400_border2 flex h-[25vh] flex-col items-center justify-center text-center">
      <h1
        className="font-poppins text-[22px] font-medium 2xl:text-[25px]"
        style={{ overflowWrap: "break-word" }}
      >
        {props.h}
      </h1>
      <p
        className="px-3  pt-5 text-center font-poppins font-normal opacity-70 2xl:px-5"
        style={{ overflowWrap: "break-word" }}
      >
        {props.p}
      </p>
    </div>
  );
};
