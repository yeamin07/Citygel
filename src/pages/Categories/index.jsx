import React from "react";
import { yellowcurve, bluecurve, sittingman } from "../../assets/Allimages";
import blueimg2 from "../../assets/images/Vector 23.png";
import {
  BigCart,
  Buttons,
  Categorycart,
  SmallCart,
  SmallCartMobile,
  Cart4,
} from "../../components/CategoryCart";
import jobs from "../../assets/images/jobs.png";
import furniture from "../../assets/images/furniture.png";
import services from "../../assets/images/services.png";
import electronics from "../../assets/images/electronics.png";
import motor from "../../assets/images/motor.png";
import properties from "../../assets/images/properties.png";
import five from "../../assets/images/5.png";
import Header1 from "components/Header1";
import CitygelLogo from "components/ai-5pages/CitygelLogo";

const Category = () => {
  return (
    <div>
      <div className="relative z-[100]">
        <Header1 />{" "}
      </div>

      <div className="mt-[-100px] flex h-auto overflow-hidden">
        <img
          src={yellowcurve}
          className="relative top-[100px] -z-10 w-1/5 flex-grow mq1500:top-[80px] mq1500:h-[1000px] mq800:h-[500px]"
        />
        <img
          src={bluecurve}
          className="left-0 top-0 h-[540px] w-5/6 flex-grow-0 mq1500:h-[550px] mq1050:h-[490px] mq800:h-[390px]"
        />
        <img
          src={sittingman}
          className="absolute right-20 top-48 mt-[] h-[660px] w-[720px] mq1500:mt-[10%] mq1500:h-[450px] mq1500:w-[500px] mq1050:mt-[10%] mq1050:h-[410px] mq1050:w-[450px] mq800:right-0 mq800:top-24 mq800:mt-[3%] mq800:h-[290px] mq800:w-[320px]"
        />
      </div>

      <div className="absolute top-[300px] z-[999] w-[100%] sm:relative sm:w-[100%] mq1125:relative mq1050:relative  mq1050:top-[0px]    mq1050:mt-[-200px] mq800:w-[100%] mq750:mt-[-80px] ">
        <div className="ml-11   font-bold">
          <p className="w-[60%]  text-[70px] sm:text-[60px] mq1325:text-[50px] mq1050:text-[45px] mq825:w-[200px] mq800:text-[16px]">
            Find Anything
            <br />
            Around You
          </p>
        </div>
        <div className="ml-11 w-[60%] font-poppins text-sm font-normal opacity-50 ">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
        <div className="mx-auto mt-8 ml-11 grid w-[60%] grid-cols-4 gap-y-5 gap-x-5 sm:grid-cols-2 mq1500:gap-x-0  mq1050:gap-2 mq800:grid-cols-2 mq750:ml-2 mq750:w-[100%] mq450:grid-cols-2">
          <Categorycart image={properties} text="Properties" />
          <Categorycart image={motor} text="Motor" />
          <Categorycart image={electronics} text="Electronics" />
          <Categorycart image={furniture} text="Furniture" />
          <Categorycart image={services} text="Services" />
          <Categorycart image={jobs} text="Jobs" />
          <Categorycart image={services} text="Category 7" />
          <Categorycart image={services} text="Category 8" />
        </div>
        <div className="mt-5 mt-11 ml-14 flex h-[81px]  mq450:h-[27px] mq450:items-center mq450:justify-center mq450:pl-0">
          <div className="font-poppins text-[56px] font-medium mq1050:text-9xl mq450:text-lg">
            Browse By SubCategories:
          </div>
        </div>
        <div className="mt-5 hidden shrink grid-cols-2 place-items-center gap-y-2 mq1050:grid">
          <BigCart text="Properties" image={properties} />
          <BigCart text="Motor" image={motor} />
          <SmallCartMobile text="Apartment" />
          <SmallCartMobile text="Cars" />
          <SmallCartMobile text="Flats" />
          <SmallCartMobile text="Export Cars" />
          <SmallCartMobile text="House & Villas" />
          <SmallCartMobile text="Motorcycles" />
          <Buttons />
          <Buttons />

          <BigCart text="Electronics" image={electronics} />
          <BigCart text="Furniture" image={furniture} />
          <SmallCartMobile text="Electronics" />
          <SmallCartMobile text="Hospitality" />
          <SmallCartMobile text="Furniture" />
          <SmallCartMobile text="Travel & Tourism" />
          <SmallCartMobile text="Fashion" />
          <SmallCartMobile text="Government" />
          <Buttons />
          <Buttons />

          <BigCart text="Services" image={services} />
          <BigCart text="Jobs" image={jobs} />
          <SmallCartMobile text="Hospitality" />
          <SmallCartMobile text="Cars" />
          <SmallCartMobile text="Travel & Tourism" />
          <SmallCartMobile text="Export Cars" />
          <SmallCartMobile text="Government" />
          <SmallCartMobile text="Motorcycles" />
          <Buttons />
          <Buttons />

          <BigCart text="Category 7" image={services} />
          <BigCart text="Category 7" image={services} />
          <SmallCartMobile text="Sub category 1" />
          <SmallCartMobile text="Sub category 1" />
          <SmallCartMobile text="Sub category 1" />
          <SmallCartMobile text="Sub category 1" />
          <SmallCartMobile text="Sub category 1" />
          <SmallCartMobile text="Sub category 1" />
          <Buttons />
          <Buttons />
        </div>
        <div className="mx-auto flex w-[90%] items-center justify-center">
          <div className=" grid w-full grid-cols-4 gap-12 gap-y-1  mq1050:hidden">
            <div>
              <BigCart text="Properties" image={properties} />
              <SmallCart image={five} text="Apartment" />
              <SmallCart image={five} text="Flats" />
              <SmallCart image={five} text="House & Villas" />
              <Buttons />
            </div>
            <div>
              <BigCart text="Motor" image={motor} />
              <SmallCart image={five} text="Cars" />
              <SmallCart image={five} text="Export Cars" />
              <SmallCart image={five} text="Motorcycles" />
              <Buttons />
            </div>
            <div>
              <BigCart text="Electronics" image={electronics} />
              <SmallCart image={five} text="TVs" />
              <SmallCart image={five} text="Kitchen & Others" />
              <SmallCart image={five} text="Computers & lap..." />
              <Buttons />
            </div>
            <div>
              <BigCart text="Furniture" image={furniture} />
              <SmallCart image={five} text="Sofa & Dining" />
              <SmallCart image={five} text="Beds & Wardrobes" />
              <SmallCart image={five} text="Home Decor & ga..." />
              <Buttons />
            </div>

            <BigCart text="Services" image={services} />
            <BigCart text="Jobs" image={jobs} />
            <BigCart text="Category 7" image={services} />
            <BigCart text="Category 8" image={services} />
            <SmallCart image={five} text="Electronics & Repair" />
            <SmallCart image={five} text="Hospitality" />
            <SmallCart image={five} text="SubCategory 1" />
            <SmallCart image={five} text="SubCategory 1" />
            <SmallCart image={five} text="Health & beauty" />
            <SmallCart image={five} text="Travel & Tourism" />
            <SmallCart image={five} text="SubCategory 2" />
            <SmallCart image={five} text="SubCategory 2" />
            <SmallCart image={five} text="Renovation & re..." />
            <SmallCart image={five} text="Government" />
            <SmallCart image={five} text="SubCategory 3" />
            <SmallCart image={five} text="SubCategory 3" />
            <Buttons />
            <Buttons />
            <Buttons />
            <Buttons />
          </div>
        </div>
        <div className="mt-24 flex w-full  flex-col items-center justify-center">
          <p className=" font-poppins text-[50px] font-bold mq750:text-[36px]">
            How it Works
          </p>
          <p className="font-poppins font-semibold mq1500:text-[36px] mq1050:text-[25px] mq800:text-[20px] mq450:text-[16px] mq450:font-medium">
            Can help you make smart choice
          </p>
          <p className="mt-3 text-center font-poppins text-[16px] opacity-50 mq800:p-1 mq800:text-[13px] mq450:px-2 mq450:text-[9px] mq450:font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
        <div className="relative mt-10 flex flex-row flex-wrap items-center justify-center gap-8 mq750:flex-col">
          <Cart4
            h="Search for services"
            p="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <img src="images/line.png" className="mq750:hidden" alt="" />
          <Cart4
            h="Get your deal"
            p="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <img src="images/line.png" className="mq750:hidden" alt="" />
          <Cart4
            h="Enjoy the service"
            p="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
        </div>
        <div className=" relative mt-8 flex flex-col">
          <img src={blueimg2} className="mq800:h-[200px] mq800:w-full" />
          <div className="absolute left-11 mq1500:mt-[10%] mq1500:w-[50%] mq750:left-0 mq750:mt-56 mq750:w-full ">
            <p className=" mt-8 text-[44px] font-semibold mq1500:mt-4 mq1050:text-[38px] mq800:text-center mq800:text-[24px] mq750:w-full">
              Lorem ispum is simply <br></br> dummy text
            </p>
            <p className="w-[70%] py-[2%] font-poppins text-[24px] font-normal opacity-50 mq1050:text-[15px] mq800:text-center mq800:text-[14px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <div className="mq800:flex mq800:justify-center">
              <Buttons />
            </div>
          </div>
        </div>
        <div className="mt-96 mq1325:mt-96">
          <CitygelLogo />{" "}
        </div>
      </div>
    </div>
  );
};

export default Category;
