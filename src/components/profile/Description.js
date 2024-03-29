
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
      <Header1 className="flex flex-col justify-center items-center w-full container mx-auto" />
      <div className="w-full  overflow-hidden flex flex-col items-end justify-start gap-[30px] ">
        <main className="w-[1830px] flex flex-col items-start justify-start pt-0 pb-[30px] pr-0 pl-5 box-border gap-[60px] max-w-full mq825:gap-[30px_60px]">
          <section className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full text-left text-25xl text-black-900_87 font-poppins mq825:gap-[25px_50px]">
            <div className=" flex flex-row mq500:flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[39.69999999999982px] max-w-full mq825:gap-[20px]">
              <div className="flex-1 w-[80%] mq500:w-[100%] flex flex-col items-start justify-start gap-[30px] max-w-full lg:min-w-full">
                <div className="self-stretch h-[760px] mq500:h-[420px] relative">
                  <img
                    className="relative rounded-[20px] w-[100%] h-[760px] mt-[20px] mq500:h-[400px] object-cover"
                    alt=""
                    src="/rectangle-15@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start mq500:gap-[20px] gap-[53px] max-w-full mq1050:flex-wrap mq825:gap-[53px_26px] mq500:flex-col">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[537px] max-w-full mq825:min-w-full">
                      <h1 className="m-0 self-stretch relative text-inherit leading-[50px] font-semibold font-inherit mq825:text-16xl mq825:leading-[40px] mq450:text-7xl mq450:leading-[30px]">
                        Dell Touch Screen - Core I7 16GB RAM 512GB
                      </h1>
                      <div className="relative text-xl text-gray-1100 mq450:text-base">
                        Electronics . Computers
                      </div>
                    </div>
                    {/*~~~~~~~~~~~~~~~~~Yellow button section~~~~~~~~~~~~~~~~ */}
                    <div className="flex flex-row items-start justify-start gap-[10px] max-w-full text-[21px] mq500:text-[15px] text-white mq450:flex-wrap">
                      <button className=" text-[21px] mq500:text-[13px] relative rounded-3xs [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start mq500:py-1.5 mq500:px-5 py-3 px-7">
                        Premium</button>

                      <button className="text-[21px] mq500:text-[13px] relative rounded-3xs [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start mq500:py-1.5 mq500:px-5 py-3 px-7">
                        Premium</button>


                      <button className=" text-[21px] mq500:text-[13px] rounded-3xs [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start mq500:py-1.5 mq500:px-5 py-3 px-7 relative">
                        Premium</button>

                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq750:gap-[10px] mq500:flex-wrap">
                    <div className="w-[375px] mq750:w-[350px] mq450:w-[340px] relative leading-[50px] font-semibold inline-block shrink-0 whitespace-nowrap max-w-full mq450:text-[24px] mq750:text-[28px] mq825:text-16xl mq825:leading-[40px] mq450:leading-[30px]">
                      AED 980
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-7xl text-gray-1100">
                      <div className="flex flex-row items-start justify-start gap-[13px]">
                        <div className="h-[35.2px] flex flex-col items-start justify-start pt-[3.899999999999636px] px-0 pb-0 box-border">
                          <img
                            className="w-[31.3px] mq500:w-[27px] mq500:h-[26px] h-[31.3px] relative"
                            loading="lazy"
                            alt=""
                            src="/vuesaxboldlocation.svg"
                          />
                        </div>
                        <h3 className="m-0 relative text-inherit font-normal font-inherit mq750:text-[22px] mq500:text-[22px] mq350:text-[19px]">
                          City Name
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full text-3xl text-gray-1200">
                  <div className="flex-1 relative leading-[35px] inline-block max-w-full mq450:text-lg mq450:leading-[28px]">
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
                  <h1 className="m-0 relative text-inherit leading-[50px] font-semibold font-inherit mq825:text-16xl mq825:leading-[40px] mq450:text-7xl mq450:leading-[30px]">
                    Get Direction:
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full text-6xl text-gray-1200">
                    <h3 className="m-0 flex-1 relative text-inherit leading-[35px] font-normal font-inherit inline-block max-w-full mq450:text-xl mq450:leading-[28px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting Lorem Ipsum is simply dummy:
                    </h3>
                  </div>
                  <div className="flex flex-row items-end justify-start gap-[10px] text-5xl">
                    <div className="relative [text-decoration:underline] text-transparent !bg-clip-text [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0px_0px_3px_rgba(0,_0,_0,_0.1)] mq450:text-lgi">
                      Get Direction
                    </div>
                    <div className="h-[15px] flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border">
                      <div className="w-[18px] h-[20.7px] relative rounded-xl flex items-center justify-center">
                        <img
                          className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.444)]"
                          loading="lazy"
                          alt=""
                          src="/line-37.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full mq825:gap-[22px_44px]">
                  <div className="self-stretch h-0.5 relative box-border opacity-[0.2] border-t-[2px] border-solid border-black" />
                  <h1 className="m-0 relative text-inherit leading-[50px] font-semibold font-inherit inline-block max-w-full mq825:text-16xl mq825:leading-[40px] mq450:text-7xl mq450:leading-[30px]">
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
              <div className=" w-[20%] hidden  mt-10 sm:flex flex-col items-start justify-start gap-[44px] max-w-full text-center">
                {/*~~~~~~~~~~~For details section~~~~~~~~~~~~*/}
                <div className="self-stretch rounded-xl bg-white-A700 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] box-border flex flex-col items-start justify-start pt-5 px-2 pb-2.5 gap-[25px] max-w-full border-[1.5px] border-solid border-gray-100">
                  <div className="flex items-center justify-center sm:box-border w-[100%]">
                    <h4 className="m-0 xl:text-[1.3rem] lg:text-[1.1rem]  font-extralight sm:text-[28px]  relative  font-inherit flex items-center justify-center whitespace-nowrap z-[1]  text-black-900_87">
                      For more details
                    </h4>
                  </div>

                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
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
                  <div className="h-[1341px] w-[395px] relative bg-gainsboro-100 hidden max-w-full" />
                  <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[70px] z-[1] mq825:text-21xl mq450:text-11xl">
                    AD
                  </h1>
                </div>
              </div>
            </div>
            {/* <ToggleParent /> */}

          </section>
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

          <div className="sm:hidden container mx-auto  rounded-xl bg-white-A700 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] box-border flex flex-col items-start justify-start pt-5 px-2 pb-2.5 gap-[25px] max-w-[95%] border-[1.5px] border-solid border-gray-100">
            <div className="flex items-center justify-center box-border w-[100%]">
              <h4 className="m-0 text-[1.3rem] :text-[1.1rem]  font-extralight lg:text-[20px]  relative  font-inherit flex items-center justify-center whitespace-nowrap z-[1] text-[27px] text-black-900_87">
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
