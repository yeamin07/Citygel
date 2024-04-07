import RangeSliderParent from "../../components/profile/RangeSliderParent";
import ToggleParent from "../../components/profile/ToggleParent";
import Header1 from "components/Header1";
import CitygelLogo from "../../components/Footer/CitygelLogo";
import ProductCart from "pages/Products/ProductCart";
import Product from "pages/Products/Product";
import { useState, useEffect } from "react";
import useAxios from "config/api/useAxios";
import Loading from "components/Loading/Loading";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FaArrowRightLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ProductSlider from "./ProductCart/ProductSlider";
import ProductDetailsSlider from "./ProductDetailsSlider";

const Description = () => {
  const [loading, setLoading] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const api = useAxios();
  // const
  // {/**/ }
  const { id } = useParams();
  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const product = await axios.get(
        `https://citygel-backend.onrender.com/api/v1/ads/${id}/`,
      );
      console.log(product);
      if (product.data) {
        setLoading(false);
        console.log(product.data);
        setSingleProduct(product.data.data);
        // setAllProduct(product.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllProduct = async () => {
    setLoading(true);
    try {
      const product = await axios.get(
        "https://citygel-backend.onrender.com/api/v1/ads",
      );
      if (product.data) {
        setLoading(false);
        setAllProduct(product.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    getAllProduct();
  }, []);
  console.log(singleProduct);
  return (
    <div>
      <Header1 bg={true} />
      <div className="w-full overflow-hidden">
        <main className="container mx-auto flex w-[99%] flex-col items-start justify-start px-3 pt-0 pb-[20px] sm:px-4 2xl:px-0">
          {!loading ? (
            <div className=" flex w-full flex-col items-start justify-start sm:flex-row sm:gap-[13px] md:gap-[16px] lg:gap-[20px] 2xl:gap-[35px]">
              {/*~~~~~~~~~~~~~~~~~Description section~~~~~~~~~~~~~~~*/}
              <div className=" flex w-full flex-col items-start justify-start gap-[30px] sm:w-3/4 ">
                <div className="relative h-[380px] self-stretch sm:h-[400px] md:h-[500px] lg:h-[620px]  xl:h-[680px]">
                  {/* <img
                  className="relative mt-[20px] h-[380px] w-[100%] rounded-[20px] object-cover sm:h-[400px] md:h-[500px] lg:h-[620px] xl:h-[680px]"
                  alt=""
                  src="/rectangle-15@2x.png"
                /> */}
                  <ProductDetailsSlider
                    mainImage={singleProduct.mainImage || ""}
                    moreImages={singleProduct.moreImages || [""]}
                  />
                </div>
                {/*1st-Image next section */}
                <div className="flex max-w-full flex-col items-start justify-start gap-[10px] self-stretch sm:gap-[12px] md:gap-[14px] lg:gap-[30px]">
                  <div className="flex w-full flex-col justify-start gap-[15px] self-stretch sm:flex-row sm:justify-between ">
                    <div className="flex flex-1 flex-col items-start justify-start gap-[10px]">
                      <h1
                        className="font-inherit text-black relative m-0 self-stretch text-[19px] font-semibold leading-[28px] text-inherit sm:text-[19px] sm:leading-[30px] md:text-[23px] md:leading-[34px] lg:text-[29px] lg:leading-[38px] 
                      xl:text-[32px] xl:leading-[42px] 2xl:text-[35px]  2xl:leading-[50px]"
                      >
                        {singleProduct?.title}
                      </h1>
                      <div className="text-gray-1100 relative text-[9px] sm:text-[10px] md:text-[11.5px] xl:text-[14px] 2xl:text-xl mq450:text-base">
                        {singleProduct?.category?.name} .
                        {singleProduct?.subcategory?.name}
                      </div>
                    </div>
                    {/*~~~~~~~~~~~~~~~~~Yellow button section~~~~~~~~~~~~~~~~ */}
                    <div className="flex max-w-full flex-row items-start justify-start gap-[6px] text-[21px] sm:mt-[8px] sm:gap-[5px] lg:gap-[5px] xl:gap-[7px] 2xl:gap-[10px]">
                      <button className="md:py-1.9 md:px-4.7 lg:px-5.5 sm:py-0.7 relative flex  flex-row  items-center justify-center rounded-3xs py-1.5 px-3.5 text-[8px] text-white-A700 [background:linear-gradient(90deg,_#fcb100,_#ed893e)] sm:px-2.5 sm:text-[8px] md:text-[9.5px] lg:text-[11.4px]  xl:text-[13.5px] 2xl:text-[17px]">
                        Premium
                      </button>

                      <button className="md:py-1.9 md:px-4.7 lg:px-5.5 sm:py-0.7 relative flex  flex-row items-start justify-start rounded-3xs py-1.5 px-3.5 text-[8px] text-white-A700 [background:linear-gradient(90deg,_#fcb100,_#ed893e)] sm:px-2.5 sm:text-[8px] md:text-[9.5px] lg:text-[11.4px] xl:text-[13.5px] 2xl:text-[17px]">
                        Premium
                      </button>

                      <button className="md:py-1.9 md:px-4.7 lg:px-5.5 sm:py-0.7 relative flex  flex-row items-start justify-start rounded-3xs py-1.5 px-3.5 text-[8px] text-white-A700 [background:linear-gradient(90deg,_#fcb100,_#ed893e)] sm:px-2.5 sm:text-[8px] md:text-[9.5px] lg:text-[11.4px] xl:text-[13.5px] 2xl:text-[17px]">
                        Premium
                      </button>
                    </div>
                  </div>
                  {/*~~~~~~~~~~~~~~~Pricing part~~~~~~~~~~~~~ */}
                  <div className="flex max-w-full flex-col items-start justify-between self-stretch sm:container sm:mx-auto  sm:flex-row sm:items-center sm:gap-[11px] lg:gap-[15px] 2xl:gap-[20px] ">
                    <div className="relative inline-block max-w-full  shrink-0 whitespace-nowrap text-[19px]   font-semibold leading-[35px] sm:text-[19px] md:text-[23px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px]">
                      AED {singleProduct.price}
                    </div>
                    <div className="flex flex-col items-start justify-start px-0 pt-[5px] pb-0  ">
                      <div className="flex flex-row items-start justify-start gap-[8px] sm:gap-[8px] md:gap-[9px] lg:gap-[13px]">
                        <div className=" box-border flex flex-col items-start justify-start px-0 pb-0">
                          <img
                            className="relative h-[20px] w-[18.5px] sm:h-[21px] sm:w-[20px] lg:h-[25px] lg:w-[24px]  xl:h-[29px] xl:w-[28px]"
                            loading="lazy"
                            alt=""
                            src="/vuesaxboldlocation.svg"
                          />
                        </div>
                        <h3 className="font-inherit relative m-0 text-[14px] font-normal text-inherit text-black-900_87 sm:text-[15px] md:text-[18px] lg:text-[22px] xl:text-[25px]">
                          {singleProduct.city}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pt-0 pb-2.5 text-[10px] text-gray-500 sm:text-[13px] md:text-[12px] lg:text-[14.5px] xl:text-[16.5px]  2xl:text-[19.5px]">
                  <div className="relative inline-block max-w-full flex-1 leading-[14px] sm:leading-[18px]  md:leading-[22px] lg:leading-[26px] 2xl:leading-[32px]">
                    {singleProduct.description}
                  </div>
                </div>

                <div className="box-border flex max-w-full flex-col items-start justify-start gap-[20px] self-stretch px-0 pt-0 pb-[21px]">
                  <div className="box-border flex h-2.5 max-w-full flex-row items-start justify-start self-stretch px-0 pt-0 pb-2.5">
                    <div className="border-black relative box-border h-0.5 max-w-full flex-1 border-t-[2px] border-solid opacity-[0.2]" />
                  </div>
                  <h1 className="font-inherit relative m-0 text-[19px] font-semibold leading-[25px] text-inherit sm:text-[19px] md:text-[23px]  lg:text-[29px] xl:text-[32px] 2xl:text-[35px]">
                    Get Direction:
                  </h1>
                  <div className="text-gray-1200 box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pt-0  pb-[3px]">
                    <h3 className="font-inherit relative m-0 inline-block max-w-full flex-1 text-[10px] font-normal leading-[14px] text-gray-500 text-inherit  sm:text-[13px] sm:leading-[18px] md:text-[12px] md:leading-[22px]  lg:text-[14.5px] lg:leading-[26px] xl:text-[16.5px] 2xl:text-[19.5px] 2xl:leading-[32px] ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting Lorem Ipsum is simply dummy:
                    </h3>
                  </div>
                  {/*~~~~~~~~The blue get direction~~~~~~~*/}
                  <div className="flex flex-row items-start justify-start gap-[3px] text-[14px] sm:gap-[5px] sm:text-[16px] md:gap-[7px] md:text-[18px] lg:text-[20px] xl:text-[23px] ">
                    <div className="relative !bg-clip-text text-transparent underline decoration-cyan-400 decoration-solid underline-offset-1 [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0px_0px_3px_rgba(0,_0,_0,_0.1)]">
                      Get Direction
                    </div>
                    <div className="mt-1 text-cyan-400">
                      <FaArrowRightLong />
                    </div>
                  </div>
                </div>
                <div className="flex max-w-full flex-col items-start justify-start gap-[44px] self-stretch ">
                  <div className="border-black relative box-border h-0.5 self-stretch border-t-[2px] border-solid opacity-[0.2]" />
                  <h1 className="text-black font-inherit relative  m-0 mb-[23px] inline-block max-w-full  text-[19px] font-semibold text-inherit sm:text-[19px] md:text-[23px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px]">
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
              <div className="mt-6 hidden h-auto flex-col items-start justify-start gap-[44px] text-center  sm:flex sm:w-1/4">
                {/*~~~~~~~~~~~For details section~~~~~~~~~~~~*/}
                <div className="gray_50_02_red_A400_border box-border flex w-full flex-col items-start justify-start gap-[25px] self-stretch rounded-xl border-[1.5px] border-solid border-gray-100 bg-white-A700 px-2 pt-5 pb-2.5 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] sm:gap-[18px] ">
                  <div className="flex w-[100%] items-center justify-center sm:box-border">
                    <h4 className="font-inherit text-black relative z-[1] m-0 whitespace-nowrap   font-extralight  sm:text-[0.8rem]  md:text-[1rem] lg:text-[1.27rem] xl:text-[1.5rem]">
                      For more details
                    </h4>
                  </div>

                  <div className="flex w-full flex-col items-start justify-start gap-[10px] self-stretch">
                    <RangeSliderParent
                      emailLink={singleProduct?.email}
                      vuesaxboldsms="/vuesaxboldsms.svg"
                      enquireNow="Enquire Now"
                      className=""
                    />
                    <RangeSliderParent
                      phoneLink={singleProduct?.seller?.phoneNumber}
                      vuesaxboldsms="/vuesaxboldcall.svg"
                      enquireNow="Contact Us"
                      className=""
                    />
                  </div>
                </div>

                <div className="box-border  hidden max-w-full flex-row items-start justify-center self-stretch bg-gainsboro-100 py-[633px] px-5 text-left text-31xl sm:flex sm:pt-[267px] sm:pb-[267px] lg:box-border lg:pt-[411px] lg:pb-[411px] ">
                  <div className="relative hidden h-[1941px] w-full max-w-full bg-gainsboro-100" />
                  <h1 className="font-inherit relative z-[1] m-0 inline-block min-w-[70px] font-normal text-inherit mq825:text-21xl mq450:text-11xl">
                    AD
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <Loading />
          )}
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
            className="mb-[50px] flex h-[60%] w-[95%] flex-row justify-start"
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

          <div className="gray_50_02_red_A400_border container mx-auto box-border  flex flex-col items-start justify-start gap-[25px] rounded-xl border-[1.5px] border-solid border-gray-100 bg-white-A700 px-2 pt-5  pb-2.5 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] sm:hidden">
            <div className="box-border flex w-[100%] items-center justify-center">
              <h4 className="font-inherit text-black  relative  z-[1]  m-0 flex items-center justify-center whitespace-nowrap text-[1.1rem]  font-medium">
                For more details
              </h4>
            </div>

            <div className="flex max-w-full flex-col items-start justify-start gap-[10px] self-stretch">
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
