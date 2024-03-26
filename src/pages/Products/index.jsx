import { Helmet } from "react-helmet";
import ProductCart from "pages/Products/ProductCart";
import Header1 from "components/Header1";
import React, { useEffect, useState } from "react";
import DropdownButton from "components/Dropdown";
import DropdownButton2 from "components/Dropdown/index2";
import useAxios from "config/api/useAxios";
import axios from "axios";
import arrow from "../../assets/images/up-and-down-arrow.png";
// import "./products.css";
import { Slider } from "antd";
import Loading from "components/Loading/Loading";
import CitygelLogo from "components/Footer/CitygelLogo";
import Product from "./Product";

const Products = () => {
  const api = useAxios();
  const [allProduct, setAllProduct] = useState([]);
  const [filter, setFilter] = useState(false);
  const [checkedSubCategoryValue, setCheckedSubCategoryValue] = useState([]);
  const [checkedCategoryValue, setCheckedCategoryValue] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(false);
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
  const handleSubCategoryChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedSubCategoryValue((prev) => [...prev, value]);
    } else {
      setCheckedSubCategoryValue((prev) => {
        return [...prev.filter((check) => check !== value)];
      });
    }

    fetchData(
      checkedCategoryValue,
      checkedSubCategoryValue,
      priceRange,
      selectedCity,
    );
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedCategoryValue((prev) => [...prev, value]);
    } else {
      setCheckedCategoryValue((prev) => {
        return [...prev.filter((check) => check !== value)];
      });
    }

    fetchData(
      checkedCategoryValue,
      checkedSubCategoryValue,
      priceRange,
      selectedCity,
    );
  };

  const handleSliderChange = (value) => {
    setPriceRange(value);
    fetchData(
      checkedCategoryValue,
      checkedSubCategoryValue,
      value,
      selectedCity,
    );
  };

  // Handler for dropdown value change
  const handleDropdownChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
    fetchData(checkedCategoryValue, checkedSubCategoryValue, priceRange, value);
  };

  console.log(checkedSubCategoryValue);
  console.log(checkedCategoryValue);
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

  console.log(allProduct);

  return (
    <div>
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header1 />

      <div className="bg-[rgba(250, 250, 250, 1)] mx-auto min-h-screen w-[95%]">
        <div className="mx-auto mt-10 flex h-[345px] w-[100%]  justify-center bg-gray-200">
          <p className="pt-[12%] text-xl">AD</p>
        </div>

        <div className="mx-auto mx-auto flex w-[100%] flex-row gap-5 sm:flex-col  mq750:flex-col  mq450:flex-col">
          <div className="mx-auto w-[76%] sm:w-[100%] mq750:w-[100%] ">
            <div className="mt-16 flex w-auto flex-row">
              <DropdownButton text="Sort Default" />
              {/*This is Filter by section */}
              <div
                className="flex h-[50px] w-[150px] cursor-pointer  items-center justify-center gap-2 rounded-31xl border-[1px]
              border-solid border-black-900_87 p-4"
                onClick={() => setFilter(!filter)}
              >
                <img src={arrow} className="ml-3 h-[20px] w-[11px]" />
                <p className="mt-[0.5] font-poppins text-[14px] font-medium text-[#000000df]">
                  Filter By
                </p>
              </div>
            </div>

            {/*This is Filter Default section*/}
            {filter && (
              <div className=" mx-auto mt-5 w-[100%] sm:w-[100%] mq750:w-[100%] ">
                <div className="mr-4 flex h-[60px] w-[100%] flex-row space-x-2 rounded-t-[27px] border border-b-0 border-solid border-gray-300 pt-3">
                  <img
                    src={arrow}
                    alt=""
                    className="ml-5 mt-1 h-[20px] w-[11px]"
                  />
                  <p className="mt-[2px] w-[80%] text-[15px]">
                    Filter: Default
                  </p>
                </div>
                {/* <div className='w-[65%] h-[70px] border border-solid border-black-900_87 pt-3 mr-4 space relative'>
                            <p>categories</p>
                            <p>price</p>
                        </div>
                        <div className='w-[65%] h-[70px] rounded-b-2xl border border-solid border-black-900_87 pt-3 mr-4 relative'>
                            <p>subcategories</p>
                            <p>cities</p>
                        </div> */}
                <div
                  className="mr-4 grid h-[150px] max-h-[200px] w-[100%] grid-cols-2 grid-rows-2 rounded-b-[27px] 
                         border border-solid border-gray-300  mq450:h-[200px]"
                >
                  <p className="border border-solid border-gray-300 pl-2 font-medium">
                    Categories
                    <br />
                    <div className="space-x-1">
                      <input
                        onChange={handleCategoryChange}
                        id="checkbox1"
                        type="checkbox"
                        value={"electric"}
                        className="h-[13px] w-[13px] rounded border-[1px] border-solid
                            border-r-black-900_03 bg-white-A700"
                      />

                      <label
                        htmlFor="checkbox1"
                        className="relative mt-[-2px] flex-1 shrink-0 text-[14px] font-extralight capitalize"
                      >
                        Motor
                      </label>
                    </div>
                  </p>
                  <p className="border border-solid border-gray-300 pl-2 font-medium ">
                    Price
                    <br />
                    <div className="ml-3 w-[70%]">
                      <Slider
                        range
                        defaultValue={[0, 50]}
                        onChange={handleSliderChange}
                      />
                    </div>
                  </p>
                  <p className="h-[60%] items-stretch border-t border-r border-solid border-gray-300 pl-2 font-medium">
                    Subcategories <br />
                    <div className="mt-1 flex space-x-1">
                      <input
                        id="checkbox1"
                        type="checkbox"
                        className="h-[13px] w-[13px] rounded border-[1px] border-solid
                            border-r-black-900_03 bg-white-A700"
                        value="computers"
                        onChange={handleSubCategoryChange}
                      />

                      <label
                        htmlFor="checkbox1"
                        className="relative mt-[-2px] flex-1 shrink-0 text-[14px] font-extralight capitalize"
                      >
                        Motor
                      </label>
                      {/*another one checkbox */}
                      <input
                        id="checkbox1"
                        type="checkbox"
                        className="h-[13px] w-[13px] rounded border-[1px] border-solid
                            border-r-black-900_03 bg-white-A700"
                        value="computers"
                        onChange={handleSubCategoryChange}
                      />

                      <label
                        htmlFor="checkbox1"
                        className="relative mt-[-2px] flex-1 shrink-0 text-[14px] font-extralight capitalize"
                      >
                        Motor 2
                      </label>
                    </div>
                  </p>
                  <p className="border-l border-t border-solid border-gray-300 pl-2 font-medium  ">
                    cities
                    <form>
                      <select
                        className="mt-1 h-[40px] w-[80%] rounded-[7px]
              border border-solid border-gray-400 pl-2 font-poppins text-[15px]"
                        onChange={handleDropdownChange}
                      >
                        <option value="" disabled selected hidden>
                          --Select--
                        </option>
                        <option>Hazaribagh</option>
                        <option>Dhanmondi</option>
                      </select>
                    </form>
                  </p>
                </div>
              </div>
            )}

            <div className="mx-auto mt-16 grid w-[95%] grid-cols-3 gap-3 sm:w-[100%] md:grid-cols-2 mq750:w-[100%] mq750:grid-cols-2 mq450:grid-cols-2">
              {/* components */}
              <Product allProduct={allProduct} loading={loading} />
            </div>
          </div>

          <div className="mx-auto mt-20 flex h-[1200] w-[20%] items-center justify-center bg-gray-200 sm:h-[110px] sm:w-[100%] mq750:h-[110px] mq750:w-[100%]">
            AD
          </div>
        </div>
      </div>

      <CitygelLogo />
    </div>
  );
};

export default Products;
