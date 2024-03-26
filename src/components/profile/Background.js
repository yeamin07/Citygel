const Background = () => {
  return (
    <div className=" rounded-11xl bg-white w-full h-[120px] z-[3] text-9xl text-black">
      <div className="relative top-[0px] left-[0px] rounded-11xl bg-white w-full h-full hidden" />
      <div className="relative top-[5px] left-[5px] rounded-11xl bg-whitesmoke-200 w-full h-[110px] z-[4]">
        <div className="relative top-[0px] left-[0px] rounded-11xl bg-whitesmoke-200 w-full h-full hidden" />
        <div className="relative h-full top-[0px] bottom-[0px] left-[0px] rounded-7xl bg-main-color w-[563.3px] z-[5] text-white">
          <div className="relative top-[0px] left-[0px] rounded-7xl bg-main-color w-full h-full hidden" />
          <div className="relative top-[34px] left-[170px] whitespace-nowrap z-[6]">
            Personal Details
          </div>
        </div>

        <div className="relative top-[34px] right-[200px] whitespace-nowrap z-[6]">
          My Ads
        </div>
        <div className="relative top-[34px] right-[200px] whitespace-nowrap z-[6]">
          My Ads
        </div>
      </div>
    </div>
  );
};

export default Background;
