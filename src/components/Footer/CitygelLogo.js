import { home, profile, postad } from "assets/Allimages";
const CitygelLogo = () => {
  return (
    <>
      <footer className="   flex flex-col items-center justify-start
      pb-[100px] sm:py-[37px]  px-5 box-border gap-[10px] mq500:gap-0 w-full text-left text-xl text-gray-1200 font-poppins">

        <img
          className= "w-[280px] h-[140px] sm:w-[370px] block sm:h-[193px] object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/citygel2@2x.png"
        />
        <div className="flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full block">
          <div className=" mq750:text-[19px] mq500:text-[16px] mq400:text-[14px] mq300:text-[11px]">
            ©CityGel.com 2024, All rights Reseved
          </div>
        </div>
      </footer>

    </>
  );
};

export default CitygelLogo;
