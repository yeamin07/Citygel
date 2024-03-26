import { home, profile, postad } from "assets/Allimages";
const CitygelLogo = () => {
  return (
    <div className="h-auto">
      <footer
        className=" text-gray-1200 box-border flex h-[307px] max-w-full flex-col items-center
      justify-start  gap-[10px] bg-whitesmoke-100 py-[37px] px-5 text-left font-poppins text-xl mq500:h-[250px] mq500:gap-0"
      >
        <img
          className="block h-[193px] w-[390px] max-w-full
        object-cover mq1325:h-[180px] mq1325:w-[350px] mq1050:h-[165px] mq1050:w-[320px] mq800:h-[150px] mq800:w-[290px] mq450:h-[100px] mq450:w-[200px]"
          loading="lazy"
          alt=""
          src="/citygel2@2x.png"
        />
        <div className="box-border block flex max-w-full flex-row items-start justify-start py-0 px-[7px]">
          <div className=" mq750:text-base mq750:text-[19px] mq500:text-[16px]">
            ©CityGel.com 2024, All rights Reseved
          </div>
        </div>
      </footer>
      {/*~~~~~~~~~~~~~~~This is for mobile footer~~~~~~~~~~~~~~~ */}
      {/* <div
        className="fixed bottom-0 flex h-[68px] w-full w-full items-center justify-center border-t-[2px] border-solid border-gray-200
      bg-white-A700 p-4 pt-[9px] md:hidden"
      >
        <div className="flex h-5/6 w-full justify-between px-8 ">
          <img className="h-[82%] w-[33px]" src={home} />
          <img className="h-[82%] w-[38px]" src={postad} />
          <img className="h-[82%] w-[36px]" src={profile} />
        </div>
      </div> */}
    </div>
  );
};

export default CitygelLogo;
