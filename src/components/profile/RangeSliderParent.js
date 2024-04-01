const RangeSliderParent = ({
  vuesaxboldsms,
  enquireNow,
  emailLink,
  phoneLink,
}) => {
  function makeCall() {
    window.open(`tel:${phoneLink}`, "_parent");
  }
  return (
    <div className="box-border flex w-full items-center justify-center gap-[12px] self-stretch rounded-[10px] px-[14px] py-[14px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] sm:px-[10px] sm:py-[8px] md:py-[11px]  lg:py-[15px] xl:py-[17px] 2xl:py-[20px]">
      {emailLink ? (
        <a href={`mailto:${emailLink}`}>
          <div className="flex flex-row items-center justify-around space-x-1 sm:space-x-[2px] lg:space-x-[4px]">
            {/* <div className="h-[90px] w-[375px] relative rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] hidden max-w-full" /> */}
            <img
              className="relative z-[2] h-[1.6rem] min-h-[1rem] w-[1.6rem] sm:h-[1.1rem] sm:w-[1.1rem] md:h-[1.4rem] md:w-[1.4rem] lg:h-[1.7rem] lg:w-[1.7rem]
         xl:h-[1.9rem] xl:w-[1.9rem] 2xl:h-[2.1rem]  2xl:w-[2.1rem]"
              alt=""
              src={vuesaxboldsms}
            />
            <div className="flex flex-col items-start justify-start px-0 pt-0.5 pb-0">
              <p className=" relative z-[2] flex items-center whitespace-nowrap text-center font-poppins text-[1rem] text-white-A700 sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.3rem]">
                {enquireNow}
              </p>
            </div>
          </div>
        </a>
      ) : (
        <a onClick={makeCall}>
          <div className="flex flex-row items-center justify-around space-x-1 sm:space-x-[2px] lg:space-x-[4px]">
            {/* <div className="h-[90px] w-[375px] relative rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] hidden max-w-full" /> */}
            <img
              className="relative z-[2] h-[1.6rem] min-h-[1rem] w-[1.6rem] sm:h-[1.1rem] sm:w-[1.1rem] md:h-[1.4rem] md:w-[1.4rem] lg:h-[1.7rem] lg:w-[1.7rem]
         xl:h-[1.9rem] xl:w-[1.9rem] 2xl:h-[2.1rem]  2xl:w-[2.1rem]"
              alt=""
              src={vuesaxboldsms}
            />
            <div className="flex flex-col items-start justify-start px-0 pt-0.5 pb-0">
              <p className=" relative z-[2] flex items-center whitespace-nowrap text-center font-poppins text-[1rem] text-white-A700 sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.3rem]">
                {enquireNow}
              </p>
            </div>
          </div>
        </a>
      )}
    </div>
  );
};

export default RangeSliderParent;
