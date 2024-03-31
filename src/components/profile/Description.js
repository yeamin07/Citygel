
import RangeSliderParent from "./RangeSliderParent";
import ToggleParent from "./ToggleParent";
import Header1 from "components/Header1";
import CitygelLogo from "../Footer/CitygelLogo";
import ProductCart from "pages/Products/ProductCart";
import Product from "pages/Products/Product";
import { useState, useEffect } from "react";
import useAxios from "config/api/useAxios";
import Loading from "components/Loading/Loading";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import { FaArrowRightLong } from "react-icons/fa6";

const Description = () => {
  const [loading, setLoading] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const api = useAxios();

  {/**/ }

  const getAllProduct = async () => {
    setLoading(true);
    const product = await axios.get(
      "https://citygel-backend.onrender.com/api/v1/ads",
    );
    if (product.data) {
      setLoading(false);
      setAllProduct(product.data.data);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  const fetchData = (category, subcategories, priceRange, city) => {
    // Construct the query parameters
    let queryParams = [];
    if (category) {
      queryParams.push(`category=${category.join(",")}`);
    }
    if (subcategories.length > 0) {
      queryParams.push(`subcategories=${subcategories.join(",")}`);
    }
    if (priceRange) {
      queryParams.push(`minPrice=${priceRange[0]}`);
      queryParams.push(`maxPrice=${priceRange[1]}`);
    }
    if (city) {
      queryParams.push(`city=${city}`);
    }

    let apiUrl = "https://citygel-backend.onrender.com/api/v1/ads";
    if (queryParams.length > 0) {
      apiUrl += "?" + queryParams.join("&");
    }
    setLoading(true);
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the fetched data
        console.log("Fetched data:", response.data);
        setAllProduct(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };



  return (
    <div>
      <Header1/>
      <div className="w-full overflow-hidden">
        <main className="container mx-auto w-[99%] flex flex-col items-start justify-start pt-0 pb-[20px] px-3 sm:px-4 2xl:px-0">

            <div className=" flex flex-col sm:flex-row items-start justify-start sm:gap-[13px] 2xl:gap-[35px] md:gap-[16px] w-full lg:gap-[20px]">
            {/*~~~~~~~~~~~~~~~~~Description section~~~~~~~~~~~~~~~*/}
              <div className=" w-full sm:w-3/4 flex flex-col items-start justify-start gap-[30px] ">
                <div className="self-stretch h-[380px] xl:h-[680px] lg:h-[620px] md:h-[500px] sm:h-[400px]  relative">
                  <img
                    className="relative rounded-[20px] w-[100%] h-[380px] xl:h-[680px] lg:h-[620px] md:h-[500px] sm:h-[400px] mt-[20px] object-cover"
                    alt=""
                    src="/rectangle-15@2x.png"
                  />
                </div>
                {/*1st-Image next section */}
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] sm:gap-[12px] md:gap-[14px] lg:gap-[30px] max-w-full">
                  <div className="self-stretch flex sm:flex-row flex-col justify-start gap-[15px] sm:justify-between w-full ">

                    <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                      <h1 className="m-0 self-stretch relative text-inherit sm:leading-[30px] xl:leading-[42px] 2xl:leading-[50px] lg:leading-[38px] leading-[28px] md:leading-[34px] font-semibold font-inherit 2xl:text-[35px] xl:text-[32px] lg:text-[29px] 
                      md:text-[23px] sm:text-[19px] text-[19px]  text-black">
                        Dell Touch Screen - Core I7 16GB RAM 512GB
                      </h1>
                      <div className="relative 2xl:text-xl xl:text-[14px] md:text-[11.5px] text-[9px] sm:text-[10px] text-gray-1100 mq450:text-base">
                        Electronics . Computers
                      </div>
                    </div>
                    {/*~~~~~~~~~~~~~~~~~Yellow button section~~~~~~~~~~~~~~~~ */}
                    <div className="flex flex-row items-start justify-start xl:gap-[7px] 2xl:gap-[10px] lg:gap-[5px] sm:gap-[5px] gap-[6px] max-w-full text-[21px] sm:mt-[8px]">
                      <button className="text-white-A700 text-[8px] sm:text-[8px] md:text-[9.5px] lg:text-[11.4px] xl:text-[13.5px]  2xl:text-[17px]  relative rounded-3xs [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-center justify-center py-1.5 px-3.5 md:py-1.9 md:px-4.7 lg:px-5.5  sm:py-0.7 sm:px-2.5">
                        Premium</button>

                      <button className="text-white-A700 text-[8px] sm:text-[8px] md:text-[9.5px] lg:text-[11.4px] xl:text-[13.5px]  2xl:text-[17px] relative rounded-3xs [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start py-1.5 px-3.5 md:py-1.9 md:px-4.7 lg:px-5.5 sm:py-0.7 sm:px-2.5">
                        Premium</button>


                      <button className="text-white-A700 text-[8px] sm:text-[8px] md:text-[9.5px] lg:text-[11.4px] xl:text-[13.5px]  2xl:text-[17px] rounded-3xs [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start py-1.5 px-3.5 md:py-1.9 md:px-4.7 relative lg:px-5.5 sm:py-0.7 sm:px-2.5">
                        Premium</button>

                    </div>
                  </div>
                  {/*~~~~~~~~~~~~~~~Pricing part~~~~~~~~~~~~~ */}
                  <div className="self-stretch flex sm:flex-row flex-col items-start sm:items-center justify-between max-w-full  sm:gap-[11px] lg:gap-[15px] 2xl:gap-[20px] sm:container sm:mx-auto ">
                    <div className="2xl:text-[35px] xl:text-[32px] lg:text-[29px]  md:text-[23px] sm:text-[19px] text-[19px]   relative leading-[35px] font-semibold inline-block shrink-0 whitespace-nowrap max-w-full">
                      AED 980
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0  ">
                      <div className="flex flex-row items-start gap-[8px] justify-start sm:gap-[8px] md:gap-[9px] lg:gap-[13px]">
                        <div className=" flex flex-col items-start justify-start px-0 pb-0 box-border">
                          <img
                            className="w-[18.5px] sm:w-[20px] sm:h-[21px] lg:w-[24px] lg:h-[25px] xl:w-[28px] xl:h-[29px]  h-[20px] relative"
                            loading="lazy"
                            alt=""
                            src="/vuesaxboldlocation.svg"
                          />
                        </div>
                        <h3 className="m-0 relative text-inherit font-normal font-inherit text-black-900_87 sm:text-[15px] text-[14px] md:text-[18px] lg:text-[22px] xl:text-[25px]">
                          City Name
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full text-[10px] sm:text-[13px] md:text-[12px] lg:text-[14.5px] xl:text-[16.5px] 2xl:text-[19.5px]  text-gray-500">
                  <div className="flex-1 relative leading-[14px] sm:leading-[18px] md:leading-[22px] lg:leading-[26px]  2xl:leading-[32px] inline-block max-w-full">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting Lorem Ipsum is simply dummy text of the printing
                    and typesetting Lorem Ipsum is simply dummy text of the
                    printing and typesetting Lorem Ipsum is simply dummy text of
                    the printing and typesetting ind...Lorem Ipsum is simply
                    dummy text of the printing and typesetting Lorem Ipsum is
                    simply dummy text of the printing and typesetting
                    ind...Lorem Ipsum is simply dummy text of the printing and
                    typesetting Lorem Ipsum is simply dummy text of the printing
                    and typesetting ind...Lorem Ipsum is simply dummy text of
                    the printing and typesetting Lorem Ipsum is simply dummy
                    text of the printing and typesetting ind...Lorem Ipsum is
                    simply dummy text of the printing and typesetting Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    ind...
                  </div>
                </div>

                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[21px] box-border gap-[20px] max-w-full">
                  <div className="self-stretch h-2.5 flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full">
                    <div className="h-0.5 flex-1 relative box-border opacity-[0.2] max-w-full border-t-[2px] border-solid border-black" />
                  </div>
                  <h1 className="m-0 relative text-inherit leading-[25px] font-semibold font-inherit 2xl:text-[35px] xl:text-[32px] lg:text-[29px]  md:text-[23px] sm:text-[19px] text-[19px]">
                    Get Direction:
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full  text-gray-1200">
                    <h3 className="m-0 text-gray-500 text-[10px] sm:text-[13px] md:text-[12px] lg:text-[14.5px] xl:text-[16.5px] 2xl:text-[19.5px] flex-1 relative text-inherit  leading-[14px] sm:leading-[18px] md:leading-[22px] lg:leading-[26px]  2xl:leading-[32px] font-normal font-inherit inline-block max-w-full ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting Lorem Ipsum is simply dummy:
                    </h3>
                  </div>
                  {/*~~~~~~~~The blue get direction~~~~~~~*/}
                  <div className="flex flex-row items-start justify-start gap-[3px] sm:gap-[5px] md:gap-[7px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] ">
                    <div className="relative underline underline-offset-1 decoration-solid decoration-cyan-400 text-transparent !bg-clip-text [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0px_0px_3px_rgba(0,_0,_0,_0.1)]">
                      Get Direction
                    </div>
                    <div className="text-cyan-400 mt-1">
                    <FaArrowRightLong />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full ">
                  <div className="self-stretch h-0.5 relative box-border opacity-[0.2] border-t-[2px] border-solid border-black" />
                  <h1 className="m-0 relative text-inherit  font-semibold md:text-[23px] sm:text-[19px] text-[19px]  text-black 2xl:text-[35px] xl:text-[32px] lg:text-[29px] font-inherit inline-block max-w-full mb-[23px]">
                    Recommended Products:
                  </h1>



                  {/* <Swiper
                    breakpoints={{
                      340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                      },
                    }}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="max-w-[90%]"
                  >
                    <SwiperSlide>
                    <Product allProduct={allProduct} loading={loading}/>
                    </SwiperSlide>
                  </Swiper> */}




                </div>
              </div>
              <div className="hidden h-auto sm:w-1/4 sm:flex flex-col items-start justify-start gap-[44px]  text-center mt-6">
                {/*~~~~~~~~~~~For details section~~~~~~~~~~~~*/}
                <div className="self-stretch gray_50_02_red_A400_border rounded-xl bg-white-A700 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] box-border flex flex-col items-start justify-start pt-5 px-2 pb-2.5 gap-[25px] sm:gap-[18px] w-full border-[1.5px] border-solid border-gray-100 ">
                  <div className="flex items-center justify-center sm:box-border w-[100%]">
                    <h4 className="m-0 xl:text-[1.5rem] lg:text-[1.27rem] sm:text-[0.8rem] md:text-[1rem] font-extralight   relative  font-inherit  whitespace-nowrap z-[1] text-black">
                      For more details
                    </h4>
                  </div>

                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px] w-full">
                    <RangeSliderParent
                      vuesaxboldsms="/vuesaxboldsms.svg"
                      enquireNow="Enquire Now"
                      className=""
                    />
                    <RangeSliderParent
                      vuesaxboldsms="/vuesaxboldcall.svg"
                      enquireNow="Contact Us"
                      className=""
                    />
                  </div>
                </div>


                <div className="hidden  self-stretch bg-gainsboro-100 sm:flex flex-row items-start justify-center py-[633px] px-5 box-border max-w-full text-left text-31xl lg:pt-[411px] lg:pb-[411px] lg:box-border sm:pt-[267px] sm:pb-[267px] ">
                  <div className="h-[1941px] w-full relative bg-gainsboro-100 hidden max-w-full" />
                  <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[70px] z-[1] mq825:text-21xl mq450:text-11xl">
                    AD
                  </h1>
                </div>
              </div>
            </div>
            {/* <ToggleParent /> */}


          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="w-[95%] h-[60%] flex flex-row justify-start mb-[50px]"
          >
            <div className="grid grid-cols-5 gap-2 ">
              {allProduct.map((item) => (
                <SwiperSlide>
                  <div className="mb-[45px]">
                    <ProductCart {...{ item }} />
                  </div>

                </SwiperSlide>

              ))}
            </div>
          </Swiper>

          <div className="gray_50_02_red_A400_border sm:hidden container mx-auto  rounded-xl bg-white-A700 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] box-border flex flex-col items-start justify-start pt-5 px-2 pb-2.5 gap-[25px]  border-[1.5px] border-solid border-gray-100">
            <div className="flex items-center justify-center box-border w-[100%]">
              <h4 className="m-0 text-[1.1rem]  font-medium  relative  font-inherit flex items-center justify-center whitespace-nowrap z-[1]  text-black">
                For more details
              </h4>
            </div>

            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
              <RangeSliderParent
                vuesaxboldsms="/vuesaxboldsms.svg"
                enquireNow="Enquire Now"
                className="text-[18px] "
              />
              <RangeSliderParent
                vuesaxboldsms="/vuesaxboldcall.svg"
                enquireNow="Contact Us"
                className="text-[18px]"
              />
            </div>
          </div>

        </main>

      </div>
      <CitygelLogo />
    </div>
  );
};

export default Description;
