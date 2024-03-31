const RangeSliderParent = ({ vuesaxboldsms, enquireNow }) => {
  return (
    <div className="self-stretch rounded-[10px] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex items-center justify-center px-[14px] py-[14px] sm:px-[10px] sm:py-[8px] 2xl:py-[20px] xl:py-[17px] lg:py-[15px] md:py-[11px]  box-border gap-[12px] w-full">
      <div className="flex flex-row justify-around items-center space-x-1 sm:space-x-[2px] lg:space-x-[4px]">
      {/* <div className="h-[90px] w-[375px] relative rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] hidden max-w-full" /> */}
      <img
        className="w-[1.6rem] h-[1.6rem] sm:h-[1.1rem] sm:w-[1.1rem] md:h-[1.4rem] md:w-[1.4rem] lg:h-[1.7rem] lg:w-[1.7rem] xl:h-[1.9rem] xl:w-[1.9rem] 2xl:w-[2.1rem]
         2xl:h-[2.1rem] relative min-h-[1rem]  z-[2]"
        alt=""
        src={vuesaxboldsms}
      />
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <p className=" text-center text-white-A700 font-poppins text-[1rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.3rem] relative flex items-center whitespace-nowrap z-[2]">
          {enquireNow}
        </p>
      </div>
      </div>
    </div>
  );
};

export default RangeSliderParent;
