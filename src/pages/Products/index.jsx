import { Helmet } from "react-helmet";
import ProductCart from "pages/Products/ProductCart";
import Header1 from "components/Header1";
import React, { useEffect, useState } from "react";
import DropdownButton from "components/Dropdown";
import DropdownButton2 from "components/Dropdown/index2";
import Footer from "components/Footer";
import useAxios from "config/api/useAxios";
import axios from "axios";
import arrow from "../../assets/images/up-and-down-arrow.png";
// import "./products.css";
import { Slider } from "antd";
import Loading from "components/Loading/Loading";

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
    const product = await axios.get("http://localhost:5000/api/v1/ads");
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

    let apiUrl = "http://localhost:5000/api/v1/ads";
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
      <Header1 className="flex flex-col justify-center items-center w-full" />

      <div className="w-[95%] mx-auto bg-[rgba(250, 250, 250, 1)]">
        <div className="w-[100%] mx-auto h-[345px] bg-gray-200 flex  mt-10 justify-center">
          <p className="pt-[12%] text-xl">AD</p>
        </div>

        <div className="flex flex-row mx-auto sm:flex-col mq450:flex-col mq750:flex-col gap-5  w-[100%]  mx-auto">
          <div className="w-[76%] sm:w-[100%] mq750:w-[100%] mx-auto ">
            <div className="w-auto flex flex-row mt-16">
              <DropdownButton text="Sort Default" />
              {/*This is Filter by section */}
              <div
                className="flex justify-center items-center gap-2  p-4 border-[1px] border-solid border-black-900_87 rounded-31xl
              w-[150px] h-[50px] cursor-pointer"
                onClick={() => setFilter(!filter)}
              >
                <img src={arrow} className="w-[11px] h-[20px] ml-3" />
                <p className="text-[14px] mt-[0.5] text-[#000000df] font-poppins font-medium">Filter By</p>
              </div>
            </div>

            {/*This is Filter Default section*/}
            {filter && (
              <div className=" mt-5 mx-auto sm:w-[100%] mq750:w-[100%] w-[100%] ">
                <div className="w-[100%] h-[60px] rounded-t-[27px] border border-solid border-gray-300 border-b-0 flex flex-row pt-3 mr-4 space-x-2">
                  <img
                    src={arrow}
                    alt=""
                    className="w-[11px] h-[20px] ml-5 mt-1"
                  />
                  <p className="w-[80%] mt-[2px] text-[15px]">
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
                  className="w-[100%] h-[150px] max-h-[200px] mq450:h-[200px] border border-solid border-gray-300 mr-4 
                         grid grid-rows-2 grid-cols-2  rounded-b-[27px]"
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
                        className="bg-white-A700 border-[1px] border-solid rounded border-r-black-900_03
                            w-[13px] h-[13px]"
                      />

                      <label
                        htmlFor="checkbox1"
                        className="flex-1 relative capitalize shrink-0 text-[14px] font-extralight mt-[-2px]"
                      >
                        Motor
                      </label>
                    </div>
                  </p>
                  <p className="border border-solid border-gray-300 pl-2 font-medium ">
                    Price
                    <br />
                    <div className="w-[70%] ml-3">
                      <Slider
                        range
                        defaultValue={[0, 50]}
                        onChange={handleSliderChange}
                      />
                    </div>
                  </p>
                  <p className="border-t border-r border-solid border-gray-300 pl-2 font-medium items-stretch h-[60%]">
                    Subcategories <br />
                    <div className="space-x-1 flex mt-1">
                      <input
                        id="checkbox1"
                        type="checkbox"
                        className="bg-white-A700 border-[1px] border-solid rounded border-r-black-900_03
                            w-[13px] h-[13px]"
                        value="computers"
                        onChange={handleSubCategoryChange}
                      />

                      <label
                        htmlFor="checkbox1"
                        className="flex-1 relative capitalize shrink-0 text-[14px] font-extralight mt-[-2px]"
                      >
                        Motor
                      </label>
                      {/*another one checkbox */}
                      <input
                        id="checkbox1"
                        type="checkbox"
                        className="bg-white-A700 border-[1px] border-solid rounded border-r-black-900_03
                            w-[13px] h-[13px]"
                        value="computers"
                        onChange={handleSubCategoryChange}
                      />

                      <label
                        htmlFor="checkbox1"
                        className="flex-1 relative capitalize shrink-0 text-[14px] font-extralight mt-[-2px]"
                      >
                        Motor 2
                      </label>
                    </div>
                  </p>
                  <p className="border-l border-t border-solid border-gray-300 pl-2 font-medium  ">
                    cities
                    <form>
                      <select
                        className="w-[80%] h-[40px] border rounded-[7px]
              border-solid border-gray-400 pl-2 text-[15px] font-poppins mt-1"
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

            <div className="grid grid-cols-3 gap-3 w-[95%] mx-auto sm:w-[100%] mq750:w-[100%] md:grid-cols-2 mq450:grid-cols-2 mq750:grid-cols-2 mt-16">
              {/* components */}
              {allProduct.map((item) => {
                if (loading) {
                    return <Loading />;
                  
                }
return <>    <ProductCart {...{ item }} />
</>
              }
            
              )}
            </div>
          </div>

          <div className="h-[1200] sm:h-[110px] mq750:h-[110px] w-[20%] mx-auto sm:w-[100%] mq750:w-[100%] bg-gray-200 mt-20 flex justify-center items-center">
            AD
          </div>
        </div>
      </div>
      <Footer className="flex justify-center items-center w-full mt-[145px] p-[34px] bg-gray-100_01 inline" />
    </div>
  );
};

export default Products;
