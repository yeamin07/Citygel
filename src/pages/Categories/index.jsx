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
          className="relative top-[90px]  z-[0] w-1/5 flex-grow"
        />
        <img
          src={bluecurve}
          className="left-0 top-0 z-[2] h-[450px] w-5/6 flex-grow-0 sm:h-[540px] mq500:mt-[20px] mq500:w-[120%]"
        />
      </div>

      <div className="container relative mx-auto  -mt-[50%] px-5 text-center sm:-mt-[30%] lg:-mt-[35%] lg:text-left">
        <div className="flex flex-col-reverse items-center lg:flex-row ">
          <div className=" lg:w-[62%] lg:pr-20">
            <div className=" font-bold ">
              <p className=" text-[35px] sm:text-[55px] md:text-[70px] ">
                Find Anything
                <br />
                Around You
              </p>
            </div>
            <div className=" font-poppins text-[15px] font-normal opacity-70 xl:w-[70%] ">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
            </div>
            <div className=" mt-8  grid grid-cols-2 gap-y-5 gap-x-5 sm:grid-cols-4 ">
              <Categorycart image={properties} text="Properties" />
              <Categorycart image={motor} text="Motor" />
              <Categorycart image={electronics} text="Electronics" />
              <Categorycart image={furniture} text="Furniture" />
              <Categorycart image={services} text="Services" />
              <Categorycart image={jobs} text="Jobs" />
              <Categorycart image={services} text="Category 7" />
              <Categorycart image={services} text="Category 8" />
            </div>
          </div>
          <div className=" z-[30] lg:w-[37%] mq500:mt-[-120px]">
            <img src={sittingman} className=" w-[85%] sm:scale-110" />
          </div>
        </div>

        <div className=" my-16 text-center sm:mt-11 sm:text-left">
          <p className="font-poppins text-[25px] sm:text-[39px] ">
            Browse By SubCategories:
          </p>
        </div>

        <div className="mx-auto flex  items-center justify-center">
          <div className=" grid w-full grid-cols-2 gap-12 gap-y-12 lg:grid-cols-3 xl:grid-cols-4  ">
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
          <p className=" font-poppins text-[40px] font-bold sm:text-[60px] ">
            How it Works
          </p>
          <p className="font-poppins text-[20px] font-medium sm:text-[32px]">
            Can help you make smart choice
          </p>
          <p className="mx-auto mt-3 text-center font-poppins opacity-50 sm:text-[18px] lg:w-[43%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
        <div className="relative my-10  flex flex-col items-center justify-center gap-7 lg:flex-row lg:gap-3 xl:gap-7 2xl:px-20">
          <Cart4
            h="Search for services"
            p="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <img
            src="images/line.png"
            className="hidden w-16 lg:block xl:w-auto"
            alt=""
          />
          <Cart4
            h="Get your deal"
            p="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <img
            src="images/line.png"
            className="hidden w-16 lg:block xl:w-auto"
            alt=""
          />
          <Cart4
            h="Enjoy the service"
            p="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
        </div>
      </div>

      <div className=" relative mt-16 w-full bg-[#fff] py-5">
        <img
          src={blueimg2}
          className="absolute top-0 right-0 z-[2] w-full lg:h-[93%] lg:w-auto"
        />
        <div className="container relative z-[5] mx-auto px-5 py-6">
          <div className="flex  justify-center lg:hidden">
            <img src={sittingman} className=" h-72 sm:h-96" />
          </div>

          <div className=" w-full text-center lg:w-[65%] lg:text-left 2xl:w-1/2">
            <p className=" text-[32px] font-semibold sm:text-[44px] sm:leading-[3.5rem] lg:pr-20 mq450:font-medium">
              Lorem ispum is simply dummy text
            </p>
            <p className=" mb-5 py-[2%] font-poppins text-sm font-normal opacity-50 sm:text-[22px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <div className="mx-auto w-60 lg:mx-0">
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
