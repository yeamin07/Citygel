import React from "react";
import { useNavigate } from "react-router-dom";

export const Categorycart = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/products")}
      className="gray_50_02_red_A400_border flex h-[200px]   flex-col items-center  justify-center sm:h-[100px] sm:w-[100px] mq1500:w-[170px] mq1050:h-[140px] mq1050:w-[120px] mq800:h-[143px] mq800:w-[157px] mq450:h-[143px] mq450:w-[157px]"
    >
      <img
        src={props.image}
        className="h-[74px] w-[74px] sm:h-[50%] sm:w-[50%] mq1050:h-[54px] mq800:h-[34px] mq800:w-[34px]"
      />
      <p className="mt-3 font-poppins font-normal">{props.text}</p>
    </div>
  );
};

export const BigCart = (props) => {
  return (
    <div className="solid flex h-[230px] w-[280px] flex-col items-center justify-center border-2 border-slate-100 mq1500:shadow-md  mq1050:h-[190px] mq1050:w-[220px] mq800:h-[140px]  mq800:w-[180px] mq450:h-[94px] mq450:w-[160px] mq450:rounded-md ">
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
    <div className="solid mb-2  flex h-[100px] w-[280px] place-content-between items-center rounded-md border-2 border-slate-100  px-2 mq1500:shadow-md mq1050:w-[220px] mq800:h-[60px] mq800:w-[180px]">
      <p>{props.text}</p>
      <img src={props.image} alt="" />
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
    <button
      className="border-1 flex h-[90px] h-[80px]  w-[280px] items-center justify-center rounded-[15px]  
            text-lg text-white-A700 mq1050:h-[80px]
            mq1050:w-[220px] mq800:h-[60px] mq800:w-[180px] mq450:h-[45px] mq450:w-[160px]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(11, 144, 175, 1), rgba(32, 197, 242, 1))",
      }}
    >
      View All
    </button>
  );
};

export const Cart4 = (props) => {
  return (
    <div className="gray_50_02_red_A400_border flex h-[25vh] w-[25%] flex-col items-center justify-center mq1500:h-[230px] mq1500:w-[280px] mq1050:h-[170px] mq1050:w-[230px] mq450:h-[188px] mq450:w-[256px]">
      <h1
        className="font-poppins text-[130%] font-medium"
        style={{ overflowWrap: "break-word" }}
      >
        {props.h}
      </h1>
      <p
        className="pt-5 pl-7 font-poppins text-[90%] font-normal opacity-50"
        style={{ overflowWrap: "break-word" }}
      >
        {props.p}
      </p>
    </div>
  );
};
