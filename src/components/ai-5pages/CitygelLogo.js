import { home,profile,postad } from "assets/Allimages";
const CitygelLogo = () => {
  return (
   <div className="h-auto">
     <footer className=" h-[307px] mq500:h-[250px] bg-whitesmoke-100 flex flex-col items-center justify-start
      py-[37px]  px-5 box-border gap-[10px] mq500:gap-0 max-w-full text-left text-xl text-gray-1200 font-poppins">

      <img
        className="w-[390px] mq1325:w-[350px] mq1325:h-[180px] block
        mq1050:w-[320px] mq1050:h-[165px] mq800:w-[290px] mq800:h-[150px] mq450:w-[200px] mq450:h-[100px] h-[193px] object-cover max-w-full"
        loading="lazy"
        alt=""
        src="/citygel2@2x.png"
      />
      <div className="flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full block">
        <div className=" mq750:text-base mq750:text-[19px] mq500:text-[16px]">
          ©CityGel.com 2024, All rights Reseved
        </div>
      </div>
    </footer>
    {/*~~~~~~~~~~~~~~~This is for mobile footer~~~~~~~~~~~~~~~ */}
    <div className="hidden mq500:block h-[68px] w-full bg-white-A700 border-t-[2px] border-solid border-gray-200
      flex justify-center items-center pt-[9px]">
        <div className="w-full px-8 h-5/6 flex justify-between ">
        <img className="w-[33px] h-[82%]" src={home}/>
        <img className="w-[38px] h-[82%]" src={postad}/>
        <img className="w-[36px] h-[82%]" src={profile}/>
        </div>
      </div>
   </div>
  );
};

export default CitygelLogo;
