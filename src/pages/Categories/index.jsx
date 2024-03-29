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
import CitygelLogo from "components/Footer/CitygelLogo";

const Category = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="relative z-[100]">
        <Header1 />{" "}
      </div>

      <div className="mt-[-90px] flex h-auto overflow-hidden">
        <img
          src={yellowcurve}
          className="relative top-[90px]  w-1/5 flex-grow "
        />
        <img
          src={bluecurve}
          className="left-0 top-0 sm:h-[540px] h-[450px] w-5/6 flex-grow-0 "
        />
        <img
          src={sittingman}
          className=" absolute 2xl:right-32 sm:right-14 right-[20vw]  xl:top-48 top-32  xl:h-[660px] sm:h-[420px] h-[320px] xl:w-[720px] sm:w-[520px] "
        />
      </div>

      <div className="container mx-auto relative  lg:-mt-[30%] mt-10 px-5 text-center lg:text-left">
        <div className=" font-bold ">
          <p className="lg:w-[60%] md:text-[70px] text-[35px] sm:text-[55px] ">
            Find Anything
            <br />
            Around You
          </p>
        </div>
        <div className=" xl:w-[35%] lg:w-[45%] font-poppins text-[15px] font-normal opacity-70 ">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
        <div className=" mt-8  2xl:w-[40%] xl:w-[50%] lg:w-[70%] grid sm:grid-cols-4 gap-y-5 gap-x-5 grid-cols-2 ">
          <Categorycart image={properties} text="Properties" />
          <Categorycart image={motor} text="Motor" />
          <Categorycart image={electronics} text="Electronics" />
          <Categorycart image={furniture} text="Furniture" />
          <Categorycart image={services} text="Services" />
          <Categorycart image={jobs} text="Jobs" />
          <Categorycart image={services} text="Category 7" />
          <Categorycart image={services} text="Category 8" />
        </div>
        <div className=" sm:mt-11 my-16 text-center sm:text-left">
          <p className="font-poppins sm:text-[39px] text-[25px] ">
            Browse By SubCategories:
          </p>
        </div>

        <div className="mx-auto flex  items-center justify-center">
          <div className=" grid w-full xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-12 gap-y-12  ">
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
            <div>
              <BigCart text="Services" image={services} />
              <SmallCart image={five} text="Electronics & Repair" />
              <SmallCart image={five} text="Health & beauty" />
              <SmallCart image={five} text="Renovation & re..." />
              <Buttons />
            </div>
            <div>
              <BigCart text="Jobs" image={jobs} />
              <SmallCart image={five} text="Hospitality" />
              <SmallCart image={five} text="Travel & Tourism" />
              <SmallCart image={five} text="Government" />
              <Buttons />
            </div>

            <div>
              <BigCart text="Category 7" image={services} />
              <SmallCart image={five} text="SubCategory 1" />
              <SmallCart image={five} text="SubCategory 2" />
              <SmallCart image={five} text="SubCategory 3" />
              <Buttons />
            </div>

            <div>
              <BigCart text="Category 8" image={services} />
              <SmallCart image={five} text="SubCategory 1" />
              <SmallCart image={five} text="SubCategory 2" />
              <SmallCart image={five} text="SubCategory 3" />
              <Buttons />
            </div>
          </div>
        </div>

        {/* End category */}

        <div className="mt-24 flex w-full  flex-col items-center justify-center">
          <p className=" font-poppins sm:text-[60px] text-[40px] font-bold ">
            How it Works
          </p>
          <p className="font-poppins font-medium sm:text-[32px] text-[20px]">
            Can help you make smart choice
          </p>
          <p className="mt-3 text-center font-poppins sm:text-[18px] opacity-50 lg:w-[43%] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
        <div className="relative my-10  flex lg:flex-row flex-col items-center justify-center xl:gap-7 lg:gap-3 gap-7 2xl:px-20">
          <Cart4
            h="Search for services"
            p="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <img src="images/line.png" className="xl:w-auto w-16 lg:block hidden" alt="" />
          <Cart4
            h="Get your deal"
            p="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <img src="images/line.png" className="xl:w-auto w-16 lg:block hidden" alt="" />
          <Cart4
            h="Enjoy the service"
            p="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
        </div>
      </div>

      <div className=" w-full relative bg-[#fff] py-5 mt-16">
        <img src={blueimg2} className="lg:h-[93%] w-full lg:w-auto absolute top-0 right-0 z-[2]" />
        <div className="container mx-auto px-5 z-[5] relative py-6">
          <div className="flex  justify-center lg:hidden">
            <img
              src={sittingman}
              className=" sm:h-96 h-72"
            />
          </div>

          <div className=" 2xl:w-1/2 lg:w-[65%] w-full text-center lg:text-left">
            <p className=" sm:text-[44px] text-[32px] font-semibold lg:pr-20 sm:leading-[3.5rem]">
              Lorem ispum is simply dummy text
            </p>
            <p className=" py-[2%] font-poppins sm:text-[22px] text-sm font-normal opacity-50 mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <div className="w-60 mx-auto lg:mx-0">
              <Buttons />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36 ">
        <CitygelLogo />{" "}
      </div>


    </div>
  );
};

export default Category;
